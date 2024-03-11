const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var SchemaAuth = mongoose.Schema({
  nom: String,
  email: String,
  numero: String,
  status: String,
  address: String,
  travail: String,
  Sexe: String,
  image: String,
  UserId: String,
  admin: Boolean,
});

var Profil = mongoose.model("Profil", SchemaAuth);
var url = "mongodb://localhost:27017/bbzUniversity";
//----------------------------------------------------------------
// Post Profil Data
exports.PostDataProfilMOdel = (
  nom,
  email,
  numero,
  status,
  address,
  travail,
  Sexe,
  image,
  UserId
) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.findOne({ UserId: UserId });
      })
      .then((Prof) => {
        if (Prof) {
          mongoose.disconnect();
          reject("vous avez deja un Profil");
        } else {
          let Pro = new Profil({
            nom: nom,
            email: email,
            numero: numero,
            status: status,
            address: address,
            travail: travail,
            Sexe: Sexe,
            image: image,
            UserId: UserId,
            admin: false,
          });
          return Pro.save();
        }
      })
      .then(() => {
        mongoose.disconnect();
        resolve("registred");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};
//Update Profil
exports.getMyProfile = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.findOne({ UserId: id });
      })
      .then((Pro) => {
        mongoose.disconnect();
        resolve(Pro);
      })
      .catch((err) => reject(err));
  });
};
exports.PostUpdateProfileModel = (
  nom,
  email,
  numero,
  status,
  address,
  travail,
  Sexe,
  image,
  UserId
) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.updateOne(
          { UserId: UserId },
          {
            nom: nom,
            email: email,
            numero: numero,
            status: status,
            address: address,
            travail: travail,
            Sexe: Sexe,
            image: image,
            UserId: UserId,
          }
        );
      })
      .then(() => {
        mongoose.disconnect();
        resolve("mis a jour  avec success!!!");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};

//----------------------------------------------------------------
//get All Profiles for Admin
exports.getAllProfilesAdminModel = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.find({ admin: false });
      })
      .then((profiles) => {
        mongoose.disconnect();
        resolve(profiles);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//----------------------------------------------------------------
//delete ProfileUser for Admin
exports.deleteProfileUserAdminModel = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.deleteOne({ _id: id });
      })
      .then((courses) => {
        mongoose.disconnect();
        resolve(true);
      })
      .catch((err) => reject(err));
  });
};

//----------------------------------------------------------------
//update ProfileUser for Admin
exports.UpdateProfilUserModel = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.findById(id);
      })
      .then((courses) => {
        mongoose.disconnect();
        resolve(courses);
      })
      .catch((err) => reject(err));
  });
};
exports.PostUpdateProfileUserAdminModel = (
  profileId,
  nom,
  email,
  numero,
  status,
  address,
  travail,
  Sexe,
  image,
  UserId
) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.updateOne(
          { _id: profileId },
          {
            nom: nom,
            email: email,
            numero: numero,
            status: status,
            address: address,
            travail: travail,
            Sexe: Sexe,
            image: image,
            UserId: UserId,
            admin: false,
          }
        );
      })
      .then(() => {
        mongoose.disconnect();
        resolve("mis a jour  avec success!!!");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};

//----------------------------------------------------------------
//get Profile User  for details page
exports.getProfileUserDetailsModel = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.findOne({ UserId: id });
      })
      .then((profile) => {
        mongoose.disconnect();
        resolve(profile);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//----------------------------------------------------------------
//get Profile Admin
exports.getProfileAdminModel = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.findOne({ UserId: id });
      })
      .then((profile) => {
        console.log(profile);
        mongoose.disconnect();
        resolve(profile);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//----------------------------------------------------------------
//get Profile User
exports.getProfilUserModel = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.findOne({ UserId: id });
      })
      .then((profile) => {
        //console.log(profile);
        mongoose.disconnect();
        resolve(profile);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//----------------------------------------------------------------
// Post Profil Data For Admin
exports.PostProfilDataForAdminMOdel = (
  nom,
  email,
  numero,
  status,
  address,
  travail,
  Sexe,
  image,
  UserId
) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.findOne({ UserId: UserId });
      })
      .then((Prof) => {
        if (Prof) {
          mongoose.disconnect();
          reject(" Admin vous avez deja un Profil");
        } else {
          let Pro = new Profil({
            nom: nom,
            email: email,
            numero: numero,
            status: status,
            address: address,
            travail: travail,
            Sexe: Sexe,
            image: image,
            UserId: UserId,
            admin: true,
          });
          return Pro.save();
        }
      })
      .then(() => {
        mongoose.disconnect();
        resolve("registred");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};
//Update Profil Admin
exports.getMyProfileAdmin = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.findOne({ UserId: id });
      })
      .then((Pro) => {
        mongoose.disconnect();
        resolve(Pro);
      })
      .catch((err) => reject(err));
  });
};
exports.PostUpdateProfilAdminModel = (
  profileId,
  nom,
  email,
  numero,
  status,
  address,
  travail,
  Sexe,
  image,
  UserId
) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Profil.updateOne(
          { _id: profileId },
          {
            nom: nom,
            email: email,
            numero: numero,
            status: status,
            address: address,
            travail: travail,
            Sexe: Sexe,
            image: image,
            UserId: UserId,
            admin: true,
          }
        );
      })
      .then(() => {
        mongoose.disconnect();
        resolve("mis a jour  avec success!!!");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};
