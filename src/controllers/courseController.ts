import { Request, Response } from "express";
import { CourseCreateInput, CourseUpdateInput } from "../models/course";
import * as courseService from "../services/courseService";
import { asyncHandler } from "../utils/asyncHandler";

export const listCourses = asyncHandler(async (_req: Request, res: Response) => {
  const courses = await courseService.listCourses();
  res.json({ data: courses });
});

export const getCourseById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const course = await courseService.getCourseById(id);
  res.json({ data: course });
});

export const createCourse = asyncHandler(async (req: Request, res: Response) => {
  const payload = req.body as CourseCreateInput;
  const id = await courseService.createCourse(payload);
  res.status(201).json({ id });
});

export const updateCourse = asyncHandler(async (req: Request, res: Response) => {
  const payload = req.body as CourseUpdateInput;
  const id = req.params.id as string;
  await courseService.updateCourse(id, payload);
  res.json({ message: "Course updated." });
});

export const deleteCourse = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  await courseService.deleteCourse(id);
  res.json({ message: "Course deleted." });
});
