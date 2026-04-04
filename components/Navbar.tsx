'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { personal } from '@/data/portfolio'

const navLinks = [
  { label: 'Hero', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F5F3]/85 backdrop-blur-xl border-b border-black/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left — Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006E1C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#006E1C]" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-lg">{personal.handle}</span>
          </a>

          {/* Center — Available badge (md+) */}
          <div className="hidden md:flex items-center gap-2 bg-[#D1FAE5] text-[#006E1C] rounded-full px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006E1C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006E1C]" />
            </span>
            <span className="italic font-[family-name:var(--font-body)]">Available for work</span>
          </div>

          {/* Right — Menu button */}
          <button
            onClick={() => setOpen(true)}
            className="font-[family-name:var(--font-body)] text-sm tracking-wide hover:text-[#006E1C] transition-colors cursor-pointer"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#F5F5F3] flex flex-col justify-center items-center"
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-6 w-12 h-12 flex items-center justify-center hover:text-[#006E1C] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {/* Nav Links */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="flex flex-col items-center gap-6"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
                  }}
                  whileHover={{ x: 8, color: '#006E1C' }}
                  className="font-[family-name:var(--font-display)] text-4xl md:text-6xl italic text-[#1A1A1A] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
