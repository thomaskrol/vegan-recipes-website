import express from "express";
import type { Express, Request, Response } from "express";
import axios from "axios";
import "dotenv/config";

const app: Express = express();
const PORT: number = 3000;
const API_URL: string = "https://api.spoonacular.com";
const API_KEY: string = process.env.API_KEY || "";

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (_, res: Response) => {
  const currentYear = new Date().getFullYear();
  res.render("home.ejs", { year: currentYear });
});

app.post("/search", async (req: Request, res: Response) => {
  console.log("received");
  const currentYear = new Date().getFullYear();
  const query: string = req.body.searchInput?.trim() || "";
  if (!query) {
    res.render("home.ejs", { year: currentYear });
    return;
  }

  const params: string = `query=vegan%20${query}&addRecipeNutrition=true&apiKey=${API_KEY}`;
  const result = await axios.get(`${API_URL}/recipes/complexSearch?${params}`);
  console.log(result);
  const results: Array<any> = result.data.results;

  const transformedResults = results.map((recipe: any) => {
    const title: string = recipe.title;
    const image: string = recipe.image;

    // The nutrition info is an array of nutrient objects. Find the ones for Calories, Protein, Fat, Carbs:
    let calories = '', protein = '', fat = '', carbs = '';
    if (recipe.nutrition && recipe.nutrition.nutrients) {
      const nutrients = recipe.nutrition.nutrients;
      const calInfo = nutrients.find((n: any) => n.name === 'Calories');
      const proteinInfo = nutrients.find((n: any) => n.name === 'Protein');
      const fatInfo = nutrients.find((n: any) => n.name === 'Fat');
      const carbsInfo = nutrients.find((n: any) => n.name === 'Carbohydrates');
      if (calInfo) calories = Math.round(calInfo.amount) + ' ' + calInfo.unit;
      if (proteinInfo) protein = Math.round(proteinInfo.amount) + ' ' + proteinInfo.unit;
      if (fatInfo) fat = Math.round(fatInfo.amount) + ' ' + fatInfo.unit;
      if (carbsInfo) carbs = Math.round(carbsInfo.amount) + ' ' + carbsInfo.unit;
    }

    return { title, image, calories, protein, fat, carbs };
  });

  res.render("list.ejs", { year: currentYear, list: transformedResults });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
