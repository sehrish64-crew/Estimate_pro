import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Registered Vehicles - Vehicle Health Estimate',
  description: 'View and manage registered vehicles on Vehicle Health Estimate',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
