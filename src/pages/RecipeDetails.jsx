import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMealById, extractIngredients } from '../services/mealAPI'
import { addFavorite, removeFavorite, isFavorite } from '../utils/storage'

// Normalise the inconsistent instruction formats from MealDB
function parseInstructions(raw) {
  if (!raw) return []

  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    // Remove lines that are just "step N" / "Step N" headers
    .filter((line) => !/^step\s*\d+$/i.test(line))
    // Drop empty lines
    .filter((line) => line.length > 0)
    // Strip leading numbering like "1.", "2)", "1 -", "1:" etc.
    .map((line) => line.replace(/^\d+[\.\)\-:\s]+\s*/, ''))
    // Drop any lines that became empty after stripping
    .filter((line) => line.length > 0)
}

export default function RecipeDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [meal, setMeal] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMeal() {
      setLoading(true)
      const data = await getMealById(id)
      if (data) {
        setMeal(data)
        setIngredients(extractIngredients(data))
        setSaved(isFavorite(data.idMeal))
      }
      setLoading(false)
    }
    fetchMeal()
  }, [id])

  const toggleFavorite = () => {
    if (saved) {
      removeFavorite(meal.idMeal)
      setSaved(false)
    } else {
      addFavorite(meal)
      setSaved(true)
    }
  }

  if (loading) {
    return <div className="text-center py-20 text-gray-400 text-sm">Loading recipe...</div>
  }

  if (!meal) {
    return <div className="text-center py-20 text-gray-400 text-sm">Recipe not found.</div>
  }

  const instructions = parseInstructions(meal.strInstructions)

  return (
    <div className="px-6 py-6">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-600 border border-gray-300 rounded px-3 py-1 hover:bg-gray-50 transition-colors mb-6"
      >
        ← Back to results
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column: image + instructions */}
        <div className="flex-1">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full max-h-96 object-cover rounded-lg border border-warm-200"
          />

          <h1 className="text-2xl font-bold text-gray-900 mt-6">{meal.strMeal}</h1>

          <div className="mt-4">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
              Instructions
            </h2>
            <ol className="space-y-3">
              {instructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-700">
                  <span className="shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs font-medium text-gray-500">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right column: save button + ingredients */}
        <div className="w-full lg:w-72 shrink-0">
          <button
            onClick={toggleFavorite}
            className={`w-full py-2.5 text-sm font-medium rounded-md transition-colors mb-3 ${
              saved
                ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {saved ? '❤️ Saved to Favorites' : '🤍 Save to Favorites'}
          </button>

          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2.5 text-sm font-medium border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors mb-6"
            >
              ▶ Watch Video
            </a>
          )}

          <div className="border border-warm-200 rounded-lg p-4 bg-warm-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                Ingredients
              </h2>
              <span className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-0.5">
                {ingredients.length} items
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {ingredients.map((item, i) => (
                <div key={i} className="text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 mx-auto rounded-full border border-gray-200 object-cover"
                  />
                  <p className="text-xs font-semibold text-gray-800 mt-1 leading-tight">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.measure}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
