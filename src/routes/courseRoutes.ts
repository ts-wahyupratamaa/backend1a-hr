import { Router } from "express";
import { z } from "zod";
import * as courseController from "../controllers/courseController";
import { courseCreateSchema, courseUpdateSchema } from "../models/course";
import { validateBody, validateParams } from "../middleware/validate";

const router = Router();
const idParamSchema = z.object({ id: z.string().min(1) });

router.get("/course", courseController.listCourses);
router.get("/course/:id", validateParams(idParamSchema), courseController.getCourseById);
router.post("/course", validateBody(courseCreateSchema), courseController.createCourse);
router.patch(
  "/course/:id",
  validateParams(idParamSchema),
  validateBody(courseUpdateSchema),
  courseController.updateCourse
);
router.delete("/course/:id", validateParams(idParamSchema), courseController.deleteCourse);

export default router;
