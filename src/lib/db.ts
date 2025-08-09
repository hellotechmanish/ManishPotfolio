import mongoose from "mongoose";
export const connectionToDb = async () => {
  if (mongoose.connection.readyState) {
    console.log("Already connected to the database");
    return;
  }

  try {
    mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Database connection failed");
  }
};
