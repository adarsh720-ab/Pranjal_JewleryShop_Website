import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { MOCK_PRODUCTS, MOCK_CATEGORIES, MOCK_TESTIMONIALS } from '../lib/mockData'
import { fadeUp, mobileViewport } from '../lib/animationUtils'

export default function HomePage() {
  const featured    = MOCK_PRODUCTS.filter(p => p.isFeatured).slice(0, 4)
  const newArrivals = MOCK_PRODUCTS.filter(p => p.isNewArrival)

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-pearl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85"
            alt=""
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pearl via-pearl/90 to-pearl/40" />
        </div>

        {/* Decorative lines — desktop only */}
        <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-warm to-transparent opacity-30" style={{ left: '8%' }} />
        <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-warm to-transparent opacity-30" style={{ right: '8%' }} />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 pt-28 pb-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="gold-line-short" />
              <span className="section-eyebrow">Est. 1987 · Jaipur, India</span>
            </motion.div>

            <motion.h1
              className="font-display font-light text-ink mb-5"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 1.1 }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              Where Gold<br />
              Meets <span className="italic text-shimmer">Eternity</span>
            </motion.h1>

            <motion.p
              className="section-subtitle max-w-md mb-8 text-base"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Exquisite handcrafted jewelry for those who appreciate the extraordinary.
              Each piece a testament to unparalleled artisanship and enduring elegance.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              <Link to="/collection" className="btn-primary">Explore Collection <span>→</span></Link>
              <Link to="/about" className="btn-outline">Our Story</Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-ivory"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {[['35+', 'Years of Excellence'], ['10K+', 'Families Served'], ['120', 'Master Artisans']].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl text-ink font-light">{num}</div>
                  <div className="font-heading text-xs tracking-widest uppercase text-stone mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image collage — hidden on small screens */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden md:grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=85" alt="" className="w-full h-52 object-cover" />
              <img src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=1600&q=85" alt="" className="w-full h-36 object-cover" />
            </div>
            <div className="space-y-4 mt-8">
              <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=85" alt="" className="w-full h-36 object-cover" />
              <img src="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&q=85" alt="" className="w-full h-52 object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="font-heading text-xs tracking-[0.3em] uppercase text-warm">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-warm to-transparent" />
        </motion.div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-snow">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="section-eyebrow mb-3">Curated Collections</div>
              <h2 className="section-title">Browse by Category</h2>
            </div>
            <Link to="/categories" className="btn-outline self-start md:self-auto">View All →</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {MOCK_CATEGORIES.slice(0, 6).map((cat, i) => (
              <motion.div
                key={cat.id}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={mobileViewport} custom={i}
              >
                <Link
                  to={`/collection?category=${cat.name}`}
                  className="category-card group block relative overflow-hidden bg-white"
                  style={{ height: 'clamp(160px, 25vw, 320px)' }}
                >
                  <img src={cat.imageUrl} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                    <div className="font-display text-lg md:text-2xl font-light">{cat.name}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-pearl">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="section-eyebrow mb-3">Editor's Selection</div>
            <h2 className="section-title">Featured Pieces</h2>
            <div className="gold-line max-w-12 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/collection" className="btn-outline">View All Pieces →</Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE DIVIDER ──────────────────────────────────────────────── */}
      <div className="bg-ink py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(6).fill('HANDCRAFTED · ETHICALLY SOURCED · BIS HALLMARKED · PRANJAL ENTERPRISE SERVICE · ').map((t, i) => (
            <span key={i} className="font-heading text-xs tracking-[0.3em] uppercase text-gold/100 mx-8">{t}</span>
          ))}
        </div>
      </div>

      {/* ── NEW ARRIVALS ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="section-eyebrow mb-3">Just In</div>
              <h2 className="section-title">New Arrivals</h2>
            </div>
            <Link to="/collection?filter=new" className="btn-outline self-start">View All New →</Link>
          </div>
          <div className="h-scroll-container">
            <div className="flex gap-4 md:gap-6 pb-2" style={{ width: 'max-content' }}>
              {newArrivals.map((p, i) => (
                <div key={p.id} style={{ width: 'clamp(240px, 70vw, 300px)', flexShrink: 0 }}>
                  <ProductCard product={p} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY Pranjal Enterprise ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-snow">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="section-eyebrow mb-3">Our Promise</div>
            <h2 className="section-title">Why Choose Pranjal Enterprise</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: '⚜', title: 'Hallmark Certified', desc: 'Every piece carries BIS hallmark certification, guaranteeing purity.' },
              { icon: '◆', title: 'Ethically Sourced', desc: 'Conflict-free gemstones traced from certified mines worldwide.' },
              { icon: '✦', title: 'Master Craftsmanship', desc: 'Artisans with decades of experience handcraft each piece.' },
              { icon: '∞', title: 'Lifetime Service', desc: 'Free cleaning, polishing and minor repairs for the life of your jewelry.' },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={mobileViewport} custom={i}
                className="text-center px-2"
              >
                <div className="text-2xl md:text-3xl text-gold mb-4">{f.icon}</div>
                <h3 className="font-heading text-xs tracking-widest uppercase text-ink mb-2">{f.title}</h3>
                <p className="text-stone text-xs md:text-sm leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: 'clamp(280px, 40vw, 500px)' }}>
        <img
          src="https://images.unsplash.com/photo-1573408301185-9519f94815a5?w=1600&q=85"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={mobileViewport} transition={{ duration: 0.6 }}
          >
            <div className="font-heading text-sm tracking-[0.4em] uppercase text-gold/100 mb-4">Bespoke Jewelry</div>
            <h2 className="font-display font-light text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 4vw, 4rem)' }}>
              A Piece Made Only for You
            </h2>
            <p className="text-white/80 font-light text-sm max-w-xs md:max-w-md mx-auto mb-6">
              Commission a bespoke creation — work with our master jewelers to design something entirely your own.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 md:px-10 py-3 md:py-4 border border-white text-white font-heading text-xs tracking-widest uppercase hover:bg-white hover:text-ink transition-all duration-300">
              Begin Your Journey →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-pearl">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="section-eyebrow mb-3">Client Voices</div>
            <h2 className="section-title">What Our Patrons Say</h2>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pb-10"
          >
            {MOCK_TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white border border-ivory p-6 md:p-8 h-full">
                  <div className="flex gap-0.5 mb-4">
                    {Array(t.rating).fill('★').map((s, j) => <span key={j} className="text-gold text-sm">{s}</span>)}
                  </div>
                  <p className="font-display text-lg md:text-xl font-light text-charcoal leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-ivory flex items-center justify-center font-heading text-sm text-gold flex-shrink-0">{t.initials}</div>
                    <div>
                      <div className="font-heading text-xs tracking-widest uppercase text-ink">{t.name}</div>
                      <div className="text-stone text-xs mt-0.5">{t.city}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-ink text-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <div className="font-heading text-xs tracking-[0.4em] uppercase text-gold mb-4">Stay Connected</div>
          <h2 className="font-display font-light mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)' }}>
            Exclusive Access &amp; First Looks
          </h2>
          <p className="text-white/40 text-sm font-light max-w-sm md:max-w-md mx-auto mb-8">
            Be first to discover new collections, private viewings, and curated offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-4 bg-white/8 border border-white/15 text-white placeholder-white/30 font-body text-sm outline-none focus:border-gold transition-colors"
            />
            <button className="px-8 py-4 bg-gold text-white font-heading text-xs tracking-widest uppercase hover:bg-gold-dark transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
