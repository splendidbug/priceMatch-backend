const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
connectDb();
app.use("/api/products", require("./routes/productRoutes"));

app.use(errorHandler);
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
