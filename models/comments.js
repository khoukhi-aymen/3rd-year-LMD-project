const mongoose = require("mongoose");
var SchemaComment = mongoose.Schema({
  BookId: String,
  UserId: String,
  document: String,
  nomuser: String,
  contenu: String,
});
var Comment = mongoose.model("comment", SchemaComment);
var url = "mongodb://localhost:27017/bbzUniversity";

exports.CommentFunctionModel = (BookId, UserId, document, user, contenu) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        let comment = new Comment({
          BookId: BookId,
          UserId: UserId,
          document: document,
          nomuser: user,
          contenu: contenu,
        });
        return comment.save();
      })
      .then(() => {
        mongoose.disconnect();
        resolve("votre commentaire a été enrégistré");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};
//----------------------------------------------------------------
//get AllCommennts for Admin
exports.getAllCommentsAdminModel = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Comment.find({});
      })
      .then((com) => {
        mongoose.disconnect();
        resolve(com);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//----------------------------------------------------------------
//delete user for Admin
exports.deleteCommentAdminModel = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Comment.deleteOne({ _id: id });
      })
      .then((courses) => {
        mongoose.disconnect();
        resolve(true);
      })
      .catch((err) => reject(err));
  });
};

//----------------------------------------------------------------
//update comment  for Admin
exports.UpdateCommentForAdminrModel = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Comment.findById(id);
      })
      .then((comment) => {
        mongoose.disconnect();
        resolve(comment);
      })
      .catch((err) => reject(err));
  });
};

exports.PostUpdateCommentModel = (
  IdComment,
  Idbook,
  UserId,
  document,
  nomuser,
  contenu
) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Comment.updateOne(
          { _id: IdComment },
          {
            BookId: Idbook,
            UserId: UserId,
            document: document,
            nomuser: nomuser,
            contenu: contenu,
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
