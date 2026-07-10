import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Database Setup - Vehicle Health Estimate',
  description: 'Database setup and diagnostics for Vehicle Health Estimate',
}

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
