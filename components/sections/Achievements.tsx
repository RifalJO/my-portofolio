'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { achievements } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CertificateModal } from '@/components/ui/CertificateModal'

export function Achievements() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeAchievement, setActiveAchievement] = useState<{
    title: string
    images: string[]
  } | null>(null)

  const openCert = (title: string, images: string[]) => {
    setActiveAchievement({ title, images })
    setModalOpen(true)
  }

  return (
    <>
      <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16 space-y-4">
            <SectionLabel>Awards &amp; Recognitions</SectionLabel>
            <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-tight">
              Awards &amp;<br /><span className="italic">Recognitions</span>
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Recognized for delivering high-impact solutions and continuously pushing the boundaries of applied data science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map(item => (
              <motion.div
                key={item.id}
                whileHover={{ y: -4, boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}
                className="bg-white rounded-[20px] p-8 border border-black/[0.06] space-y-4 flex flex-col"
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl leading-tight">{item.title}</h3>
                <p className="text-xs uppercase tracking-widest text-[#006E1C] font-medium">{item.org} · {item.year}</p>
                <p className="text-sm text-[#6B7280] flex-1">{item.description}</p>
                {item.certImages.length > 0 && (
                  <button
                    onClick={() => openCert(item.title, item.certImages)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#006E1C] hover:text-[#004d14] transition-colors group cursor-pointer self-start"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0"
                    >
                      <rect x="2" y="1" width="12" height="14" rx="2" />
                      <path d="M5 5h6M5 8h6M5 11h3" />
                    </svg>
                    <span className="group-hover:underline underline-offset-2">View Certificate</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {activeAchievement && (
        <CertificateModal
          images={activeAchievement.images}
          title={activeAchievement.title}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}
