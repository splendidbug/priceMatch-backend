const asyncHandler = require("express-async-handler");
const Products = require("../models/productModel");

//@desc Get all contacts
//@route GET /api/contacts
//@acceess public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Products.find();
  res.status(200).json(products);
});

//@desc Create product
//@route POST /api/products
//@acceess public
const createProduct = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    storeName,
    productName,
    price,
    starValue,
    imgSrc,
    imgSrc2,
    homePageCategory,
  } = req.body; //const {field_names should be equal to the field_names passed in the body of http request}
  if (!storeName || !productName || !price) {
    res.status(400);
    throw new Error("all fields are mandatory");
  }

  const products = await Products.create({
    storeName,
    productName,
    price,
    starValue,
    imgSrc,
    imgSrc2,
    homePageCategory,
  });

  res.status(201).json({ message: "Contact Received", products });
});
module.exports = { getProducts, createProduct };
