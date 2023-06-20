const {
  getAllOrders,
  addProductToOrder,
  getProductOfOrders,
  createOrder,
  removeProductToOrder,
} = require("../controllers/orders_controller.js");
const OrdersRoute = (app) => {
  app.get("/api/v1/all-order", getAllOrders);
  app.post("/api/v1/order/create-order", createOrder);
  app.post("/api/v1/order/remove-product-order", removeProductToOrder);
  app.get("/api/v1/order/get-all-product-of-order/:orderId", getProductOfOrders);
  app.patch("/api/v1/add-product-order", addProductToOrder);
};

module.exports = {
  OrdersRoute,
};
