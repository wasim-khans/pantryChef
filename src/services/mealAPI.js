const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

// Search meals by dish name (e.g. "pasta", "chicken curry")
export async function searchByName(name) {
  const res = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(name)}`)
  const data = await res.json()
  return data.meals || []
}

// Filter meals by a single ingredient (e.g. "chicken_breast")
// Returns partial objects: { idMeal, strMeal, strMealThumb }
export async function filterByIngredient(ingredient) {
  const res = await fetch(`${BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`)
  const data = await res.json()
  return data.meals || []
}

// Lookup full meal details by ID
export async function getMealById(id) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
  const data = await res.json()
  return data.meals ? data.meals[0] : null
}

// Get a random meal (for "Surprise Me" button)
export async function getRandomMeal() {
  const res = await fetch(`${BASE_URL}/random.php`)
  const data = await res.json()
  return data.meals ? data.meals[0] : null
}

// Get all meal categories
export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories.php`)
  const data = await res.json()
  return data.categories || []
}

// Extract ingredients + measures from a full meal object
// MealDB stores them as strIngredient1..20 and strMeasure1..20
export function extractIngredients(meal) {
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        name: ingredient.trim(),
        measure: measure ? measure.trim() : '',
        image: `https://www.themealdb.com/images/ingredients/${ingredient.trim()}-small.png`,
      })
    }
  }
  return ingredients
}
