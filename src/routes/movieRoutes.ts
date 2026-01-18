import { Router } from "express";
import { z } from "zod";
import * as movieController from "../controllers/movieController";
import { movieCreateSchema, movieUpdateSchema } from "../models/movie";
import { validateBody, validateParams } from "../middleware/validate";

const router = Router();
const idParamSchema = z.object({ id: z.string().min(1) });

router.get("/movies", movieController.listMovies);
router.get("/movie/:id", validateParams(idParamSchema), movieController.getMovieById);
router.post("/movie", validateBody(movieCreateSchema), movieController.createMovie);
router.patch(
  "/movie/:id",
  validateParams(idParamSchema),
  validateBody(movieUpdateSchema),
  movieController.updateMovie
);
router.delete("/movie/:id", validateParams(idParamSchema), movieController.deleteMovie);

export default router;
