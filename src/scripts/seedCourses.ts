import { db } from "../config/firebase";

const courses = [
  {
    title: "Node.js Backend Intermediate",
    description: "REST API with Firebase Admin",
    instructor: "Rise Team",
    price: 250000,
    level: "intermediate",
    category: "backend",
  },
  {
    title: "Express API Fundamentals",
    description: "Routing, validation, and error handling",
    instructor: "Backend Squad",
    price: 150000,
    level: "beginner",
    category: "backend",
  },
  {
    title: "Advanced TypeScript for API",
    description: "Types, schema validation, and patterns",
    instructor: "TS Guild",
    price: 300000,
    level: "advanced",
    category: "backend",
  },
];

const seed = async () => {
  const batch = db.batch();
  const collection = db.collection("courses");

  courses.forEach((course) => {
    const docRef = collection.doc();
    batch.set(docRef, course);
  });

  await batch.commit();
  console.log(`Seeded ${courses.length} courses.`);
};

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
