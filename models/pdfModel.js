const mongoose = require("mongoose");
const ContentBasedRecommender = require("content-based-recommender");
const recommender = new ContentBasedRecommender({
  minScore: 0.1,
  maxSimilarDocuments: 100,
});
var Schemapdf = mongoose.Schema({
  titre: String,
  description: String,
  niveau: String,
  specialite: String,
  categorie: String,
  type: String,
  date: String,
  nomUser: String,
  nomFichier: String,
  module: String,
  typeFichier: String,
  UserId: String,
});
var pdf = mongoose.model("pdf", Schemapdf);
var url = "mongodb://localhost:27017/bbzUniversity";
// ----------------------------------------------------------------------
//L3 informatique
// **************** partie Cours************
exports.getPdfCoursesL3InformatiuqeAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "informatique",
          categorie: "cours algorithmique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfCoursesL3InformatiuqeMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "informatique",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfCoursesL3InformatiuqeMemLicence = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "informatique",
          categorie: "memoire licence",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL3infoAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "informatique",
          categorie: "cours algorithmique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3infoMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "informatique",
          categorie: "cours mathematique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL3infoAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "informatique",
          categorie: "cours algorithmique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfTDL3infomath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "informatique",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie Exemens************
exports.getPdfExemensL3infoAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "informatique",
          categorie: "cours algorithmique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL3infoMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "informatique",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie image************
exports.getPdfimageL3infoAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "informatique",
          categorie: "cours algorithmique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3infoMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "informatique",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3infoMemLic = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "informatique",
          categorie: "memoire licence",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L3 Mathematique
// **************** partie Cours************
exports.getPdfCoursesL3MathematiqueAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "mathematique",
          categorie: "cours algorithmique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfCoursesL3MathematiqueMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "mathematique",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3MathematiqueMemLicence = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "mathematique",
          categorie: "memoire licence",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// **************** partie TD************
exports.getPdfTDL3mathAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "mathematique",
          categorie: "cours algorithmique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfTDL3mathmath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "mathematique",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ****************partie TP*************
exports.getPdfTPL3mathAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "mathematique",
          categorie: "cours algorithmique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3mathmath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "mathematique",
          categorie: "cours mathematique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// *************partie Exemens******************
exports.getPdfExemensL3mathAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "mathematique",
          categorie: "cours algorithmique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL3mathmath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "mathematique",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL3mathAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "mathematique",
          categorie: "cours algorithmique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3matmath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "mathematique",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3matMemLic = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "mathematique",
          categorie: "memoire licence",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L2 informatique
// **************** partie Cours************
exports.getPdfCoursesL2InformatiuqeAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "cours algorithmique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfCoursesL2InformatiuqeMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfCoursesL2InformatiuqeEnglish = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "Cours anglais",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// **************** partie TD************
exports.getPdfTDL2infoAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "cours algorithmique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfTDL2infoMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL2infoAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "cours algorithmique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2infoMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "cours mathematique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie Exemens************
exports.getPdfExemensL2infoAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "cours algorithmique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2infoMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2infoEnglish = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "Cours anglais",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ****************image*************
exports.getPdfimageL2infoAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "cours algorithmique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2infoMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2infoEnglish = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "informatique",
          categorie: "Cours anglais",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L2 mathematique
// **************** partie Cours************
exports.getPdfCoursesL2mathematiqueMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "mathematique",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfCoursesL2MathematiqueAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "mathematique",
          categorie: "cours algorithmique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************

exports.getPdfTDL2mathAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "mathematique",
          categorie: "cours algorithmique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfTDL2mathmath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "mathematique",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL2mathAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "mathematique",
          categorie: "cours algorithmique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2mathmath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "mathematique",
          categorie: "cours mathematique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** Exemens ************
exports.getPdfExemensL2mathAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "mathematique",
          categorie: "cours algorithmique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2mathMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "mathematique",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL2mathAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "mathematique",
          categorie: "cours algorithmique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2mathMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "mathematique",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L2 génie mécanique
