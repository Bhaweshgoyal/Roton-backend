const OrderServices = require("../service/order_services");

const getAllOrders = async (req, res) => {
  try {
    const response = await OrderServices.getAllOrders();
    if (response) {
      return res.status(201).json({
        message: "Successfull",
        result: response,
      });
    }

    return res.status(401).json({
      message: "Request-Failed",
    });
  } catch (err) {
    return res.status(501).json({
      message: "Internal Server Error -Request Failed",
      result: err,
    });
  }
};
const getProductOfOrders = async (req, res) => {
  try {
    const response = await OrderServices.getProductOfOrders(req.params.orderId);
    console.log(response)
    if (response) {
      return res.status(201).json({
        message: "Successfull",
        result: response,
      });
    }

    return res.status(401).json({
      message: "Request-Failed",
    });
  } catch (err) {
    return res.status(501).json({
      message: "Internal Server Error -Request Failed",
      result: err,
    });
  }
};
const addProductToOrder = async (req, res) => {
  try {
    const response = await OrderServices.addProductToOrder(req.body);
    if (response) {
      return res.status(201).json({
        message: "Successfull",
        result: response,
      });
    }

    return res.status(401).json({
      message: "Request-Failed",
    });
  } catch (err) {
    return res.status(501).json({
      message: "Internal Server Error -Request Failed",
      result: err,
    });
  }
};
const createOrder = async (req, res) => {
  try {
    const response = await OrderServices.createOrder();
    console.log(response, "responseresponseresponseresponseresponse");
    if (response) {
      return res.status(201).json({
        message: "Successfull",
        result: response,
      });
    }

    return res.status(401).json({
      message: "Request-Failed",
    });
  } catch (err) {
    return res.status(501).json({
      message: "Internal Server Error -Request Failed",
      result: err,
    });
  }
};
const removeProductToOrder = async (req, res) => {
  try {
    const response = await OrderServices.removeProductToOrder(req.body);

    if (response) {
      return res.status(201).json({
        message: "Successfull",
        result: response,
      });
    }

    return res.status(401).json({
      message: "Request-Failed",
    });
  } catch (err) {
    return res.status(501).json({
      message: "Internal Server Error -Request Failed",
      result: err,
    });
  }
};
module.exports = {
  getAllOrders,
  addProductToOrder,
  getProductOfOrders,
  createOrder,
  removeProductToOrder,
};
