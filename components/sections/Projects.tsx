'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id)

  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0]

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="flex justify-between items-end mb-16">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="font-[family-name:var(--font-display)] text-6xl tracking-tight">
              Selected <span className="italic">Works</span>
            </h2>
          </div>
          <p className="hidden md:block text-sm uppercase tracking-widest text-[#9CA3AF]">2025 — 2026</p>
        </div>

        {/*
          Project picker sits beside the detail panel on desktop (and above it on
          mobile), so selecting a project never moves the page out from under the user.
        */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-12 items-start">
          {/* Picker */}
          <div
            role="tablist"
            aria-label="Select a project"
            className="order-first lg:order-last flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 lg:sticky lg:top-28"
          >
            {projects.map(p => {
              const isActive = p.id === activeProjectId

              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveProjectId(p.id)}
                  className={`group flex-shrink-0 w-[260px] lg:w-full snap-start text-left rounded-[16px] p-3 border transition-all duration-300 cursor-pointer lg:flex lg:items-center lg:gap-4 ${
                    isActive
                      ? 'bg-white border-[#006E1C] shadow-sm'
                      : 'border-black/[0.06] opacity-70 hover:opacity-100 hover:bg-white'
                  }`}
                >
                  <div className="relative aspect-[16/9] lg:w-32 lg:flex-shrink-0 rounded-[10px] overflow-hidden bg-[#E8E8E6] mb-3 lg:mb-0">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                    {p.badge && (
                      <span className="absolute top-1.5 left-1.5 bg-[#006E1C] text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`font-[family-name:var(--font-display)] text-lg leading-snug transition-colors ${
                        isActive ? 'text-black' : 'text-gray-600'
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#9CA3AF] mt-1">{p.period}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Detail */}
          <div className="min-w-0 lg:min-h-[640px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                role="tabpanel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group"
              >
                <div className="rounded-[20px] overflow-hidden mb-8 bg-[#E8E8E6]">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    width={1400}
                    height={600}
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-6">
                  <div className="space-y-3">
                    <h3 className="font-[family-name:var(--font-display)] text-4xl">{activeProject.title}</h3>
                    <p className="text-sm text-[#9CA3AF]">{activeProject.subtitle} · {activeProject.period}</p>
                    <p className="text-[#6B7280] max-w-2xl">{activeProject.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {activeProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-[#D1FAE5] text-[#006E1C] rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {activeProject.link !== '#' && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-display)] text-xl italic hover:text-[#006E1C] hover:pr-4 transition-all duration-300 self-start md:self-center whitespace-nowrap"
                    >
                      View Live →
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
