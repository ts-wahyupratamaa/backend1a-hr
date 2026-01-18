import express from "express";
import movieRoutes from "./routes/movieRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use(movieRoutes);
app.use(errorHandler);

export default app;
