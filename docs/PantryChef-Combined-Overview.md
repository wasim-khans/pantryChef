# PantryChef – Combined Project Overview 🍳

## Tech Stack

### Frontend
- **React** - Component-based framework
- **Tailwind CSS** - Utility-first styling
- **JavaScript Fetch API** - API communication

### External Services
- **TheMealDB API** - Recipe data source
- **LocalStorage** - Browser storage for favorites

### Deployment
- **Netlify** or **Vercel** - Static hosting

---

## Core Features

### 1. Dual Search Options

#### Search by Ingredient
- Users enter available ingredients (e.g., "tomato, egg, cheese")
- System returns matching recipes instantly
- Multiple ingredient filtering supported

#### Search by Dish
- Users enter specific dish names (e.g., "pasta", "chicken curry")
- System returns recipes matching the dish type
- Autocomplete suggestions for popular dishes

### 2. Recipe Details
- Recipe images and cooking instructions
- Complete ingredients list with measurements
- Video tutorial links when available
- Recipe category information

### 4. Save Favorites
- Bookmark recipes for later access
- Stored locally using localStorage
- Quick access to saved recipes

---

## Application Pages

### Home Page
- Dual search interface (ingredients + dish name)
- Recipe search results display
- "Surprise Me" random meal button
- Navigation to other sections

### Recipe Details Page
- Full recipe information display
- Ingredients and instructions
- Save to favorites functionality
- Back to search navigation

### Favorites Page
- Display saved recipes
- Remove from favorites option
- Quick recipe access

---

## Basic Wireframe Structure

### Home Page Layout
```
┌─────────────────────────────────┐
│        🍳 PantryChef            │
├─────────────────────────────────┤
│                                 │
│  🔍 [ Search by Dish ]          │
│  🥗 [ Search by Ingredients ]   │
│                                 │
│  [ Search Recipes ] [ Surprise ]│
│                                 │
├─────────────────────────────────┤
│                                 │
│  [Recipe Card] [Recipe Card]    │
│  [Recipe Card] [Recipe Card]    │
│  [Recipe Card] [Recipe Card]    │
│                                 │
└─────────────────────────────────┘
```

### Recipe Details Layout
```
┌─────────────────────────────────┐
│  ← Back    🍳 Recipe Title     │
├─────────────────────────────────┤
│                                 │
│     [Recipe Image]              │
│                                 │
├─────────────────────────────────┤
│  Ingredients                    │
│  • Item 1 - Amount             │
│  • Item 2 - Amount             │
│                                 │
│  Instructions                   │
│  1. Step one...                 │
│  2. Step two...                 │
│                                 │
│  [ ❤️ Save Recipe ]             │
└─────────────────────────────────┘
```

### Favorites Page Layout
```
┌─────────────────────────────────┐
│        ❤️ Favorites             │
├─────────────────────────────────┤
│                                 │
│  [Recipe Card] [Recipe Card]    │
│  [Recipe Card] [Recipe Card]    │
│  [Recipe Card] [Recipe Card]    │
│                                 │
└─────────────────────────────────┘
```

---

## Key Design Principles

- **Simplicity** - Minimal steps to find recipes
- **Mobile Responsive** - Works on all devices
- **Accessibility** - Alt text, keyboard navigation, high contrast
- **Visual Feedback** - Loading states and error handling

---

## Component Architecture

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── RecipeCard.jsx
│   └── RecipeList.jsx
├── pages/
│   ├── Home.jsx
│   ├── RecipeDetails.jsx
│   ├── About.jsx
│   └── Favorites.jsx
├── services/
│   └── mealAPI.js
└── utils/
    └── storage.js
```

---

## User Flow

1. **Choose Search Type** → Select "Search by Dish" or "Search by Ingredients"
2. **Search** → Enter query → View results
3. **Explore** → Click recipe → View details
4. **Save** → Click heart → Store locally
5. **Access** → Visit favorites → Quick access

This structure provides a complete, user-friendly recipe discovery platform focused on reducing food waste and simplifying meal planning.