// **************** partie Cours************
exports.getPdfCoursesL2MecaniqueMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2MecaniqueAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours algorithmique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2MecaniquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2Mecaniquetechnologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours technologie",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL2MecaniqueMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2MecaniqueAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours algorithmique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2Mecaniquephysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2MecaniqueTechnologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours technologie",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL2MecaniqueMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours mathematique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2MecaniqueAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours algorithmique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2MecaniquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours physique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2MecaniqueTechnologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours technologie",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie Exemens************
exports.getPdfExemensL2MecaniqueMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2MecaniqueAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours algorithmique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2MecaniquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2MecaniqueTechnologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours technologie",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ****************image*************
exports.getPdfimageL2MecaniqueMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2MecaniqueAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours algorithmique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2MecaniquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2MecaniqueTechnologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie mécanique",
          categorie: "cours technologie",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L2 génie Civil
// **************** partie Cours************
exports.getPdfCoursesL2GenieCivilMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2GenieCivilGC = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours génie Civil",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2GenieCivilPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2GenieCivilTechno = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours technologie",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL2GenieCivilMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2GenieCivilGC = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours génie Civil",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2GenieCivilPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2GenieCivilTechnologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours technologie",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL2GenieCivilMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours mathematique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2GenieCivilGC = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours génie Civil",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2GenieCivilPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours physique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2GenieCivilTechnologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours technologie",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie Exemens************
exports.getPdfExemensL2GenieCivilMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2GenieCivilGC = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours génie Civil",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2GenieCivilPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2GenieCivilTechnologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours technologie",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL2GenieCivilMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2GenieCivilGC = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours génie Civil",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2GenieCivilPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2GenieCivilTechnologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie Civil",
          categorie: "cours technologie",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L2 Génie des procédés
// **************** partie Cours************
exports.getPdfCoursesL2GPMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2GPChimie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours chimie",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2GPPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2GPDesign = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "Design",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2GPreglemnatation = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "Réglementation",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL2GPMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2GPPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2GPChimie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours chimie",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2GPDesign = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "Design",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2GPReglemenatation = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "Réglementation",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL2GPMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours mathematique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2GPPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours physique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2GPChimie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours chimie",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2GPDesign = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "Design",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2GPReglementation = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "Réglementation",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** Exemens************
exports.getPdfExemensL2GPMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2GPChimie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours chimie",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2GPPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2GPDesign = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "Design",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2GPReglemenatation = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "Réglementation",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL2GPMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2GPChimie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours chimie",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2GPPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2GPDesign = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "Design",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2GPReglemenatation = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "génie des procédés",
          categorie: "Réglementation",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L2 Telecommunication
// **************** partie cours************
exports.getPdfCoursesL2TelecomMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2TelecomPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2TelecomTelecom = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours Télécommunication",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2TelecomElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours Electronique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ****************partie TD ************
exports.getPdfTDL2TelecomMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2TelecomPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2TelecomTelecom = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours Télécommunication",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2TelecomElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours Electronique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ****************partie TP ************
exports.getPdfTPL2TelecomMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours mathematique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2TelecomPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours physique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2TelecomTelecom = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours Télécommunication",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2TelecomElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours Electronique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie Exemens************
exports.getPdfExemensL2TelecomMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2TelecomPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2TelecomTelecom = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours Télécommunication",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL2TelecomElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours Electronique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL2TelecomMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2TelecomPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2TelecomTelecom = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours Télécommunication",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2TelecomElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Télécommunication",
          categorie: "cours Electronique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L2 Authomatique
// **************** partie Cours************
exports.getPdfCoursesL2AuthomatiqueMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2AuthomatiquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2AuthomatiqueNetwork = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours réseaux",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL2AuthomatiqueElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours Electronique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL2AuthomatiqueMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2AuthomatiquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2AuthomatiquNetwork = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours réseaux",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL2AuthomatiquElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours Electronique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL2AuthomatiqueMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours mathematique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2AuthomatiquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours physique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2AuthomatiquNetwork = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours réseaux",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL2AuthomatiquElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours Electronique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ****************partie Exemens************
exports.getPdfExemsL2AuthomatiqueMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemsL2AuthomatiquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemsL2AuthomatiquNetwork = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours réseaux",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemsL2AuthomatiquElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours Electronique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL2AuthomatiqueMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2AuthomatiquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2AuthomatiquNetwork = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours réseaux",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL2AuthomatiquElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L2",
          specialite: "Authomatique",
          categorie: "cours Electronique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L3 génie mécanique
