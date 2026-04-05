# 🍽️ MealDB API Guide (V1)

This guide explains how to use the MealDB API to fetch meal data for your application.

---

## 🔑 Base URL

`https://www.themealdb.com/api/json/v1/1/`

> Note: `1` is the public test API key.

---

## 🔍 Search & Lookup

### 1. Search Meal by Name  
GET https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

### 2. List Meals by First Letter  
GET https://www.themealdb.com/api/json/v1/1/search.php?f=a

### 3. Lookup Meal by ID  
GET https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

### 4. Get Random Meal  
GET https://www.themealdb.com/api/json/v1/1/random.php

---

## 📂 Categories & Lists

### 5. Get All Categories  
GET https://www.themealdb.com/api/json/v1/1/categories.php

### 6. List Categories, Areas, Ingredients  
GET https://www.themealdb.com/api/json/v1/1/list.php?c=list  
GET https://www.themealdb.com/api/json/v1/1/list.php?a=list  
GET https://www.themealdb.com/api/json/v1/1/list.php?i=list  

---

## 🍽️ Filtering Meals

### 7. Filter by Ingredient  
GET https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

### 8. Filter by Category  
GET https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

### 9. Filter by Area  
GET https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

---

## ⭐ Premium Features (Not in Free Plan)

GET https://www.themealdb.com/api/json/v1/1/randomselection.php  
GET https://www.themealdb.com/api/json/v1/1/latest.php  
GET https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt  

---

## 🖼️ Images

### Meal Images
- `/images/media/meals/{image}.jpg/small`
- `/images/media/meals/{image}.jpg/medium`
- `/images/media/meals/{image}.jpg/large`

### Ingredient Images
- https://www.themealdb.com/images/ingredients/lime.png  
- https://www.themealdb.com/images/ingredients/lime-small.png  
- https://www.themealdb.com/images/ingredients/lime-medium.png  
- https://www.themealdb.com/images/ingredients/lime-large.png  

> Use underscores `_` for spaces in ingredient names.

---

## ⚙️ Example (JavaScript Fetch)

```javascript
const fetchMeals = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  );
  const data = await res.json();
  console.log(data.meals);
};

fetchMeals();