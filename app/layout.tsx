import React from "react"
import type { Metadata } from 'next'
import { Roboto, Abhaya_Libre } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react' // Standard Vercel analytics import
import './globals.css'

// 1. Configure Yoga-Specific Fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-roboto'
});

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ['400', '700', '800'],
  variable: '--font-abhaya'
});

// 2. High-Value Metadata (SEO & WhatsApp Previews)
export const metadata: Metadata = {
  title: 'Yoga with Maha | Ladies Yoga & Wellness in Karachi',
  description: 'Certified Yoga Alliance instructor in North Nazimabad. Offering specialized Chair Flow for seniors, Corporate Wellness, and private ladies-only batches.',
  keywords: ['Yoga Karachi', 'Ladies Yoga North Nazimabad', 'Chair Yoga Pakistan', 'Yoga with Maha'],
  openGraph: {
    title: 'Yoga with Maha - Movement + Mindset + Life',
    description: 'Join our new yoga batch in Karachi. Online & Onsite classes available.',
    url: 'https://yogawithmaha.com', // Replace with her actual domain later
    siteName: 'Yoga with Maha',
    images: [
      {
        url: '/og-image.jpg', // Make sure to put a nice photo of her logo/studio in /public
        width: 1200,
        height: 630,
        alt: 'Yoga with Maha Session',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // 3. Injecting Font Variables into the HTML
    <html lang="en" className={`${abhaya.className} ${roboto.className}`}>
      <body className="font-body antialiased bg-[#F8F7FF] text-[#2D1B4D]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}