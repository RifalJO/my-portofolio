'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <AnimatedSection>
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="font-[family-name:var(--font-display)] text-6xl tracking-tight">
              Selected <span className="italic">Works</span>
            </h2>
          </div>
          <p className="hidden md:block text-sm uppercase tracking-widest text-[#9CA3AF]">2025 — 2026</p>
        </div>

        {/* Featured: MoCal — full width */}
        {projects.filter(p => p.featured).map(p => (
          <div key={p.id} className="group mb-16">
            <div className="rounded-[20px] overflow-hidden mb-8 bg-[#E8E8E6]">
              {/* REPLACE: MoCal app screenshot */}
              <Image
                src={p.image}
                alt={p.title}
                width={1400}
                height={600}
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <div className="space-y-3">
                <h3 className="font-[family-name:var(--font-display)] text-4xl">{p.title}</h3>
                <p className="text-sm text-[#9CA3AF]">{p.subtitle} · {p.period}</p>
                <p className="text-[#6B7280] max-w-2xl">{p.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#D1FAE5] text-[#006E1C] rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-display)] text-xl italic hover:text-[#006E1C] hover:pr-4 transition-all duration-300 self-start md:self-center whitespace-nowrap"
              >
                View Live →
              </a>
            </div>
          </div>
        ))}

        {/* Remaining 3 — grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map(p => (
            <motion.div key={p.id} className="group" whileHover={{ y: -4 }}>
              <div className="aspect-[16/9] rounded-[16px] overflow-hidden bg-[#E8E8E6] mb-5 relative">
                {/* REPLACE: project screenshot */}
                <Image
                  src={p.image}
                  alt={p.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-[#006E1C] text-white text-xs font-medium px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl mb-1">{p.title}</h3>
              <p className="text-xs text-[#9CA3AF] mb-3">{p.subtitle} · {p.period}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#FAFAF8] border border-black/[0.06] rounded-full text-xs text-[#6B7280]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {p.link !== '#' && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-display)] italic text-sm hover:text-[#006E1C] transition-colors"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
