import { CourseCreateInput, CourseUpdateInput, CourseWithId } from "../models/course";
import * as courseRepository from "../repositories/courseRepository";

export const listCourses = async (): Promise<CourseWithId[]> =>
  courseRepository.listCourses();

export const getCourseById = async (id: string): Promise<CourseWithId> =>
  courseRepository.getCourseById(id);

export const createCourse = async (payload: CourseCreateInput): Promise<string> =>
  courseRepository.createCourse(payload);

export const updateCourse = async (id: string, payload: CourseUpdateInput): Promise<void> =>
  courseRepository.updateCourse(id, payload);

export const deleteCourse = async (id: string): Promise<void> =>
  courseRepository.deleteCourse(id);
