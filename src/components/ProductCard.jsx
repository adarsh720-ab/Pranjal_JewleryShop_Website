import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { formatPrice } from '../lib/mockData'
import { mobileViewport } from '../lib/animationUtils'

export default function ProductCard({ product, index = 0 }) {
  const image = product.imageUrls?.[0] || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={mobileViewport}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/collection/${product.id}`} className="block product-card group">
        {/* Image */}
        <div className="relative overflow-hidden bg-snow" style={{ paddingBottom: '100%' }}>
          <img
            src={image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/8 transition-all duration-500" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNewArrival && (
              <span className="badge-new">New</span>
            )}
            {product.isFeatured && !product.isNewArrival && (
              <span className="badge-featured">Featured</span>
            )}
          </div>

          {/* Quick view */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
            <div className="bg-white/90 backdrop-blur-sm text-center py-3">
              <span className="font-heading text-xs tracking-widest uppercase text-ink">View Details</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="font-heading text-xs tracking-widest uppercase text-gold mb-1.5">
            {product.category?.name}
          </div>
          <h3 className="font-display text-xl text-ink leading-snug mb-1 font-normal">
            {product.name}
          </h3>
          <p className="text-stone text-xs font-light mb-4">{product.metalType} · {product.weight}</p>

          <div className="flex items-center justify-between">
            <span className="font-display text-2xl text-ink font-light">
              {formatPrice(product.price)}
            </span>
            <span className={`text-xs font-heading tracking-wide ${product.stockStatus === 'Available' ? 'text-sage' : 'text-red-300'}`}>
              {product.stockStatus}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