// **************** partie Cours************
exports.getPdfCoursesL2Mecaniquehydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours hydrolique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3MecaniqueAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours algorithmique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3MecaniquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3MecaniqueMemLic = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "memoire licence",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL2Mecaniquehydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours hydrolique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL3MecaniqueAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours algorithmique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL3Mecaniquephysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL3Mecaniquehydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours hydrolique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3MecaniqueAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours algorithmique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3MecaniquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours physique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie Exemens************
exports.getPdfExemensL3Mecaniquehydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours hydrolique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL3MecaniqueAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours algorithmique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL3MecaniquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL3Mecaniquehydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours hydrolique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3MecaniqueAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours algorithmique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3MecaniquePhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3MecaniqueMecLic = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie mécanique",
          categorie: "memoire licence",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L3 Telecommunication
// **************** partie Cours************
exports.getPdfCoursesL3TelecomAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours algorithmique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3TelecomPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3NetworkTelecom = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours réseaux",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3TelecomElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours Electronique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3TelecomMemLic = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "memoire licence",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL3TelecomAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours algorithmique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL3TelecomPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL3TelecomNetwork = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours réseaux",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL3TelecomElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours Electronique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL3TelecomAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours algorithmique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3TelecomPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours physique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3TelecomNetwork = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours réseaux",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3TelecomElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours Electronique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfExemensL3TelecomAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours algorithmique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL3TelecomPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL3TelecomNetwork = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours réseaux",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL3TelecomElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours Electronique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL3TelecomAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours algorithmique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3TelecomPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3TelecomNetwork = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours réseaux",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3TelecomElectronique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "Télécommunication",
          categorie: "cours Electronique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//------------------------------------------------------------
//L3 génie Civil
// **************** partie cours************
exports.getPdfCoursesL3GCHydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours hydrolique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3GCphysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3GCgenieCivil = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours génie Civil",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3GCMemLic = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "memoire licence",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL3GCHydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours hydrolique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL3GCphysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL3GCgenieCivil = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours génie Civil",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL3GCHydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours hydrolique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3GCphysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours physique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3GCgenieCivil = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours génie Civil",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie Exemens************
exports.getPdfExemensL3GCHydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours hydrolique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExmensL3GCphysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExmensL3GCgenieCivil = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours génie Civil",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL3GCHydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours hydrolique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3GCphysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3GCgenieCivil = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "cours génie Civil",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3GCMemLic = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie Civil",
          categorie: "memoire licence",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L3 génie ds procédés
exports.getPdfCoursesL3GPphysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3GPpharmacie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours pharmacie",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3GPAgronomie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours Agronomie",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3GPMemLic = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "memoire licence",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// *************partie TD******************
exports.getPdfTDL3GPphysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL3GPAgronomie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours Agronomie",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL3GPPharmacie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours pharmacie",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// *************partie TP******************
exports.getPdfTPL3GPphysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours physique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3GPAgronomie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours Agronomie",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3GPPharmacie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours pharmacie",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// *************Exemens******************
exports.getPdfExemensL3GPphysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL3GPAgronomie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours Agronomie",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL3GPPharmacie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours pharmacie",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL3GPphysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3GPAgronomie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours Agronomie",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3GPPharmacie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "cours pharmacie",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3GPMemLic = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "génie des procédés",
          categorie: "memoire licence",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L3 hydrolique
// **************** partie Cours************
exports.getPdfCoursesL3hydroliquehydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours hydrolique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3hydroliquephysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3hydroliqueLaw = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours lois",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL3hydroliqueMecLic = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "memoire licence",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL3hydroliquehydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours hydrolique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL3hydroliquephysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL3hydroliqueLaw = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours lois",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL3hydroliquehydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours hydrolique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3hydroliquephysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours physique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL3hydroliqueLaw = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours lois",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** Exemens ************
exports.getPdfExemensL3hydroliquehydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours hydrolique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL3hydroliquephysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL3hydroliqueLaw = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours lois",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL3hydroliquehydro = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours hydrolique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3hydroliquephysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3hydroliqueLaw = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "cours lois",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL3hydroliqueMemLic = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L3",
          specialite: "hydrolique",
          categorie: "memoire licence",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//L1 SM
