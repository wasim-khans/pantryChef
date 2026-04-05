import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import RecipeList from '../components/RecipeList'
import { searchByName, filterByIngredient, getRandomMeal } from '../services/mealAPI'

export default function Home() {
  const [meals, setMeals] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSearch = async (query, type) => {
    setLoading(true)
    setError('')
    try {
      const results =
        type === 'dish'
          ? await searchByName(query)
          : await filterByIngredient(query)
      setMeals(results)
      if (results.length === 0) setError('No recipes found. Try a different search.')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSurprise = async () => {
    setLoading(true)
    setError('')
    try {
      const meal = await getRandomMeal()
      if (meal) navigate(`/recipe/${meal.idMeal}`)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-6 py-10">
      {/* Hero */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">What's cooking today?</h1>
        <p className="text-sm text-gray-500">
          Find a recipe by dish name or with ingredients you already have
        </p>
      </div>

      {/* Search */}
      <SearchBar onSearch={handleSearch} onSurprise={handleSurprise} loading={loading} />

      {/* Error */}
      {error && (
        <p className="text-center text-sm text-red-500 mt-6">{error}</p>
      )}

      {/* Results */}
      <div className="mt-10">
        <RecipeList meals={meals} />
      </div>
    </div>
  )
}
