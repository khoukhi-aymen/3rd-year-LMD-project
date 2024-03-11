const mongoose = require("mongoose");
var SchemaEvaluation = mongoose.Schema({
  BookId: String,
  UserId: String,
  Note: Number,
});
var Evaluation = mongoose.model("evaluation", SchemaEvaluation);
var url = "mongodb://localhost:27017/bbzUniversity";

exports.EvaluationFunctionModel = (BookId, UserId, Note) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Evaluation.findOne({ UserId: UserId, BookId: BookId });
      })
      .then((eval) => {
        if (eval) {
          mongoose.disconnect();
          reject("Vous etes deja donner une evaluation sur ce document");
        } else {
          let evaluation = new Evaluation({
            BookId: BookId,
            UserId: UserId,
            Note: Note,
          });
          return evaluation.save();
        }
      })
      .then((user) => {
        mongoose.disconnect();
        resolve("votre évaluation a été enrégistré");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};
