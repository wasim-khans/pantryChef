import RecipeCard from './RecipeCard'

export default function RecipeList({ meals }) {
  if (meals === null) {
    return (
      <div className="text-center py-16 text-gray-400">
        <div className="text-4xl mb-2">🍽️</div>
        <p className="text-sm">Recipe results will appear here after searching</p>
      </div>
    )
  }

  if (meals.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {meals.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  )
}
