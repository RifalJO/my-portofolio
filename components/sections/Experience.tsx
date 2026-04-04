import { experience } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-3xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-20">
          <SectionLabel>Career &amp; Education</SectionLabel>
          <h2 className="font-[family-name:var(--font-display)] text-5xl italic tracking-tight">The Journey</h2>
        </div>

        <div className="space-y-16 border-l-2 border-black/[0.08] pl-8">
          {experience.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.1}>
              <div className="relative">
                <div className="absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-[#006E1C]" />
                <p className="font-[family-name:var(--font-display)] text-[#006E1C] text-lg mb-3">{item.period}</p>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                  <h3 className="font-[family-name:var(--font-display)] text-3xl">{item.role}</h3>
                  <span className="text-sm uppercase tracking-widest text-[#9CA3AF]">{item.org}</span>
                </div>
                {item.gpa && (
                  <span className="inline-block bg-[#D1FAE5] text-[#006E1C] text-xs font-medium px-3 py-1 rounded-full mb-4">
                    GPA {item.gpa}
                  </span>
                )}
                <ul className="space-y-2 text-[#6B7280] list-disc pl-5 marker:text-[#006E1C]">
                  {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
