import { Link } from 'react-router-dom'

const COLS = [
  {
    heading: 'Collections',
    links: [
      { label: 'Rings', to: '/collection?category=Rings' },
      { label: 'Necklaces', to: '/collection?category=Necklaces' },
      { label: 'Earrings', to: '/collection?category=Earrings' },
      { label: 'Bangles', to: '/collection?category=Bangles' },
      { label: 'Bracelets', to: '/collection?category=Bracelets' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Lumière', to: '/about' },
      { label: 'Craftsmanship', to: '/about' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Custom Made Jewellery', to: '/contact' },
      { label: 'New Designs', to: '/categories' },
      { label: 'Consultation', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-ivory">
      {/* Marquee */}
      <div className="overflow-hidden border-b border-ivory py-4 bg-snow">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8).fill('RINGS · NECKLACES · EARRINGS · BANGLES · BRACELETS · PENDANTS · ').map((t, i) => (
            <span key={i} className="font-heading text-sm tracking-[0.35em] uppercase text-black mx-6">{t}</span>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="font-heading text-2xl tracking-[0.3em] uppercase text-ink mb-4">Pranjal Enterprise</div>
          <div className="gold-line-short mb-5" />
          <p className="text-stone text-sm leading-relaxed font-light max-w-xs">
            Three generations of master craftsmanship devoted to creating jewelry that transcends time. Every piece, a legacy.
          </p>
          <div className="flex gap-3 mt-6">
            {['IG', 'PT', 'YT'].map(s => (
              <div key={s} className="w-9 h-9 border border-ivory flex items-center justify-center font-heading text-xs text-stone hover:border-gold hover:text-gold transition-all duration-300">
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {COLS.map(col => (
          <div key={col.heading}>
            <h4 className="font-heading text-xs tracking-[0.25em] uppercase text-stone mb-5">{col.heading}</h4>
            <ul className="space-y-3">
              {col.links.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-charcoal text-sm font-light hover:text-gold transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ivory">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-warm font-light">
          <span>© 2025 Pranjal Enterprise. All rights reserved.</span>
          <span className="flex items-center gap-2">
            Crafted with <span className="text-gold">◆</span> in Vadgaon (Kapashi Senapati) Tal. Kagal, dist. Kolhapur
          </span>
        </div>
      </div>
    </footer>
  )
}
