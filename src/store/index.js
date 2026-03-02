import { create } from 'zustand'

export const useProductStore = create((set, get) => ({
  products: [],
  categories: [],
  featured: [],
  newArrivals: [],
  loading: false,
  error: null,

  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setFeatured: (featured) => set({ featured }),
  setNewArrivals: (newArrivals) => set({ newArrivals }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}))
