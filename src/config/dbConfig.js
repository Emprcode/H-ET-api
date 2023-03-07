import mongoose from "mongoose";

export const connectDB = () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = mongoose.connect(process.env.MONGO_CLIENT);

    conn && console.log("mongo connected");
  } catch (error) {
    next(error);
  }
};
