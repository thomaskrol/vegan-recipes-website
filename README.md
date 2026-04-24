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