// **************** partie Cours************
exports.getPdfCoursesL1SMAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours algorithmique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL1SMMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL1SMPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL1SMOffice = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours office",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL1SMAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours algorithmique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL1SMMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL1SMPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL1SMAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours algorithmique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL1SMMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours mathematique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL1SMPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours physique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie Exemens************
exports.getPdfExemensL1SMOffice = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours office",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL1SMAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours algorithmique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL1SMMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL1SMPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL1SMOffice = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours office",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL1SMAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours algorithmique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL1SMMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL1SMPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SM",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L1 ST
// **************** partie Cours************
exports.getPdfCoursesL1STAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours algorithmique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfCoursesL1STMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfCoursesL1STPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfCoursesL1STOffice = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours office",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL1STAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours algorithmique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL1STMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfTDL1STphysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// **************** partie TP************
exports.getPdfTPL1STAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours algorithmique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfTPL1STMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours mathematique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfTPL1STPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours physique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie Exemens************
exports.getPdfExemensL1STAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours algorithmique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL1STOffice = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours office",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfExemensL1STMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL1STPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ****************image************
exports.getPdfimageL1STPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL1STOffice = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours office",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfimageL1STMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL1STAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "ST",
          categorie: "cours algorithmique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L1 MI

// **************** partie Cours************
exports.getPdfCoursesL1MIAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours algorithmique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL1MIMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfCoursesL1MIPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours physique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getPdfCoursesL1MIOffice = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours office",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL1MIAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours algorithmique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL1MIMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL1MIPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours physique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL1MIAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours algorithmique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie Exemens************
exports.getPdfExemensL1MIAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours algorithmique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL1MIOffice = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours office",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL1MIPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours physique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL1MIMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL1MIAlgo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours algorithmique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL1MIOffice = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours office",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL1MIMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL1MIPhysique = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "MI",
          categorie: "cours physique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// ----------------------------------------------------------------------
//L1 SNV
// **************** partie Cours************
exports.getPdfCoursesL1SNVMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours mathematique",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL1SNVBiologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours biologie",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL1SNVChimie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours chimie",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfCoursesL1SNVGoelogie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours geologie",
          type: "cours",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TD************
exports.getPdfTDL1SNVMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours mathematique",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL1SNVBiologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours biologie",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL1SNVChimie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours chimie",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTDL1SNVGeologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours geologie",
          type: "TD",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie TP************
exports.getPdfTPL1SNVMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours mathematique",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL1SNVBiologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours biologie",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL1SNVChimie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours chimie",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfTPL1SNVGeologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours geologie",
          type: "TP",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** partie Exemens************
exports.getPdfExemensL1SNVMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours mathematique",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL1SNVBiologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours biologie",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL1SNVChimie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours chimie",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfExemensL1SNVGeologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours geologie",
          type: "Exemens",
          typeFichier: "pdf",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// **************** image ************
