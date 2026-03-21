import express from "express";
import type { Express, Request, Response } from "express";
import axios from "axios";

const app: Express = express();
const PORT: number = 3000;
const API_URL: string = "https://api.spoonacular.com";

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (_, res: Response) => {
  const currentYear = new Date().getFullYear();
  res.render("home.ejs", { year: currentYear });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
