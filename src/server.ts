import express from "express";

import { categoriesRoutes } from "./routes/categories";

const app = express();
app.use(express.json());

// Routes
app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log("Server is running"));
