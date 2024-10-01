import mongoose from "mongoose";

const productModel = mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Please Add Product Name"],
    },
    productPrice: {
      type: Number,
      required: [true, "Please Add Product Price"],
    },
    productCategory: {
      type: String,
      required: [true, "Please Add Product Category"],
    },
  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model("Products", productModel);
export default Product;
