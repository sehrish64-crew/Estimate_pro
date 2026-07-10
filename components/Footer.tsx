"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { useTranslations } from '@/lib/translations'

const PRIMARY = "#149544"

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const { t } = useTranslations()
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-[#0f0f0f] to-black text-[#d3d3d3]">

      {/* GREEN GLOW (theme match) */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#149544]/20 blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#149544]/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">

        {/* MAIN CONTENT CARD */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl">

          {/* TEXT */}
          <div className="text-center border-b border-white/10 pb-6">
            <p className="text-[11px] sm:text-xs md:text-sm text-[#d3d3d3]/80 leading-relaxed">

              <span className="block mb-2">
                Nexlify Labs LTD VIN Reports. All Rights Reserved. {new Date().getFullYear()} © Vehicle Health Estimate. Use of this Website constitutes acceptance of{' '}
              </span>

              <Link href="/terms" className="hover:text-[#149544] transition">
                Terms & Conditions
              </Link>
              {' , '}

              <Link href="/privacy" className="hover:text-[#149544] transition">
                Privacy Policy
              </Link>
              {' , '}

              <Link href="/refund-policy" className="hover:text-[#149544] transition">
                Refund Policy
              </Link>

              <span className="block mt-2">
                This site is owned and operated by Nexlify Labs LTD - an approved NMVTIS data provider.
                <span className="text-[#d3d3d3]"> Email: Info@vehiclehealthestimate.com</span>
              </span>

            </p>
          </div>

          {/* PAYMENT SECTION */}
          <div className="flex flex-col items-center mt-8 gap-4">

            <p className="text-xs text-white/50 uppercase tracking-wider">
              Secure Payments
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 bg-black/40 border border-white/10 px-4 sm:px-6 py-3 rounded-2xl">

              <img src="/paypal-icon.svg" className="h-5 sm:h-6 opacity-80 hover:opacity-100 transition" />
              <img src="/master-card-icon.svg" className="h-5 sm:h-6 opacity-80 hover:opacity-100 transition" />
              <img src="/visa-icon.svg" className="h-5 sm:h-6 opacity-80 hover:opacity-100 transition" />
              <img src="/norton-extra-text-icon.svg" className="h-5 sm:h-6 opacity-80 hover:opacity-100 transition" />

            </div>
          </div>
        </div>
      </div>

      {/* TOP LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#149544] to-transparent" />
    </footer>
  )
}