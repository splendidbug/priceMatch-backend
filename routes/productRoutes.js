const express = require("express");
const cors = require("cors");
const router = express.Router();
router.use(cors());

const {
  getProducts,
  createProduct,
  getProductsWithHomePageCategory,
  searchProducts,
} = require("../controllers/productController");
router.route("/products").get(getProducts);
router.route("/").get(getProductsWithHomePageCategory).post(createProduct);
router.route("/search?").get(searchProducts);
module.exports = router;
