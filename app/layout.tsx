import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhamad Rizki Rifaldi — Data Enthusiast & ML Practitioner',
  description: 'Portfolio of Muhamad Rizki Rifaldi, a Data Analyst and ML practitioner from Jakarta. Python, SQL, Scikit-learn, Power BI, Tableau.',
  keywords: ['Data Analyst', 'Machine Learning', 'Python', 'SQL', 'Portfolio', 'Jakarta', 'Gunadarma'],
  authors: [{ name: 'Muhamad Rizki Rifaldi' }],
  openGraph: {
    title: 'Muhamad Rizki Rifaldi — Data Enthusiast & ML Practitioner',
    description: 'Portfolio of Muhamad Rizki Rifaldi',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
