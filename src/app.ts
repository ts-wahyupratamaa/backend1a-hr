import express from "express";
import courseRoutes from "./routes/courseRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use(courseRoutes);
app.use(errorHandler);

export default app;
