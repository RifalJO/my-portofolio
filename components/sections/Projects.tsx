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

        <div className="mb-16 min-h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
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
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-display)] text-xl italic hover:text-[#006E1C] hover:pr-4 transition-all duration-300 self-start md:self-center whitespace-nowrap"
                >
                  View Live →
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(p => {
            const isActive = p.id === activeProjectId
            
            return (
              <motion.div 
                key={p.id} 
                className={`group cursor-pointer transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`} 
                whileHover={{ y: -4 }}
                onClick={() => setActiveProjectId(p.id)}
              >
                <div className={`aspect-[16/9] rounded-[16px] overflow-hidden bg-[#E8E8E6] mb-5 relative transition-all duration-300 ${isActive ? 'ring-2 ring-[#006E1C] ring-offset-4 ring-offset-white' : ''}`}>
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
                <h3 className={`font-[family-name:var(--font-display)] text-2xl mb-1 transition-colors ${isActive ? 'text-black' : 'text-gray-600'}`}>{p.title}</h3>
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project →
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
      </AnimatedSection>
    </section>
  )
}
