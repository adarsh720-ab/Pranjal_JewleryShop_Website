import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { mobileViewport } from '../lib/animationUtils'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { MOCK_PRODUCTS, formatPrice } from '../lib/mockData'

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [activeImg, setActiveImg] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      const found = MOCK_PRODUCTS.find(p => p.id === id)
      setProduct(found || null)
      setLoading(false)
    }, 400)
  }, [id])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-pearl">
      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  )

  if (!product) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pearl gap-4">
      <p className="font-display text-3xl text-stone">Piece not found</p>
      <Link to="/collection" className="btn-outline">Back to Collection</Link>
    </div>
  )

  const similar = MOCK_PRODUCTS.filter(p => p.id !== product.id && p.category?.name === product.category?.name).slice(0, 4)
  const images  = product.imageUrls?.length > 0
    ? product.imageUrls
    : ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85']

  return (
    <main className="min-h-screen bg-pearl">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-snow border-b border-ivory">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <nav className="flex items-center gap-2 font-heading text-xs tracking-widest uppercase text-stone">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/collection" className="hover:text-gold transition-colors">Collection</Link>
            <span>/</span>
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-14">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Images */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            {/* Main image */}
            <div className="relative overflow-hidden bg-snow mb-4" style={{ paddingBottom: '100%' }}>
              <img
                src={images[activeImg]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />
              {product.isNewArrival && (
                <div className="absolute top-5 left-5">
                  <span className="badge-new">New Arrival</span>
                </div>
              )}
            </div>
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-all duration-200 ${activeImg === i ? 'border-gold' : 'border-ivory hover:border-warm'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="font-heading text-xs tracking-[0.3em] uppercase text-gold mb-3">
              {product.category?.name}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-light text-ink leading-tight mb-3">
              {product.name}
            </h1>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">{Array(5).fill('★').map((s, i) => <span key={i} className="text-gold text-sm">{s}</span>)}</div>
              <span className="text-stone text-xs font-light">(24 reviews)</span>
            </div>

            <div className="gold-line-short mb-6" />

            <div className="font-display text-4xl font-light text-ink mb-6">
              {formatPrice(product.price)}
            </div>

            <p className="text-charcoal text-sm leading-relaxed font-light mb-8">
              {product.description}
            </p>

            {/* Specs table */}
            <div className="border border-ivory divide-y divide-ivory mb-8">
              {[
                ['Metal', product.metalType],
                ['Weight', product.weight],
                ['Category', product.category?.name],
                ['Availability', product.stockStatus],
              ].map(([key, val]) => (
                <div key={key} className="flex px-5 py-3 gap-4">
                  <span className="font-heading text-xs tracking-widest uppercase text-stone w-28 flex-shrink-0">{key}</span>
                  <span className={`text-sm font-light ${key === 'Availability' ? (val === 'Available' ? 'text-sage' : 'text-red-400') : 'text-charcoal'}`}>{val}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-outline flex-1 justify-center">
                Book a Consultation
              </Link>
            </div>

          </motion.div>
        </div>

        {/* Similar products */}
        {similar.length > 0 && (
          <div className="mt-24">
            <div className="section-eyebrow mb-3">You May Also Love</div>
            <h2 className="font-display text-3xl font-light text-ink mb-10">Similar Pieces</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similar.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
