exports.isAuth = (req, res, next) => {
  if (req.session.UserId) {
    next();
  } else {
    console.log(req.session.UserId);
    res.redirect("/login");
  }
};

exports.nonAuth = (req, res, next) => {
  if (req.session.UserId) {
    res.redirect("/home");
  } else {
    next();
  }
};

exports.nonAuthAdmin = (req, res, next) => {
  if (req.session.UserId == "628514df8564d247de19c098") {
    res.redirect("/dashboard");
  } else {
    next();
  }
};
exports.isAuthAdmin = (req, res, next) => {
  if (req.session.UserId == "628514df8564d247de19c098") {
    next();
  } else {
    console.log(req.session.UserId);
    res.redirect("/login");
  }
};
