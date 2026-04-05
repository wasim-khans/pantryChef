import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getFavorites, removeFavorite } from '../utils/storage'

export default function Favorites() {
  const [favorites, setFavorites] = useState(getFavorites())

  const handleRemove = (id) => {
    removeFavorite(id)
    setFavorites(getFavorites())
  }

  return (
    <div className="px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          ❤️ Favorites
        </h1>
        <span className="text-sm text-gray-500 border border-gray-200 rounded px-2 py-0.5">
          {favorites.length} saved
        </span>
      </div>

      <hr className="border-gray-200 mb-6" />

      {favorites.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-4xl mb-3">🤍</div>
          <p className="text-sm">No favorites yet. Save recipes to see them here.</p>
          <Link
            to="/"
            className="inline-block mt-4 text-sm font-medium text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition-colors"
          >
            Find Recipes
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((meal) => (
            <div
              key={meal.idMeal}
              className="relative border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Remove button */}
              <button
                onClick={() => handleRemove(meal.idMeal)}
                className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 hover:border-red-300 transition-colors text-xs"
                aria-label={`Remove ${meal.strMeal} from favorites`}
              >
                ✕
              </button>

              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-900 truncate">
                  {meal.strMeal}
                </h3>
                <Link
                  to={`/recipe/${meal.idMeal}`}
                  className="inline-block mt-2 text-xs font-medium text-gray-600 border border-gray-300 rounded px-3 py-1 hover:bg-gray-50 transition-colors"
                >
                  View Recipe →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
