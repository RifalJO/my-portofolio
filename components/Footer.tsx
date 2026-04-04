import { personal } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="bg-[#ECEFEC] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        <p className="font-[family-name:var(--font-display)] text-xl italic">{personal.handle}</p>
        <p className="text-sm text-[#9CA3AF]">{personal.title} · {personal.location}</p>
        <div className="flex gap-8 text-xs uppercase tracking-widest text-[#9CA3AF]">
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="hover:text-[#006E1C] transition-colors">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
            className="hover:text-[#006E1C] transition-colors">LinkedIn</a>
          <a href={`mailto:${personal.email}`}
            className="hover:text-[#006E1C] transition-colors">Email</a>
        </div>
        <p className="text-xs text-[#D1D5DB]">© 2026 Muhamad Rizki Rifaldi. Crafted with intention.</p>
      </div>
    </footer>
  )
}
