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

    console.log('\n📝 Creating order with data:', { 
      customer_name,
      customer_email, 
      customer_phone,
      vehicle_type, 
      package_type,
      amount,
      currency,
      paymentProvider
    })

    if (!customer_name || !customer_email || !customer_phone || !vehicle_type || !identification_type || !identification_value || !package_type || !amount) {
      console.error('❌ Missing required fields:', { 
        customer_email: !!customer_email,
        vehicle_type: !!vehicle_type,
        identification_type: !!identification_type,
        identification_value: !!identification_value,
        package_type: !!package_type,
        amount: !!amount,
      })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('✓ All required fields present, inserting order with package_type:', package_type)
    const order = await insertOrder({
      customer_name: customer_name || null,
      customer_phone: customer_phone || null,
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

    console.log('✅ Order created successfully:', { 
      orderId: order.id, 
      orderNumber: order.order_number,
      packageType: order.package_type,
      amount: order.amount
    })

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL || ''
      const notificationResp = await fetch(`${baseUrl}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'order_notification',
          orderId: order.id,
          orderNumber: order.order_number,
          customerName: order.customer_name || '',
          customerPhone: order.customer_phone || '',
          customerEmail: order.customer_email,
          vehicleType: order.vehicle_type,
          identificationType: order.identification_type,
          identificationValue: order.identification_value,
          packageType: order.package_type,
          countryCode: order.country_code || body.country_code || 'US',
          amount: parseFloat(String(order.amount)),
          currency: order.currency,
          paymentStatus: 'pending',
        }),
      })

      if (!notificationResp.ok) {
        const text = await notificationResp.text().catch(() => '')
        console.warn('Warning: failed to send order notification email on create:', notificationResp.status, text)
      }
    } catch (emailError) {
      console.warn('Warning: email notification failed during order create:', emailError)
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
      orderNumber: order.order_number,
    })
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error)
    console.error('❌ Error creating order:', errorMsg)
    console.error('Full error:', error)
    return NextResponse.json(
      { error: 'Failed to create order: ' + errorMsg },
      { status: 500 }
    )
  }
}
