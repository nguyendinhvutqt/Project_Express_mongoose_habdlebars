const path = require("path");
const hbs = require("express-handlebars");

const viewEngine = (app) => {
  app.engine(
    ".hbs",
    hbs.engine({
      extname: ".hbs",
    })
  );
  app.set("view engine", ".hbs");
  app.set("views", path.join(__dirname, "../../resources/views/"));
};

module.exports = { viewEngine };
