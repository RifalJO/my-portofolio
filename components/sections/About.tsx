import Image from 'next/image'
import { personal } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <SectionLabel>About</SectionLabel>
            <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-tight">
              Crafting clarity from <span className="italic">complexity.</span>
            </h2>
            {personal.bio.map((p, i) => (
              <p key={i} className="text-[#6B7280] leading-relaxed text-lg">{p}</p>
            ))}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {personal.stats.map(stat => (
                <div key={stat.label} className="bg-white rounded-[16px] p-6 border border-black/[0.06]">
                  <span className="font-[family-name:var(--font-display)] text-3xl text-[#006E1C]">{stat.value}</span>
                  <p className="text-xs uppercase tracking-widest text-[#9CA3AF] mt-1">{stat.label}</p>
                  <p className="text-xs text-[#9CA3AF]">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="aspect-[3/4] rounded-[20px] overflow-hidden">
            <Image
              src="/assets/profile-picture.jpg"
              alt="Rizki Rifaldi portrait"
              width={600}
              height={800}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
