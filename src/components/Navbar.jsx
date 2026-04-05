import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const linkClasses = (path) =>
    `px-4 py-1.5 border rounded text-sm font-medium transition-colors ${
      location.pathname === path
        ? 'bg-gray-900 text-white border-gray-900'
        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
    }`

  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
      <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-gray-900 no-underline">
        <span className="text-xl">🍳</span>
        <span>PantryChef</span>
      </Link>

      <div className="flex items-center gap-3">
        <Link to="/favorites" className={linkClasses('/favorites')}>
          Favorites
        </Link>
        <Link to="/about" className={linkClasses('/about')}>
          About
        </Link>
      </div>
    </nav>
  )
}
