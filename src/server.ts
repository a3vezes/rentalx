import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello World Respawn" });
});

app.listen(3333, () => console.log("Server is running"));
