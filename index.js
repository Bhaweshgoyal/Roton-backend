const express = require("express");
const app = express();
const cors = require("cors") ; 
app.use(cors())
require("dotenv").config();
const port = process.env.PORT;
const { sequelize } = require("./models/index.js");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { ProductRoute } = require("./routes/product_routes.js");
const { OrdersRoute } = require("./routes/order_routes.js");
ProductRoute(app);
OrdersRoute(app);
app.listen(port, async () => {
  await sequelize.sync();
  console.log("App is listning over ", port);
});
