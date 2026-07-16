import { Metadata } from 'next'
import PricingClient from './pricing-client'

export const metadata: Metadata = {
  title: 'Essential Plan - Vehicle Health Estimate Vehicle History Reports',
  description:
    'Essential Plan vehicle history report for $40. Get instant access to trusted vehicle history data.',
  openGraph: {
    title: 'Essential Plan - Vehicle Health Estimate Vehicle History Reports',
    description:
      'Essential Plan vehicle history report for $40. Get instant access to trusted vehicle history data.',
    url: 'https://Vehicle Health Estimate.com/pricing',
    type: 'website',
  },
}

export default function Pricing() {
  return <PricingClient />
}
