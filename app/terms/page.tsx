import type { Metadata } from 'next'
import TermsPageClient from './terms-client'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Vehicle Health Estimate',
  description: 'Read the terms and conditions for using Vehicle Health Estimate services. Understand your rights and responsibilities.',
  openGraph: {
    title: 'Terms and Conditions - Vehicle Health Estimate',
    description: 'Our terms explain the rules for using Vehicle Health Estimate vehicle history reports.',
    url: 'https://Vehicle Health Estimate.com/terms',
    type: 'website',
  },
}

export default function TermsPage() {
  return <TermsPageClient />
}
