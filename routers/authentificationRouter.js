const AuthController = require("../controlers/authentifcationController");
const router = require("express").Router();
const quradAuth = require("./guardAuth");
const body = require("express").urlencoded({ extended: true });

router.get("/home", quradAuth.nonAuthAdmin, AuthController.getIndexPage);
router.get(
  "/register",
  quradAuth.nonAuth,
  quradAuth.nonAuthAdmin,
  AuthController.getregisterPage
);

router.post("/register", body, AuthController.PostRegisterData);
router.get(
  "/login",
  quradAuth.nonAuth,
  quradAuth.nonAuthAdmin,
  AuthController.getLoginPage
);
router.post("/login", body, AuthController.PostLoginData);
router.post("/logout", AuthController.LogOutFucntionController);
router.post("/logoutAdmin", AuthController.LogOutFucntionAdminController);
module.exports = router;
