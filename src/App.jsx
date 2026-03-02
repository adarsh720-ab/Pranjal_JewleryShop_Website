import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'

// Public pages
import HomePage          from './pages/Home'
import CollectionPage    from './pages/Collection'
import ProductDetailPage from './pages/ProductDetail'
import CategoriesPage    from './pages/Categories'
import AboutPage         from './pages/About'
import ContactPage       from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/"               element={<HomePage />} />
        <Route path="/collection"     element={<CollectionPage />} />
        <Route path="/collection/:id" element={<ProductDetailPage />} />
        <Route path="/categories"     element={<CategoriesPage />} />
        <Route path="/about"          element={<AboutPage />} />
        <Route path="/contact"        element={<ContactPage />} />

        {/* 404 */}
        <Route path="*" element={
          <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-pearl">
            <div className="font-display text-7xl font-light text-warm">404</div>
            <p className="font-display text-2xl font-light text-stone">Page not found</p>
            <a href="/" className="btn-outline mt-4">Return Home</a>
          </div>
        } />
      </Routes>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#fff',
            color: '#1A1A1A',
            border: '1px solid #EDE8E0',
            fontFamily: 'Raleway, sans-serif',
            fontSize: '13px',
            borderRadius: 0,
          },
          success: { iconTheme: { primary: '#C4A35A', secondary: '#fff' } },
        }}
      />
    </>
  )
}
