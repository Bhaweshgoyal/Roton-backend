const {
  getAllProducts,
  getProductByName,
  productsInsertion,
} = require("../controllers/product_controllers.js");
const ProductRoute = (app) => {
  app.get("/api/v1/all-product", getAllProducts),
  app.get("/api/v1/products/:productName", getProductByName);
  app.post("/api/v1/products/insert-products", productsInsertion);
};

module.exports = {
  ProductRoute,
};
