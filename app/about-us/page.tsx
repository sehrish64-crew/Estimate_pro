import { Metadata } from 'next'
import AboutUsClient from './about-us-client'

export const metadata: Metadata = {
  title: 'About Vehicle Health Estimate - Vehicle History Transparency',
  description:
    'Learn how Vehicle Health Estimate is driving transparency in the automotive industry with vehicle history reports from 900+ global databases.',
  openGraph: {
    title: 'About Vehicle Health Estimate - Vehicle History Transparency',
    description:
      'Learn how Vehicle Health Estimate is driving transparency in the automotive industry with vehicle history reports from 900+ global databases.',
    url: 'https://Vehicle Health Estimate.com/about-us',
    type: 'website',
  },
}

export default function AboutUs() {
  return <AboutUsClient />
}
