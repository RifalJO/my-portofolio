'use client'
import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16 space-y-4">
          <SectionLabel>Core Competencies</SectionLabel>
          <h2 className="font-[family-name:var(--font-display)] text-6xl tracking-tight">My Toolkit</h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">A curated stack built through real projects and certified learning.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(group => (
            <motion.div
              key={group.category}
              whileHover={{ y: -4, boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}
              className="bg-white rounded-[20px] p-8 border border-black/[0.06] space-y-5"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl italic">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#FAFAF8] rounded-full border border-black/[0.06] text-sm text-[#1A1A1A]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
