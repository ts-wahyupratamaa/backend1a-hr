import fs from "fs";
import path from "path";
import admin from "firebase-admin";
import { env } from "./env";

const serviceAccountPath = path.resolve(env.SERVICE_ACCOUNT_PATH);
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf-8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const db = admin.firestore();
