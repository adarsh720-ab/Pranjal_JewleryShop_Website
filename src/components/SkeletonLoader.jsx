export function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-ivory overflow-hidden">
      <div className="skeleton w-full" style={{ paddingBottom: '100%' }} />
      <div className="p-5 space-y-3">
        <div className="skeleton h-3 w-20 rounded" />
        <div className="skeleton h-5 w-3/4 rounded" />
        <div className="skeleton h-3 w-1/2 rounded" />
        <div className="skeleton h-6 w-1/3 rounded" />
      </div>
    </div>
  )
}

export function SectionSkeleton({ count = 4 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {Array(count).fill(0).map((_, i) => <ProductCardSkeleton key={i} />)}
    </div>
  )
}
