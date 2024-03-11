const AuthModel = require("../models/authentificationModel");
const ProfileModel = require("../models/profile");

//index
exports.getIndexPage = (req, res, next) => {
  let id = req.session.UserId;
  ProfileModel.getProfilUserModel(id).then((Profil) => {
    //console.log(Profil);
    res.render("index", { Profil: Profil, verifUser: req.session.UserId });
  });
};
//register
exports.getregisterPage = (req, res, next) => {
  //console.log(req.flash("error"));
  res.render("register", {
    verifUser: req.session.UserId,
    message: req.flash("error")[0],
  });
};

exports.PostRegisterData = (req, res, next) => {
  AuthModel.registerFunctionModel(
    req.body.name,
    req.body.email,
    req.body.password
  )
    .then((user) => {
      console.log(user);
      res.redirect("/login");
    })
    .catch((msg) => {
      //console.log(msg);
      req.flash("error", msg);
      res.redirect("/register");
    });
};

//login
exports.getLoginPage = (req, res, next) => {
  //console.log(req.flash("error"));
  res.render("login", {
    verifUser: req.session.UserId,
    message: req.flash("error")[0],
  });
};
//login Admin
exports.getLoginPageAdmin = (req, res, next) => {
  //console.log(req.flash("error"));
  res.render("login", {
    verifUser: req.session.UserId,
    message: req.flash("error")[0],
  });
};
exports.PostLoginData = (req, res, next) => {
  AuthModel.LoginFunctionModel(req.body.email, req.body.password)
    .then((user) => {
      if (user.admin === true) {
        //console.log(user.admin);
        req.session.UserId = user._id;
        //console.log(req.session.UserId);
        //console.log(user._id);
        res.render("dashbord");
      } else {
        //console.log(user.name);
        req.session.UserId = user._id;
        //console.log(req.session.UserId);
        //console.log(user._id);
        res.redirect("/home");
      }
    })
    .catch((msj) => {
      //console.log(msj);
      req.flash("error", msj);
      res.redirect("/login");
    });
};
//Logout User
exports.LogOutFucntionController = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
//Logout Admin
exports.LogOutFucntionAdminController = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
