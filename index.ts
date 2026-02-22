import express from "express";
import type { Express, Request, Response } from "express";
import axios from "axios";

const app: Express = express();
const PORT: number = 3000;
const API_URL: string = "https://api.spoonacular.com";

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (_, res: Response) => {
  res.render("index.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
