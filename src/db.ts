import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
