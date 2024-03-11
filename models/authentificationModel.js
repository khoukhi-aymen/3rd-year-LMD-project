const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var SchemaAuth = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  admin: Boolean,
});

var User = mongoose.model("user", SchemaAuth);
var url = "mongodb://localhost:27017/bbzUniversity";

exports.registerFunctionModel = (name, email, password) => {
  //test email if exist(true go to login )(false add this user to users collection)
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return User.findOne({ email: email });
      })
      .then((user) => {
        if (user) {
          mongoose.disconnect();
          reject("email is used");
        } else {
          return bcrypt.hash(password, 10);
        }
      })
      .then((hpassword) => {
        let user = new User({
          name: name,
          email: email,
          password: hpassword,
          admin: false,
        });
        return user.save();
      })
      .then((user) => {
        mongoose.disconnect();
        resolve("registred");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};

exports.LoginFunctionModel = (email, password) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return User.findOne({ email: email });
      })
      .then((user) => {
        if (user) {
          bcrypt.compare(password, user.password).then((verif) => {
            if (verif) {
              mongoose.disconnect();
              resolve(user);
              console.log("login avec succes");
            } else {
              mongoose.disconnect();
              reject("invalid password!");
            }
          });
        } else {
          mongoose.disconnect();
          reject("we don't have this user in our database");
        }
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};
//----------------------------------------------------------------
//get AllUsers for Admin
exports.getAllUsersAdminModel = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return User.find({ admin: false });
      })
      .then((users) => {
        mongoose.disconnect();
        resolve(users);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//----------------------------------------------------------------
//delete user for Admin
exports.deleteUserAdminModel = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return User.deleteOne({ _id: id });
      })
      .then((courses) => {
        mongoose.disconnect();
        resolve(true);
      })
      .catch((err) => reject(err));
  });
};
