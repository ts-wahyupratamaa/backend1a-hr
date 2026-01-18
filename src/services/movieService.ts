import { MovieCreateInput, MovieUpdateInput, MovieWithId } from "../models/movie";
import * as movieRepository from "../repositories/movieRepository";

export const listMovies = async (): Promise<MovieWithId[]> =>
  movieRepository.listMovies();

export const getMovieById = async (id: string): Promise<MovieWithId> =>
  movieRepository.getMovieById(id);

export const createMovie = async (payload: MovieCreateInput): Promise<string> =>
  movieRepository.createMovie(payload);

export const updateMovie = async (id: string, payload: MovieUpdateInput): Promise<void> =>
  movieRepository.updateMovie(id, payload);

export const deleteMovie = async (id: string): Promise<void> =>
  movieRepository.deleteMovie(id);
