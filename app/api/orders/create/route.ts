import { NextRequest, NextResponse } from 'next/server'
import { insertOrder } from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      customer_name,
      customer_email,
      customer_phone,
      vehicle_type,
      identification_type,
      identification_value,
      vin_number,
      package_type,
      country_code,
      currency,
      amount,
      paymentProvider,
    } = body

    console.log('📝 Creating order:', {
      customer_email,
      vehicle_type,
      package_type,
      amount,
    })

    if (
      !customer_name ||
      !customer_email ||
      !customer_phone ||
      !vehicle_type ||
      !identification_type ||
      !identification_value ||
      !package_type ||
      !amount
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const order = await insertOrder({
      customer_name,
      customer_phone,
      customer_email,
      vehicle_type,
      identification_type,
      identification_value,
      vin_number: vin_number || null,
      package_type,
      country_code: country_code || 'US',
      currency: currency || 'USD',
      amount,
      payment_provider: paymentProvider || undefined,
    })

    console.log('✅ Order created:', order.order_number)


    // SEND EMAIL NOTIFICATION
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        process.env.BASE_URL ||
        'https://vehiclehealthestimate.com'

      const emailUrl = `${baseUrl.replace(/\/$/, '')}/api/send-email`

      console.log('📧 Calling email API:', emailUrl)

      const response = await fetch(emailUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'order_notification',
          orderId: order.id,
          orderNumber: order.order_number,
          customerName: order.customer_name,
          customerPhone: order.customer_phone,
          customerEmail: order.customer_email,
          vehicleType: order.vehicle_type,
          identificationType: order.identification_type,
          identificationValue: order.identification_value,
          packageType: order.package_type,
          countryCode: order.country_code,
          amount: Number(order.amount),
          currency: order.currency,
          paymentStatus: 'pending',
        }),
      })


      if (!response.ok) {
        const errorText = await response.text()

        console.error(
          '❌ Email API failed:',
          response.status,
          errorText
        )
      } else {
        console.log('✅ Email notification sent')
      }

    } catch (emailError) {
      console.error(
        '❌ Email sending error:',
        emailError
      )
    }


    return NextResponse.json({
      success: true,
      orderId: order.id,
      orderNumber: order.order_number,
    })


  } catch (error) {

    console.error(
      '❌ Order creation failed:',
      error
    )

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Unknown error',
      },
      {
        status: 500,
      }
    )
  }
}