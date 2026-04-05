# PantryChef – Build Guide

A quick walkthrough of how this app was built, step by step.

---

## Tech Stack

- **React** – UI library
- **Vite** – build tool and dev server
- **Tailwind CSS v4** – utility-first styling
- **React Router** – client-side navigation
- **TheMealDB API** – recipe data (free tier)
- **localStorage** – saving favourite recipes

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top navigation bar
│   ├── SearchBar.jsx       # Search input with dish/ingredient toggle
│   ├── RecipeCard.jsx      # Single recipe thumbnail card
│   ├── RecipeList.jsx      # Grid of RecipeCards
│   └── ScrollToTop.jsx     # Scrolls to top on route change
├── pages/
│   ├── Home.jsx            # Search + results page
│   ├── RecipeDetails.jsx   # Full recipe view
│   ├── Favorites.jsx       # Saved recipes page
│   └── About.jsx           # Project info page
├── services/
│   └── mealAPI.js          # All MealDB API calls
├── utils/
│   └── storage.js          # localStorage helpers for favorites
├── App.jsx                 # Routes + layout
├── main.jsx                # Entry point (BrowserRouter)
└── index.css               # Tailwind import + global styles
```

---

## How It Was Built

### 1. Scaffold the project
Created a Vite + React app. Added Tailwind CSS v4 via `@tailwindcss/vite` plugin. Cleaned out all Vite boilerplate (default CSS, demo component).

### 2. Set up project structure
Created empty placeholder files for all components, pages, services, and utils. This gave us a clear map of what needed to be built.

### 3. Build the API service (`mealAPI.js`)
Wrote functions that talk to TheMealDB API:
- `searchByName(name)` – search recipes by dish name
- `filterByIngredient(ingredient)` – filter by a single ingredient
- `getMealById(id)` – get full recipe details
- `getRandomMeal()` – fetch a random recipe
- `getCategories()` – list all categories
- `extractIngredients(meal)` – parse ingredient/measure pairs from the meal object

### 4. Build localStorage utility (`storage.js`)
Four simple functions for managing saved recipes:
- `getFavorites()` – read all saved meals
- `addFavorite(meal)` – save a meal (deduplicates by ID)
- `removeFavorite(id)` – delete by ID
- `isFavorite(id)` – check if already saved

### 5. Build the Navbar
Logo on the left, Favorites + About links on the right. Uses `useLocation()` to highlight the active page.

### 6. Build the Home page
The main page with three parts:
- **Hero** – heading and subtitle
- **SearchBar** – radio toggle (dish/ingredient), text input, Search button, Surprise Me button
- **RecipeList** – responsive grid of RecipeCards showing results

The SearchBar calls either `searchByName` or `filterByIngredient` based on the toggle. Surprise Me fetches a random meal and navigates directly to its details page.

### 7. Build the Recipe Details page
Fetches full meal data using the ID from the URL (`useParams`). Two-column layout:
- **Left**: recipe image, title, numbered instructions
- **Right**: Save to Favorites button, Watch Video link, ingredients grid with images

Includes a `parseInstructions()` helper that cleans up inconsistent formatting from the API (some recipes have "1. Step...", others have "step 1\nActual step...").

### 8. Build the Favorites page
Reads from localStorage. Shows a card grid with remove (✕) buttons. Empty state links back to home. Count badge shows how many are saved.

### 9. Build the About page
Two-column layout: project description + features on the left, contact/links card on the right with GitHub link and tech stack badges.

### 10. Wire up React Router
- Wrapped the app with `BrowserRouter` in `main.jsx`
- Defined routes in `App.jsx`: `/`, `/recipe/:id`, `/favorites`, `/about`
- Added `Navbar` and `ScrollToTop` to the layout

### 11. Polish
- Added warm colour palette (off-white background, amber accent)
- Global link reset (no underlines)
- ScrollToTop component for smooth navigation
- Fixed RecipeList empty state logic
- Verified production build passes clean

---

## Key Decisions

| Decision | Reason |
|----------|--------|
| Single-ingredient search only | Free MealDB API tier; multi-ingredient is premium |
| localStorage for favorites | No backend needed; keeps it simple |
| Tailwind CSS v4 | Utility-first, fast iteration, small bundle |
| No state management library | App is small enough for React's built-in `useState` |

---

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in the browser.

## Building for Production

```bash
npm run build
```

Output goes to `dist/` – ready for Netlify or any static host.
