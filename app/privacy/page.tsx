import type { Metadata } from 'next'
import PrivacyPageClient from './privacy-client'

export const metadata: Metadata = {
  title: 'Privacy Policy - Vehicle Health Estimate',
  description: 'Read our privacy policy to understand how Vehicle Health Estimate collects, uses, and protects your personal information.',
  openGraph: {
    title: 'Privacy Policy - Vehicle Health Estimate',
    description: 'Our commitment to protecting your personal information and privacy.',
    url: 'https://Vehicle Health Estimate.com/privacy',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}
