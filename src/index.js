import express from "express";
import morgan from "morgan";
import cors from "cors";
// import { connectToDatabase } from "./models/index.js";
// import { recipeRouter } from "./routes/recipeRouter.js";
// import { ratingRouter } from "./routes/ratingRouter.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
// app.use(express.static("data/images")); // static file server
app.use(express.json()); // body parser


// app.use("/api/v1/recipes", recipeRouter);
// app.use("/api/v1/ratings", ratingRouter);

try {
  // Auf oberster Ebene wird immernoch .then und .catch benötigt :)
//   await connectToDatabase();
  // Nur wenn die Datenbankverbindung erfolgreich aufgebaut wird
  // wollen wir unseren server exposen (durch app.listen)
  const PORT = 3009;
  app.listen(PORT, () => console.log("Server listening at port", PORT));
} catch (err) {
  console.log(err);
  process.exit(); // node prozess beenden
}
