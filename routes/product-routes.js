import express from "express";
const router = express.Router();
import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product-controller.js";

// router.route("/").get(getProduct);
// router.route("/:id").get(getProductById);
// router.route("/").post(createProduct);
// router.route("/:id").put(updateProduct);
// router.route("/:id").delete(deleteProduct);

router.route("/").get(getProduct).post(createProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
