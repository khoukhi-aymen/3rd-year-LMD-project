const ProfileModel = require("../models/profile");

exports.getPageContact = (req, res, next) => {
  let id = req.session.UserId;
  ProfileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("contact", { Profil: Profil, verifUser: req.session.UserId });
  });
};
