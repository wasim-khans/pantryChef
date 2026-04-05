import { useState } from 'react'

export default function SearchBar({ onSearch, onSurprise, loading }) {
  const [query, setQuery] = useState('')
  const [searchType, setSearchType] = useState('dish')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    onSearch(query.trim(), searchType)
  }

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="border border-warm-200 rounded-lg p-6 bg-white">
        {/* Radio toggle */}
        <div className="flex items-center gap-6 mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="searchType"
              value="dish"
              checked={searchType === 'dish'}
              onChange={(e) => setSearchType(e.target.value)}
              className="accent-gray-900"
            />
            <span className="text-sm font-medium text-gray-700">Search by dish</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="searchType"
              value="ingredient"
              checked={searchType === 'ingredient'}
              onChange={(e) => setSearchType(e.target.value)}
              className="accent-gray-900"
            />
            <span className="text-sm font-medium text-gray-700">Search by ingredients</span>
          </label>
        </div>

        {/* Search input */}
        <div className="relative mb-3">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              searchType === 'dish'
                ? 'e.g. Spaghetti carbonara, chicken curry...'
                : 'e.g. chicken, tomato, rice...'
            }
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        {/* Buttons */}
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Searching...' : 'Search Recipes'}
        </button>

        <button
          type="button"
          onClick={onSurprise}
          disabled={loading}
          className="w-full mt-2 py-2.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          🎲 Surprise Me
        </button>
      </form>
    </div>
  )
}
