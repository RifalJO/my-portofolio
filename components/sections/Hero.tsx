'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { personal } from '@/data/portfolio'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function Hero() {
  return (
    <section className="pt-40 pb-32 px-6 max-w-5xl mx-auto text-center">
      <motion.div variants={container} initial="hidden" animate="visible" className="space-y-8">
        {/* Row 1 — Identity strip */}
        <motion.div variants={item} className="flex items-center justify-center gap-3">
          {/* REPLACE: your professional headshot */}
          <Image
            src="/assets/profile-picture.jpg"
            alt="Rizki Rifaldi"
            width={80}
            height={80}
            className="rounded-full object-cover ring-2 ring-black/[0.08]"
          />
          <div className="text-left">
            <p className="text-sm text-[#6B7280]">{personal.name}</p>
            <p className="text-sm text-[#9CA3AF]">Data Enthusiast · Jakarta</p>
          </div>
        </motion.div>

        {/* Row 2 — H1 */}
        <motion.h1
          variants={item}
          className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-8xl leading-[0.92] tracking-tight"
        >
          Hi, I&apos;m Rifaldi:
          <br />
          <span className="italic">Data Enthusiast</span>{' '}
          <span className="italic text-[#006E1C]">&amp; Problem Solver</span>
        </motion.h1>

        {/* Row 3 — Subtext */}
        <motion.p
          variants={item}
          className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed"
        >
          Final-year Information Systems student at Gunadarma University.
          I turn raw data into actionable insights using Python, SQL, and Machine Learning —
          with a strong drive to grow in a data-focused environment.
        </motion.p>

        {/* Row 4 — CTAs */}
        <motion.div variants={item} className="flex items-center justify-center gap-4 flex-wrap">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#006E1C] text-white px-8 py-4 rounded-full text-sm font-medium"
          >
            View My Work
          </motion.a>

          {/* REPLACE: update href when CV PDF is uploaded to /public/cv.pdf */}
          <motion.a
            href={personal.cvPath}
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border border-black/[0.15] text-[#1A1A1A] px-8 py-4 rounded-full text-sm font-medium hover:bg-black/[0.03]"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Row 5 — Hero Banner */}
        <motion.div variants={item} className="w-full rounded-[20px] overflow-hidden bg-[#E8E8E6] mt-8">
          {/* REPLACE: hero banner — workspace photo, data dashboard screenshot, or professional portrait */}
          <Image
            src="/assets/mocal.png"
            alt="Hero banner"
            width={1400}
            height={600}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
