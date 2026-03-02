import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '../lib/mockData'

const METALS = ['All', 'Gold', 'Silver', 'Platinum', 'Rose Gold']
const SORTS  = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
]

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch]     = useState('')
  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [metal, setMetal]       = useState('All')
  const [sort, setSort]         = useState('newest')
  const [loading, setLoading]   = useState(true)

  // Simulate API load
  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [category, metal, sort])

  // Sync URL param → state
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setCategory(cat)
  }, [])

  const filtered = MOCK_PRODUCTS
    .filter(p => {
      const matchCat   = category === 'All' || p.category?.name === category
      const matchMetal = metal === 'All' || p.metalType === metal
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchMetal && matchSearch
    })
    .sort((a, b) => {
      if (sort === 'price-asc')  return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      return new Date(b.createdAt) - new Date(a.createdAt)
    })

  const resetFilters = () => { setCategory('All'); setMetal('All'); setSearch(''); setSort('newest') }

  return (
    <main className="min-h-screen bg-pearl">
      {/* Page header */}
      <div className="pt-28 pb-10 bg-snow border-b border-ivory">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="section-eyebrow mb-2">Our Creations</div>
          <h1 className="font-display text-5xl font-light text-ink">The Collection</h1>
          <p className="section-subtitle mt-2">{MOCK_PRODUCTS.length} exceptional pieces, each a celebration of artisanship.</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-12">
        {/* Filters bar */}
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-10 pb-6 border-b border-ivory">
          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {['All', ...MOCK_CATEGORIES.map(c => c.name)].map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 font-heading text-xs tracking-widest uppercase transition-all duration-200 border ${
                  category === cat
                    ? 'bg-ink text-pearl border-ink'
                    : 'bg-white text-stone border-ivory hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Metal filter */}
            <select
              value={metal}
              onChange={e => setMetal(e.target.value)}
              className="px-4 py-2 bg-white border border-ivory font-body text-sm text-charcoal outline-none focus:border-gold appearance-none pr-8"
              style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'%239A8F82\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M7 10l5 5 5-5\'/></svg>")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '16px' }}
            >
              {METALS.map(m => <option key={m} value={m}>{m}</option>)}
            </select>

            {/* Sort */}
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="px-4 py-2 bg-white border border-ivory font-body text-sm text-charcoal outline-none focus:border-gold appearance-none pr-8"
              style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'%239A8F82\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M7 10l5 5 5-5\'/></svg>")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '16px' }}
            >
              {SORTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>

            {/* Search */}
            <div className="relative">
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search pieces…"
                className="form-input w-52 pl-8"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-warm text-sm">⌕</span>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-body text-sm text-stone">
            {loading ? 'Loading…' : `${filtered.length} piece${filtered.length !== 1 ? 's' : ''} found`}
          </p>
          {(category !== 'All' || metal !== 'All' || search) && (
            <button onClick={resetFilters} className="font-heading text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors">
              Clear filters ×
            </button>
          )}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="bg-white border border-ivory overflow-hidden">
                <div className="skeleton w-full" style={{ paddingBottom: '100%' }} />
                <div className="p-5 space-y-3">
                  <div className="skeleton h-3 w-20 rounded" />
                  <div className="skeleton h-5 w-3/4 rounded" />
                  <div className="skeleton h-6 w-1/3 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-24 text-center">
            <div className="text-4xl text-warm mb-4">◇</div>
            <p className="font-display text-2xl font-light text-stone">No pieces found</p>
            <p className="text-warm text-sm mt-2 mb-6">Try adjusting your filters</p>
            <button onClick={resetFilters} className="btn-outline">Reset Filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
