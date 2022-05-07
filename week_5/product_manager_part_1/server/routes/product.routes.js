const ProductController = require("../controllers/product.controller.js");

module.exports = (app) =>{
    app.post("/api/products", ProductController.createProduct)
}