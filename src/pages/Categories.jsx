import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import { MOCK_CATEGORIES } from '../lib/mockData'
import { mobileViewport } from '../lib/animationUtils'

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-pearl">
      <div className="pt-28 pb-10 bg-snow border-b border-ivory">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="section-eyebrow mb-2">Browse All</div>
          <h1 className="font-display text-5xl font-light text-ink">Jewelry Categories</h1>
          <p className="section-subtitle mt-2">Six distinct worlds of craftsmanship, each with its own beauty.</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={mobileViewport}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/collection?category=${cat.name}`}
                className="category-card block relative overflow-hidden bg-white group"
                style={{ height: 380 }}
              >
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="font-heading text-xs tracking-[0.3em] uppercase text-gold mb-2">{cat.productCount} Pieces</div>
                  <h2 className="font-display text-3xl font-light text-white mb-3">{cat.name}</h2>
                  <div className="inline-flex items-center gap-2 font-heading text-xs tracking-widest uppercase text-white/60 group-hover:text-gold transition-colors duration-300">
                    Explore <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
