import { db } from "../config/firebase";
import { CourseCreateInput, CourseUpdateInput, CourseWithId } from "../models/course";
import { NotFoundError } from "../utils/errors";

const coursesCollection = db.collection("courses");

export const listCourses = async (): Promise<CourseWithId[]> => {
  const snapshot = await coursesCollection.get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as CourseCreateInput) }));
};

export const getCourseById = async (id: string): Promise<CourseWithId> => {
  const doc = await coursesCollection.doc(id).get();
  if (!doc.exists) {
    throw new NotFoundError("Course not found.");
  }
  return { id: doc.id, ...(doc.data() as CourseCreateInput) };
};

export const createCourse = async (payload: CourseCreateInput): Promise<string> => {
  const docRef = await coursesCollection.add(payload);
  return docRef.id;
};

export const updateCourse = async (id: string, payload: CourseUpdateInput): Promise<void> => {
  const docRef = coursesCollection.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    throw new NotFoundError("Course not found.");
  }
  await docRef.update(payload);
};

export const deleteCourse = async (id: string): Promise<void> => {
  const docRef = coursesCollection.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    throw new NotFoundError("Course not found.");
  }
  await docRef.delete();
};
