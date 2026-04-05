import Image from 'next/image'
import { blogPosts } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Blog() {
  return (
    <section id="blog" className="py-24 px-6 max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block bg-[#D1FAE5] text-[#006E1C] text-xs font-medium px-4 py-1.5 rounded-full">
            Coming Soon
          </span>
          <SectionLabel>Thoughts &amp; Insights</SectionLabel>
          <h2 className="font-[family-name:var(--font-display)] text-5xl italic tracking-tight">Blog / Insights</h2>
          <p className="text-[#6B7280] max-w-lg mx-auto">
            Notes on data, machine learning, and the craft of problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-70 pointer-events-none select-none">
          {blogPosts.map(post => (
            <div key={post.id}>
              <div className="aspect-[16/9] rounded-[16px] overflow-hidden bg-[#E8E8E6] mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="inline-block bg-[#FAFAF8] border border-black/[0.06] text-[#6B7280] text-xs px-3 py-1 rounded-full mb-3">
                {post.tag}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-2 leading-snug">{post.title}</h3>
              <p className="text-sm text-[#9CA3AF] mb-3">{post.excerpt}</p>
              <p className="text-xs text-[#D1D5DB] uppercase tracking-widest">{post.date}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
