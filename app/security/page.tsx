import type { Metadata } from 'next'
import SecurityPageClient from './security-client'

export const metadata: Metadata = {
  title: 'Security - Vehicle Health Estimate',
  description: 'Learn about Vehicle Health Estimate security measures protecting your vehicle history data with industry-leading encryption and privacy standards.',
  openGraph: {
    title: 'Security - Vehicle Health Estimate',
    description: 'Our commitment to data security and privacy.',
    url: 'https://Vehicle Health Estimate.com/security',
    type: 'website',
  },
}

export default function SecurityPage() {
  return <SecurityPageClient />
}
