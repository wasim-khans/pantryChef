export default function About() {
  const techStack = ['React', 'Tailwind CSS', 'TheMealDB API', 'Netlify']

  return (
    <div className="px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left column: project info */}
        <div className="flex-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            About the Project
          </p>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
            A smarter way to<br />find your next meal
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            PantryChef is a recipe discovery app built to help you cook with what you already
            have. Search by dish name or enter ingredients from your fridge — no more food
            waste, no more staring blankly at the pantry. Powered by TheMealDB API.
          </p>

          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
            What It Does
          </h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs font-medium text-gray-500">
                1
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">Search by dish or ingredient</p>
                <p className="text-xs text-gray-500">Find recipes by typing a dish name or listing what you have at home</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs font-medium text-gray-500">
                2
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">Save your favourites</p>
                <p className="text-xs text-gray-500">Bookmark recipes locally so you can find them again quickly</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs font-medium text-gray-500">
                3
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">Surprise Me</p>
                <p className="text-xs text-gray-500">Not sure what to cook? Get a random recipe with one click</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: contact & links */}
        <div className="w-full lg:w-72 shrink-0">
          <div className="border border-warm-200 rounded-lg p-5 bg-white">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
              Contact & Links
            </h2>
            <hr className="border-gray-200 mb-4" />

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Project</p>
                <p className="font-medium text-gray-900">PantryChef v1.0</p>
              </div>
              <hr className="border-gray-200" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Built By</p>
                <p className="font-medium text-gray-900">Muhammad Wasim Khan</p>
              </div>
              <hr className="border-gray-200" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">GitHub</p>
                <a
                  href="https://github.com/wasim-khans/pantryChef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-900 hover:underline"
                >
                  github.com/wasim-khans/pantryChef
                </a>
              </div>
              <hr className="border-gray-200" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Built With</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-gray-700 border border-gray-300 rounded px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
