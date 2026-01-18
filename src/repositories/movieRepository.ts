import { db } from "../config/firebase";
import { MovieCreateInput, MovieUpdateInput, MovieWithId } from "../models/movie";
import { NotFoundError } from "../utils/errors";

const moviesCollection = db.collection("movies");

export const listMovies = async (): Promise<MovieWithId[]> => {
  const snapshot = await moviesCollection.get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as MovieCreateInput) }));
};

export const getMovieById = async (id: string): Promise<MovieWithId> => {
  const doc = await moviesCollection.doc(id).get();
  if (!doc.exists) {
    throw new NotFoundError("Movie not found.");
  }
  return { id: doc.id, ...(doc.data() as MovieCreateInput) };
};

export const createMovie = async (payload: MovieCreateInput): Promise<string> => {
  const docRef = await moviesCollection.add(payload);
  return docRef.id;
};

export const updateMovie = async (id: string, payload: MovieUpdateInput): Promise<void> => {
  const docRef = moviesCollection.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    throw new NotFoundError("Movie not found.");
  }
  await docRef.update(payload);
};

export const deleteMovie = async (id: string): Promise<void> => {
  const docRef = moviesCollection.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    throw new NotFoundError("Movie not found.");
  }
  await docRef.delete();
};
