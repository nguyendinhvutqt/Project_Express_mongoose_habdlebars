exports.layoutMiddleware = (req, res, next) => {
  if (req.url.startsWith("/admin")) {
    res.locals.layout = "admin";
  } else {
    res.locals.layout = "main";
  }
  next();
};