exports.getPdfimageL1SNVMath = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours mathematique",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL1SNVBiologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours biologie",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL1SNVChimie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours chimie",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getPdfimageL1SNVGeologie = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({
          niveau: "L1",
          specialite: "SNV",
          categorie: "cours geologie",
          typeFichier: "image",
        });
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//----------------------------------------------------------------
//Page Details Pdf
exports.getDeatilsPdf = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.findById(id);
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//----------------------------------------------------------------
//Page mis en lige Pdf
exports.PostDataPdfMOdel = (
  titre,
  description,
  niveau,
  specialite,
  categorie,
  type,
  date,
  nomUser,
  filename,
  module,
  typeFichier,
  UserId
) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        let PDF = new pdf({
          titre: titre,
          description: description,
          niveau: niveau,
          specialite: specialite,
          categorie: categorie,
          type: type,
          date: date,
          nomUser: nomUser,
          nomFichier: filename,
          module: module,
          typeFichier: typeFichier,
          UserId: UserId,
        });
        return PDF.save();
      })
      .then(() => {
        mongoose.disconnect();
        resolve("ajout avec success");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};
//----------------------------------------------------------------
//Page my Courses
exports.getMyCourses = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({ UserId: id });
      })
      .then((courses) => {
        mongoose.disconnect();
        resolve(courses);
      })
      .catch((err) => reject(err));
  });
};
//----------------------------------------------------------------
//delete document
exports.deleteDocumentModel = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.deleteOne({ _id: id });
      })
      .then((courses) => {
        mongoose.disconnect();
        resolve(true);
      })
      .catch((err) => reject(err));
  });
};
//----------------------------------------------------------------
//update document
exports.UpdateDocumentModel = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.findById(id);
      })
      .then((courses) => {
        mongoose.disconnect();
        resolve(courses);
      })
      .catch((err) => reject(err));
  });
};
exports.PostUpdateDocumentModel = (
  BookId,
  titre,
  description,
  niveau,
  specialite,
  categorie,
  type,
  date,
  nomUser,
  nomFichier,
  module,
  typeFichier,
  UserId
) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.updateOne(
          { _id: BookId },
          {
            titre: titre,
            description: description,
            niveau: niveau,
            specialite: specialite,
            categorie: categorie,
            type: type,
            date: date,
            nomUser: nomUser,
            nomFichier: nomFichier,
            module: module,
            typeFichier: typeFichier,
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
//get AllDocuments for Admin
exports.getAllDocumentsAdminModel = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.find({});
      })
      .then((pdf) => {
        mongoose.disconnect();
        resolve(pdf);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//----------------------------------------------------------------
//delete document for Admin
exports.deleteDocumentAdminModel = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.deleteOne({ _id: id });
      })
      .then((courses) => {
        mongoose.disconnect();
        resolve(true);
      })
      .catch((err) => reject(err));
  });
};
//----------------------------------------------------------------
//update document for Admin
exports.UpdateDocumentAdminModel = (id) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.findById(id);
      })
      .then((courses) => {
        mongoose.disconnect();
        resolve(courses);
      })
      .catch((err) => reject(err));
  });
};

exports.PostUpdateDocumentAdminModel = (
  BookId,
  titre,
  description,
  niveau,
  specialite,
  categorie,
  type,
  date,
  nomUser,
  nomFichier,
  module,
  typeFichier,
  UserId
) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return pdf.updateOne(
          { _id: BookId },
          {
            titre: titre,
            description: description,
            niveau: niveau,
            specialite: specialite,
            categorie: categorie,
            type: type,
            date: date,
            nomUser: nomUser,
            nomFichier: nomFichier,
            module: module,
            typeFichier: typeFichier,
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
//partie recommandation
exports.getAllDocumentsForRecommandation = (id) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(url, function (err, db) {
      if (err) throw err;
      //Return only the "name" field in the result:
      db.collection("pdfs")
        .find({}, { projection: { _id: 1, description: 1 } })
        .toArray(function (err, result) {
          if (err) throw err;
          //console.log(result);
          const recommender = new ContentBasedRecommender({
            minScore: 0.1,
            maxSimilarDocuments: 100,
          });
          //prepare documents data
          var documents = [{ id: "", content: "" }];
          for (let x = 0; x < result.length; x++) {
            documents.push({
              id: result[x]._id,
              content: result[x].description,
            });
          }
          //start training
          recommender.train(documents);
          // get top 10 similar items to document id
          var similarDocuments = recommender.getSimilarDocuments(id, 0, 3);
          console.log("=====================");
          // resolve top 10 similar items to document id
          var array = [];
          db.collection("pdfs")
            .find(
              { _id: similarDocuments[0].id },
              { projection: { _id: 1, description: 1, niveau: 1, titre: 1 } }
            )
            .toArray(function (err, result) {
              if (err) throw err;
              array = array.concat(result);
            });
          db.collection("pdfs")
            .find(
              { _id: similarDocuments[1].id },
              { projection: { _id: 1, description: 1, niveau: 1, titre: 1 } }
            )
            .toArray(function (err, result) {
              if (err) throw err;
              array = array.concat(result);
            });
          db.collection("pdfs")
            .find(
              { _id: similarDocuments[2].id },
              { projection: { _id: 1, description: 1, niveau: 1, titre: 1 } }
            )
            .toArray(function (err, result) {
              if (err) throw err;
              array = array.concat(result);
              // console.log(array);
              resolve(array);
            });
        });
    });
  });
};
