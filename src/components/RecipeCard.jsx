import { Link } from 'react-router-dom'

export default function RecipeCard({ meal }) {
  return (
    <div className="border border-warm-200 rounded-lg overflow-hidden bg-warm-100 hover:shadow-md transition-shadow">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900 truncate">{meal.strMeal}</h3>
        <Link
          to={`/recipe/${meal.idMeal}`}
          className="inline-block mt-2 text-xs font-medium text-gray-600 border border-gray-300 rounded px-3 py-1 hover:bg-gray-50 transition-colors"
        >
          View Recipe →
        </Link>
      </div>
    </div>
  )
}
