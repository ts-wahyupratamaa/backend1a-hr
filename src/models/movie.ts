import { z } from "zod";

export const movieCreateSchema = z
  .object({
    title: z.string().min(1),
    synopsis: z.string().optional(),
    director: z.string().optional(),
    genre: z.string().optional(),
    releaseYear: z.number().int().min(1888).optional(),
    rating: z.number().min(0).max(10).optional(),
    posterUrl: z.string().url().optional(),
  })
  .passthrough();

export const movieUpdateSchema = movieCreateSchema.partial();

export type MovieCreateInput = z.infer<typeof movieCreateSchema>;
export type MovieUpdateInput = z.infer<typeof movieUpdateSchema>;
export type Movie = MovieCreateInput;
export type MovieWithId = Movie & { id: string };
