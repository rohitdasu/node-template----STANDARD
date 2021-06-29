/**
 * express framework import
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
/**
 * routes import
 */
const authRoutes = require("./src/routes/auth/auth");
const secureRoutes = require("./src/routes/secure/secure");
const db = require("./src/db/db"); // don't remove this line -- It makes the DB to work.

/**
 * port number is initialised
 */
const port = process.env.PORT || 3000;

/**
 * using bodyparser middleware to have json type values in this app
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet()); // For data security
/**
 * setting routes
 */
app.use("/api/auth", authRoutes);
app.use("/api/secure", secureRoutes);

/**
 * root api
 */
app.get("/", (req, res) => {
  res.send("this is root api....Yippeeeeeeeee :)");
});

/**
 * server starting at the port number
 */
app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
