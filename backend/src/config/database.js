import { PrismaClient } from "../generated/prisma/index.js";

export const prisma = new PrismaClient({
  log: process.env.ENV === "dev" ? ["query", "error", "warn"] : ["error"],
});

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Database connection error:", error);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  await prisma.$disconnect();
};
