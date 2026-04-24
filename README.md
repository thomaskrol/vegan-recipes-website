# [LEARNING] Vegan Recipes Website

**Note**: This project was created as part of a Full Stack Web Development course to demonstrate proficiency in building web applications that integrate public APIs. It serves as a learning exercise in server-side programming, API integration, and web development best practices.

---

A web application for discovering and exploring vegan recipes using the Spoonacular API. Built with Express.js, TypeScript, and EJS templates.

## Features

- Search for vegan recipes by ingredients or dish name
- View recipe details including nutritional information (calories, protein, fat, carbs)
- Responsive design using Bootstrap
- Fast runtime with Bun

## Technologies Used

- **Backend**: Express.js with TypeScript
- **Frontend**: EJS templating engine, Bootstrap CSS
- **API**: Spoonacular Recipe API
- **Runtime**: Bun
- **HTTP Client**: Axios

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vegan-recipes-website
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your Spoonacular API key:
     ```
     API_KEY=your_spoonacular_api_key_here
     ```
   - Get an API key from [Spoonacular](https://spoonacular.com/food-api)

## Usage

To run the development server:

```bash
bun run index.ts
```

The application will be available at `http://localhost:3000`.

- Visit the home page to search for recipes
- Enter a search query (e.g., "pasta", "salad") to find vegan recipes
- View the list of results with nutritional information

## Project Structure

```
vegan-recipes-website/
├── index.ts                 # Main application file
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── README.md                # Project documentation
├── public/                  # Static assets
│   ├── images/              # Image files
│   └── styles/
│       └── main.css         # Custom styles
└── views/                   # EJS templates
    ├── home.ejs             # Home page
    ├── list.ejs             # Recipe list page
    ├── recipe.ejs           # Individual recipe page (future use)
    └── partials/
        ├── header.ejs       # Header partial
        └── footer.ejs       # Footer partial
```

## API Key

This project requires a Spoonacular API key to fetch recipe data. Sign up for a free API key at [Spoonacular Food API](https://spoonacular.com/food-api).

## Contributing

This is a private project. For contributions, please contact the maintainer.

## License

This project is private and not licensed for public use.
