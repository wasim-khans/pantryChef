const STORAGE_KEY = 'pantryChefFavorites'

// Get all saved favorites
export function getFavorites() {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

// Save a meal to favorites (stores id, name, and thumbnail)
export function addFavorite(meal) {
  const favorites = getFavorites()
  if (favorites.some((fav) => fav.idMeal === meal.idMeal)) return // already saved
  favorites.push({
    idMeal: meal.idMeal,
    strMeal: meal.strMeal,
    strMealThumb: meal.strMealThumb,
  })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
}

// Remove a meal from favorites by ID
export function removeFavorite(id) {
  const favorites = getFavorites().filter((fav) => fav.idMeal !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
}

// Check if a meal is already in favorites
export function isFavorite(id) {
  return getFavorites().some((fav) => fav.idMeal === id)
}
