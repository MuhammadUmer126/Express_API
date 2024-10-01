import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
import productRouter from "./routes/product-routes.js";

import connectToDb from "./config/connect-to-DB.js";
connectToDb();


const app = express();
app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
