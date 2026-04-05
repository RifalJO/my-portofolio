'use client'
import { personal } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="space-y-12">
          <div>
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="font-[family-name:var(--font-display)] text-6xl md:text-7xl tracking-tight leading-[0.92]">
              Let&apos;s turn your<br />
              <span className="italic text-[#006E1C]">data</span><br />
              into decisions.
            </h2>
          </div>
          <p className="text-[#6B7280] text-lg max-w-sm">
            Open for full-time Data Analyst roles, collaborations, or just a good conversation about data.
          </p>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#9CA3AF]">Reach Out</p>
            <div className="flex flex-col space-y-3 font-[family-name:var(--font-display)] text-2xl italic">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#006E1C] transition-colors w-fit"
              >
                LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#006E1C] transition-colors w-fit"
              >
                GitHub
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-[#006E1C] transition-colors w-fit"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
