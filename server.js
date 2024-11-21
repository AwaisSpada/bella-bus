const express = require("express");
var cors = require("cors");
require("express-async-errors");
const app = express();
require("./config/mongoose");
const routes = require("./routes/mainroutes");
/*******AdminBro Dependencies */
const { buildAdminRouter } = require("./adminBro/adminRouter");
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const options = require("./adminBro/adminOptions");
const admin = new AdminJS(options);
const router = buildAdminRouter(admin);
app.use(express.json({ urlencoded: true }));
app.use(cors());
app.use(admin.options.rootPath, router);
const PORT = process.env.PORT || 9999;
const { emailSender } = require("./utilities/emailSender");

app.use("/", routes);
app.use((req, res, next) => {
  req.status = 404;
  const error = new Error("routes not found");
  next(error);
});

if (app.get("env") === "production") {
  app.use((error, req, res, next) => {
    res.status(req.status || 500).send({
      message: error.message,
    });
  });
} else
  app.use((error, req, res, next) => {
    res.status(req.status || 500).send({
      message: error.message,
      stack: error.stack,
    });
  });
const connectDB = require("./config/mongoose");

connectDB();

app.listen(PORT, function () {
  console.log(
    "The project is running on PORT 9999 AdminJS is under http://localhost:9999/admin"
  );
});
