const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const path = require("path");
const view = require("./configs/viewEngine");
require("dotenv").config();
const { layoutMiddleware } = require("./middlewares/LayoutMiddleware");

const port = process.env.PORT || 3333;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// config default layout
app.use(layoutMiddleware);

// config view engine
view.viewEngine(app);

app.get("/admin", (req, res) => {
  res.render("user/home");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
