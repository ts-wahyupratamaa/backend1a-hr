import { z } from "zod";

export const courseCreateSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().optional(),
    instructor: z.string().optional(),
    price: z.number().nonnegative().optional(),
    level: z.enum(["beginner", "intermediate", "advanced"]).optional(),
    imageUrl: z.string().url().optional(),
    category: z.string().optional(),
  })
  .passthrough();

export const courseUpdateSchema = courseCreateSchema.partial();

export type CourseCreateInput = z.infer<typeof courseCreateSchema>;
export type CourseUpdateInput = z.infer<typeof courseUpdateSchema>;
export type Course = CourseCreateInput;
export type CourseWithId = Course & { id: string };
