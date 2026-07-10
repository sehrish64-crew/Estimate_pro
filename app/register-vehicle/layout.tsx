import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Register Vehicle - Vehicle Health Estimate',
  description: 'Register your vehicle on Vehicle Health Estimate',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
