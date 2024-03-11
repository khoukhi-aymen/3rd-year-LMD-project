const router = require("express").Router();
const contactController = require("../controlers/ContactController");
const gaurdAuth = require("./guardAuth");
router.get(
  "/contact",
  gaurdAuth.nonAuthAdmin,
  contactController.getPageContact
);
module.exports = router;
