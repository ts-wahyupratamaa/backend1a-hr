import { db } from "../config/firebase";

const movies = [
  {
    title: "The Last Horizon",
    synopsis: "A crew searches for a vanished colony beyond the stars.",
    director: "Maya Santoso",
    genre: "Sci-Fi",
    releaseYear: 2022,
    rating: 8.1,
    posterUrl: "https://example.com/posters/the-last-horizon.jpg",
  },
  {
    title: "Midnight Vendor",
    synopsis: "A night market vendor uncovers a conspiracy in the city.",
    director: "Adi Pratama",
    genre: "Thriller",
    releaseYear: 2021,
    rating: 7.4,
    posterUrl: "https://example.com/posters/midnight-vendor.jpg",
  },
  {
    title: "Laugh Lines",
    synopsis: "A struggling comic finds inspiration in unexpected places.",
    director: "Rika Ananda",
    genre: "Comedy",
    releaseYear: 2020,
    rating: 7.9,
    posterUrl: "https://example.com/posters/laugh-lines.jpg",
  },
];

const seed = async () => {
  const batch = db.batch();
  const collection = db.collection("movies");

  movies.forEach((movie) => {
    const docRef = collection.doc();
    batch.set(docRef, movie);
  });

  await batch.commit();
  console.log(`Seeded ${movies.length} movies.`);
};

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
