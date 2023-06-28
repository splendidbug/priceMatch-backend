const express = require("express");
const cors = require("cors");
const router = express.Router();
router.use(cors());

const {
  getProducts,
  createProduct,
} = require("../controllers/productController");
router.route("/").get(getProducts).post(createProduct);

module.exports = router;
