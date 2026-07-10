"use client"

import { useState } from 'react'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'
import { useTranslations } from '@/lib/translations'

export default function Header() {
  const { t } = useTranslations()
  const [mobileOpen, setMobileOpen] = useState(false)

  const nav = [
    { href: '/', label: t('nav_home') },
    { href: '/pricing', label: t('nav_pricing') },
    { href: '/contact-us', label: t('nav_contact') },
    { href: '/about-us', label: t('nav_about') },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" className="h-6 md:h-8" alt="Vehicle Health Estimate" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-white/80">
            {nav.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="relative hover:text-[#149544] transition font-medium group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#149544] group-hover:w-full transition-all" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
            >
              <Menu className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#149544]/40 to-transparent" />
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl p-6">
          <div className="flex justify-between items-center mb-8">
            <img src="/logo.png" className="h-6" alt="Vehicle Health Estimate" />
            <button onClick={() => setMobileOpen(false)}>
              <X className="text-white" />
            </button>
          </div>

          <div className="space-y-6 text-white text-lg">
            {nav.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block hover:text-[#149544] transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
