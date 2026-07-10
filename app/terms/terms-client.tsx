'use client'

import { useEffect } from 'react'
import { useTranslations } from '@/lib/translations'

export default function TermsPageClient() {
  const { t } = useTranslations()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold text-green-400">Terms and Conditions</h1>
          <p className="text-gray-300 text-lg">Last Updated: March 31st, 2026</p>
        </div>

        <div className="mt-10 space-y-8 max-w-3xl mx-auto text-gray-100">
          <section>
            <h2 className="text-2xl font-semibold text-green-400">1. Acceptance of Terms</h2>
            <p className="mt-3">Welcome to Vehicle Health Estimate.com, operated by Nexlify Labs LTD. By accessing and using our website and services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our services.</p>
            <p className="mt-3"><strong>Vehicle Health Estimate</strong> is a digital vehicle history platform powered by billions of verified records from 900+ global databases. We provide instant access to comprehensive vehicle reports including ownership history, accident records, odometer readings, title information, damage assessment, and theft records to help buyers make safer, smarter, and more transparent car purchasing decisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">2. About Nexlify Labs LTD</h2>
            <p className="mt-3">Nexlify Labs LTD provides vehicle history reports and VIN check services through Vehicle Health Estimate.com. Our services include access to vehicle history information, accident records, title information, odometer readings, and other vehicle-related data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">3. Services Provided</h2>
            <p className="mt-3">Nexlify Labs LTD offers the following services:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Vehicle history reports</li>
              <li>VIN (Vehicle Identification Number) decoder</li>
              <li>License plate lookup</li>
              <li>Vehicle damage and accident history</li>
              <li>Title and ownership records</li>
              <li>Odometer readings verification</li>
              <li>Recall information</li>
              <li>Market value estimates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">4. User Responsibilities</h2>
            <p className="mt-3">When using our services, you agree to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Provide accurate and complete information</li>
              <li>Use the services for lawful purposes only</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not resell or redistribute our reports without authorization</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">5. Report Accuracy and Disclaimer</h2>
            <p className="mt-3">While Nexlify Labs LTD strives to provide accurate and up-to-date information, we compile data from various sources including government agencies, insurance companies, and other data providers. We cannot guarantee the completeness or accuracy of all information. Users should verify critical information independently before making purchasing decisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">6. Pricing and Payment</h2>
            <p className="mt-3">Pricing for our services is displayed on our website. All prices are in USD and are subject to change without notice. Payment is processed securely through our authorized payment processor, Paddle. By purchasing a report, you agree to pay the stated price and authorize the charge to your payment method.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">7. Intellectual Property</h2>
            <p className="mt-3">All content on Vehicle Health Estimate.com, including but not limited to text, graphics, logos, images, and software, is the property of Nexlify Labs LTD or its licensors and is protected by copyright, trademark, and other intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">8. Privacy and Data Protection</h2>
            <p className="mt-3">Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">9. Refund Policy</h2>
            <p className="mt-3">Please refer to our Refund Policy for information about refunds and cancellations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">10. Limitation of Liability</h2>
            <p className="mt-3">Nexlify Labs LTD and Vehicle Health Estimate.com shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. Our total liability shall not exceed the amount paid by you for the specific service in question.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">11. Indemnification</h2>
            <p className="mt-3">You agree to indemnify and hold harmless Nexlify Labs LTD, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">12. Third-Party Links</h2>
            <p className="mt-3">Our website may contain links to third-party websites. Nexlify Labs LTD is not responsible for the content, accuracy, or practices of these external sites. Accessing third-party links is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">13. Modifications to Terms</h2>
            <p className="mt-3">Nexlify Labs LTD reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">14. Termination</h2>
            <p className="mt-3">Nexlify Labs LTD reserves the right to terminate or suspend access to our services at any time, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users, us, or third parties, or for any other reason.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">15. Governing Law</h2>
            <p className="mt-3">These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Kingdom and the England and Wales, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">16. Dispute Resolution</h2>
            <p className="mt-3">Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the London Court of international Arbitration (LCIA), rather than in court.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">17. Severability</h2>
            <p className="mt-3">If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining terms remain in full force and effect.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400">18. Contact Information</h2>
            <p className="mt-3">If you have any questions about these Terms and Conditions, please contact us:</p>
            <div className="mt-4 bg-gray-900 p-4 rounded-lg border border-cyan-500/30 space-y-2">
              <p className="text-gray-100"><strong>Nexlify Labs LTD</strong></p>
              <p className="text-gray-300"><strong>Email:</strong> <a href="mailto:Info@vehiclehealthestimate.com" className="text-cyan-400 hover:text-cyan-300 hover:underline">Info@vehiclehealthestimate.com</a></p>
              <p className="text-gray-300"><strong>Website:</strong> <a href="https://Vehicle Health Estimate.com" className="text-cyan-400 hover:text-cyan-300 hover:underline">https://Vehicle Health Estimate.com</a></p>
            </div>
          </section>

          <section className="bg-gray-900 p-6 rounded-lg border border-cyan-500/30 mt-8">
            <p className="text-sm text-gray-300">By accessing and using Vehicle Health Estimate.com, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
