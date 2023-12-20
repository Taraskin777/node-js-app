const path = require("path");

const express = require("express");

const productsCotroller = require("../controllers/products");

const router = express.Router();

router.get("/", productsCotroller.getProducts);

module.exports = router;
