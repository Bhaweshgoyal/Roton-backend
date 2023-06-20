const { Orders } = require("../models");
const { Products } = require("../models");
const { order_products } = require("../models");
const createOrder = async () => {
  try {
    const response = await Orders.create({ STATUS: "CREATION" });

    return response;
  } catch (err) {
    return err;
  }
};
const getAllOrders = async () => {
  try {
    const response = await Orders.findAll({ include: Products });
    return response;
  } catch (err) {
    return err;
  }
};

const addProductToOrder = async (data) => {
  const order = await Orders.findByPk(data.orderId);
  const product = await Products.findByPk(data.productId);
  let entry = await order_products.findOne({
    where: {
      OrderId: order.id,
      ProductId: product.id,
    },
  });
  if (!entry) {
    entry = await order.addProduct(product, { through: { quantity: 1 } });
  } else {
    await entry.increment("quantity", { by: 1 });
  }

  return entry;
};
const removeProductToOrder = async (data) => {
  try {
    const order = await Orders.findByPk(data.orderId);
    const product = await Products.findByPk(data.productId);
    if (order.status !== STATUS.CREATION) {
      return {
        error: "Order Cannot be Found",
      };
    }
    if (!product) {
      return {
        error: "Product Cannot be Found",
      };
    }
    const entry = await order_products.findOne({
      where: {
        orderId: data.orderId,
        productId: data.productId,
      },
    });
    if (!entry) {
      return {
        error: "No such Product found in the order",
      };
    } else {
      if (entry.quantity <= 1) {
        order.removeProduct(product);
      } else {
        await entry.decrement(`quantity`, { by: 1 });
      }
    }
    return entry;
  } catch (err) {
    return err;
  }
};

const getProductOfOrders = async (orderId) => {
  try {
    const response = await Orders.findAll({
      include: Products,
      where: {
        id: orderId,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllOrders,
  addProductToOrder,
  getProductOfOrders,
  createOrder,
  removeProductToOrder,
};
