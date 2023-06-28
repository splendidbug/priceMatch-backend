const mongoose = require("mongoose");
//this will have all the values in contact resource

const productSchema = mongoose.Schema(
  {
    storeName: {
      type: String,
      required: [true, "Please add the store name"],
    },
    productName: {
      type: String,
      required: [true, "Please add the product name"],
    },
    price: {
      type: Number,
      required: [true, "Please add the product price"],
    },
    starValue: {
      type: Number,
    },
    imgSrc: {
      type: String,
    },
    imgSrc2: {
      type: String,
    },
    homePageCategory: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", productSchema);
