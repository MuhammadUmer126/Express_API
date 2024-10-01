import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectionString = process.env.CONNECTION_STRING;

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(connectionString);
    console.log(connection.connection.host);
    console.log(connection.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDb;
