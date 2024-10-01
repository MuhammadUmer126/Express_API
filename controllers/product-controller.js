//@desc Get All Products
//@route GET /api/products/
//@access public
const getProduct = (req, res) => {
  res.json({ message: "All Products" });
};
//@desc Get Product by Id
//@route GET /api/products/:id
//@access public
const getProductById = (req, res) => {
  res.json({ message: "Products By Id" });
};
//@desc Create A Product
//@route POST /api/products/
//@access public
const createProduct = (req, res) => {
  res.json({ message: "Create Product" });
};
//@desc Update A Product by Id
//@route PUT /api/products/:id
//@access public
const updateProduct = (req, res) => {
  res.json({ message: "Update Product" });
};
//@desc Delete A Product by Id
//@route DELETE /api/products/:id
//@access public
const deleteProduct = (req, res) => {
  res.json({ message: "Delete Product" });
};

export {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
