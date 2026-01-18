import { Request, Response } from "express";
import { MovieCreateInput, MovieUpdateInput } from "../models/movie";
import * as movieService from "../services/movieService";
import { asyncHandler } from "../utils/asyncHandler";

export const listMovies = asyncHandler(async (_req: Request, res: Response) => {
  const movies = await movieService.listMovies();
  res.json({ data: movies });
});

export const getMovieById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const movie = await movieService.getMovieById(id);
  res.json({ data: movie });
});

export const createMovie = asyncHandler(async (req: Request, res: Response) => {
  const payload = req.body as MovieCreateInput;
  const id = await movieService.createMovie(payload);
  res.status(201).json({ id });
});

export const updateMovie = asyncHandler(async (req: Request, res: Response) => {
  const payload = req.body as MovieUpdateInput;
  const id = req.params.id as string;
  await movieService.updateMovie(id, payload);
  res.json({ message: "Movie updated." });
});

export const deleteMovie = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  await movieService.deleteMovie(id);
  res.json({ message: "Movie deleted." });
});
