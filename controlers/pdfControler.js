const pdfModel = require("../models/pdfModel");
const profileModel = require("../models/profile");
const AuthModel = require("../models/authentificationModel");
const evaluationMoel = require("../models//evaluations");
const commentModel = require("../models/comments");
//----------------------------------------------------------------
//L3 Informatique
// ****************partie Cours*************
exports.PdfCoursesL3InformatiuqeAlgo = (req, res, next) => {
  pdfModel.getPdfCoursesL3InformatiuqeAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL3InfoAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3InformatiuqeMath = (req, res, next) => {
  pdfModel.getPdfCoursesL3InformatiuqeMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL3InfoMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfCoursesL3InformatiuqeMemLicence = (req, res, next) => {
  pdfModel.getPdfCoursesL3InformatiuqeMemLicence().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL3InfoMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************partie TD*************
exports.PdfTDL3infoAlgo = (req, res, next) => {
  pdfModel.getPdfTDL3infoAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL3infoAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************image*************
exports.PdfimageL3infoAlgo = (req, res, next) => {
  pdfModel.getPdfimageL3infoAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL3InfoAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3infoMath = (req, res, next) => {
  pdfModel.getPdfimageL3infoMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL3InfoMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3infoMemLic = (req, res, next) => {
  pdfModel.getPdfimageL3infoMemLic().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL3InfoMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************partie TP*************
exports.PdfTPL3infoAlgo = (req, res, next) => {
  pdfModel.getPdfTPL3infoAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL3infoAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3infoMath = (req, res, next) => {
  pdfModel.getPdfTPL3infoMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL3infoMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************partie TP*************
exports.PdfExemensL3infoAlgo = (req, res, next) => {
  pdfModel.getPdfExemensL3infoAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL3InfoAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL3infoMath = (req, res, next) => {
  pdfModel.getPdfExemensL3infoMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL3InfoMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************render*************
exports.getL3informatique = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3informatique", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3InfoalgoCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3InfoalgoCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3InfoMemLicCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3InfoMemLicCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3InfoMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3InfoMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};

//----------------------------------------------------------------
//L3 Mathematique
// ****************partie Cours*************
exports.PdfCoursesL3MathematiqueAlgo = (req, res, next) => {
  pdfModel.getPdfCoursesL3MathematiqueAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL3MathAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfCoursesL3MathematiqueMath = (req, res, next) => {
  pdfModel.getPdfCoursesL3MathematiqueMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL3MathMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfCoursesL3MathematiqueMemLicence = (req, res, next) => {
  pdfModel.getPdfCoursesL3MathematiqueMemLicence().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL3MathMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************partie TD*************
exports.PdfTDL3mathAlgo = (req, res, next) => {
  pdfModel.getPdfTDL3mathAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL3mathAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL3infomath = (req, res, next) => {
  pdfModel.getPdfTDL3infomath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL3infomath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfTDL3mathmath = (req, res, next) => {
  pdfModel.getPdfTDL3mathmath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL3mathmath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************partie TP*************
exports.PdfTPL3mathAlgo = (req, res, next) => {
  pdfModel.getPdfTPL3mathAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL3mathAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3mathmath = (req, res, next) => {
  pdfModel.getPdfTPL3mathmath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL3mathmath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// *************partie Exemens******************
exports.PdfExemensL3mathAlgo = (req, res, next) => {
  pdfModel.getPdfExemensL3mathAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL3MathAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL3mathmath = (req, res, next) => {
  pdfModel.getPdfExemensL3mathmath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL3MathMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************image*************
exports.PdfimageL3mathAlgo = (req, res, next) => {
  pdfModel.getPdfimageL3mathAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL3MathAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3matmath = (req, res, next) => {
  pdfModel.getPdfimageL3matmath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL3MathMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3matMemLic = (req, res, next) => {
  pdfModel.getPdfimageL3matMemLic().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL3MathMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************render*************
exports.getL3Mathematique = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3Mathematique", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3MathAlgoCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3MathAlgoCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3MathMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3MathMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3MathMemLicCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3MathMemLicCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//----------------------------------------------------------------
//L2 Informatique
// **************** partie Cours************
exports.PdfCoursesL2InformatiuqeAlgo = (req, res, next) => {
  pdfModel.getPdfCoursesL2InformatiuqeAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL2InfoAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfCoursesL2InformatiuqeMath = (req, res, next) => {
  pdfModel.getPdfCoursesL2InformatiuqeMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL2InfoMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2InformatiuqeEnglish = (req, res, next) => {
  pdfModel.getPdfCoursesL2InformatiuqeEnglish().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL2InfoEnglish", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

// **************** partie TD************
exports.PdfTDL2infoAlgo = (req, res, next) => {
  pdfModel.getPdfTDL2infoAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2infoAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2infoMath = (req, res, next) => {
  pdfModel.getPdfTDL2infoMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2infoMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TP************
exports.PdfTPL2infoAlgo = (req, res, next) => {
  pdfModel.getPdfTPL2infoAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2infoAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2infoMath = (req, res, next) => {
  pdfModel.getPdfTPL2infoMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2infoMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie Exemens************
exports.PdfExemensL2infoAlgo = (req, res, next) => {
  pdfModel.getPdfExemensL2infoAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2InfoAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2infoMath = (req, res, next) => {
  pdfModel.getPdfExemensL2infoMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2InfoMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2infoEnglish = (req, res, next) => {
  pdfModel.getPdfExemensL2infoEnglish().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2InfoEnglish", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************image*************
exports.PdfimageL2infoAlgo = (req, res, next) => {
  pdfModel.getPdfimageL2infoAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2InfoAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2infoMath = (req, res, next) => {
  pdfModel.getPdfimageL2infoMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2InfoMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2infoEnglish = (req, res, next) => {
  pdfModel.getPdfimageL2infoEnglish().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2InfoEnglish", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************render*************
exports.getL2informatique = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2informatique", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2InfoalgoCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2InfoalgoCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2InfoMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2InfoMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2InfoEnglishCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2InfoEnglishCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//----------------------------------------------------------------
//L2 mathematique
// **************** partie Cours************
exports.PdfCoursesL2MathematiqueMath = (req, res, next) => {
  pdfModel.getPdfCoursesL2mathematiqueMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL2MathMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfCoursesL2MathematiqueAlgo = (req, res, next) => {
  pdfModel.getPdfCoursesL2MathematiqueAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL2MathAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TD************

exports.PdfTDL2mathAlgo = (req, res, next) => {
  pdfModel.getPdfTDL2mathAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2mathAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfTDL2mathmath = (req, res, next) => {
  pdfModel.getPdfTDL2mathmath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2mathmath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TP***********
exports.PdfTPL2mathAlgo = (req, res, next) => {
  pdfModel.getPdfTPL2mathAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2mathAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2mathmath = (req, res, next) => {
  pdfModel.getPdfTPL2mathmath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2MathMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie Exemens***********
exports.PdfExemensL2mathAlgo = (req, res, next) => {
  pdfModel.getPdfExemensL2mathAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2MathAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2mathMath = (req, res, next) => {
  pdfModel.getPdfExemensL2mathMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2MathMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************image*************
exports.PdfimageL2mathAlgo = (req, res, next) => {
  pdfModel.getPdfimageL2mathAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2MathAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2mathMath = (req, res, next) => {
  pdfModel.getPdfimageL2mathMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2MathMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************render*************
exports.getL2Mathematique = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2Mathematique", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2MathMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2MathMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2MathAlgoCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2MathAlgoCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};

//----------------------------------------------------------------
//L2 Mécanique
// **************** partie Cours************
exports.PdfCoursesL2MecaniqueMath = (req, res, next) => {
  pdfModel.getPdfCoursesL2MecaniqueMath().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2MecaniqueMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2MecaniqueAlgo = (req, res, next) => {
  pdfModel.getPdfCoursesL2MecaniqueAlgo().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2MecaniqueAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2MecaniquePhysique = (req, res, next) => {
  pdfModel.getPdfCoursesL2MecaniquePhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2MecaniquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2MecaniqueTechnologie = (req, res, next) => {
  pdfModel.getPdfCoursesL2Mecaniquetechnologie().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2MecaniqueTechno", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TD************

exports.PdfTDL2MecaniqueMath = (req, res, next) => {
  pdfModel.getPdfTDL2MecaniqueMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2MecaniqueMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfTDL2MecaniqueAlgo = (req, res, next) => {
  pdfModel.getPdfTDL2MecaniqueAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2MecaniqueAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfTDL2Mecaniquephysique = (req, res, next) => {
  pdfModel.getPdfTDL2Mecaniquephysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2MecaniquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfTDL2MecaniqueTechnologie = (req, res, next) => {
  pdfModel.getPdfTDL2MecaniqueTechnologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2MecaniqueTechnologie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TP************
exports.PdfTPL2MecaniqueMath = (req, res, next) => {
  pdfModel.getPdfTPL2MecaniqueMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2MecaniqueMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2MecaniqueAlgo = (req, res, next) => {
  pdfModel.getPdfTPL2MecaniqueAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2MecaniqueAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2MecaniquePhysique = (req, res, next) => {
  pdfModel.getPdfTPL2MecaniquePhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2MecaniquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2MecaniqueTechnologie = (req, res, next) => {
  pdfModel.getPdfTPL2MecaniqueTechnologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2MecaniqueTechnologie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie Exemens************
exports.PdfExemensL2MecaniqueMath = (req, res, next) => {
  pdfModel.getPdfExemensL2MecaniqueMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2MecaniqueMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2MecaniqueAlgo = (req, res, next) => {
  pdfModel.getPdfExemensL2MecaniqueAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2MecaniqueAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2MecaniquePhysique = (req, res, next) => {
  pdfModel.getPdfExemensL2MecaniquePhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2MecaniquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2MecaniqueTechnologie = (req, res, next) => {
  pdfModel.getPdfExemensL2MecaniqueTechnologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2MecaniqueTechno", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************image*************
exports.PdfimageL2MecaniqueMath = (req, res, next) => {
  pdfModel.getPdfimageL2MecaniqueMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2MecaniqueMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2MecaniqueAlgo = (req, res, next) => {
  pdfModel.getPdfimageL2MecaniqueAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2MecaniqueAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfimageL2MecaniquePhysique = (req, res, next) => {
  pdfModel.getPdfimageL2MecaniquePhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2MecaniquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2MecaniqueTechnologie = (req, res, next) => {
  pdfModel.getPdfimageL2MecaniqueTechnologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2MecaniqueTechnologie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************render*************
exports.getL2Mecanique = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2Mecanique", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2MecaniqueMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2MecaniqueMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2MecaniqueAlgoCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2MecaniqueAlgoCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2MecaniquePhysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2MecaniquePhysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2MecaniqueTechnologieCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2MecaniqueTechnoCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
// ----------------------------------------------------------------------
//L2 génie Civil
// **************** partie cours************
exports.PdfCoursesL2GenieCivilMath = (req, res, next) => {
  pdfModel.getPdfCoursesL2GenieCivilMath().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2GenieCivilMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2GenieCivilGC = (req, res, next) => {
  pdfModel.getPdfCoursesL2GenieCivilGC().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2GenieCivilGC", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2GenieCivilPhysique = (req, res, next) => {
  pdfModel.getPdfCoursesL2GenieCivilPhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2GenieCivilPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2GenieCivilTechno = (req, res, next) => {
  pdfModel.getPdfCoursesL2GenieCivilTechno().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2GenieCivilTechno", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TD************
exports.PdfTDL2GenieCivilMath = (req, res, next) => {
  pdfModel.getPdfTDL2GenieCivilMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2GenieCivilMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2GenieCivilGC = (req, res, next) => {
  pdfModel.getPdfTDL2GenieCivilGC().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2GenieCivilGC", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2GenieCivilPhysique = (req, res, next) => {
  pdfModel.getPdfTDL2GenieCivilPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2GenieCivilPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2GenieCivilTechnologie = (req, res, next) => {
  pdfModel.getPdfTDL2GenieCivilTechnologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2GenieCivilTechnologie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TP************
exports.PdfTPL2GenieCivilMath = (req, res, next) => {
  pdfModel.getPdfTPL2GenieCivilMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2GenieCivilMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2GenieCivilGC = (req, res, next) => {
  pdfModel.getPdfTPL2GenieCivilGC().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2GenieCivilGC", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2GenieCivilPhysique = (req, res, next) => {
  pdfModel.getPdfTPL2GenieCivilPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2GenieCivilPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2GenieCivilTechnologie = (req, res, next) => {
  pdfModel.getPdfTPL2GenieCivilTechnologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2GenieCivilTechnologie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie Exemens************
exports.PdfExemensL2GenieCivilMath = (req, res, next) => {
  pdfModel.getPdfExemensL2GenieCivilMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2GenieCivilMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2GenieCivilGC = (req, res, next) => {
  pdfModel.getPdfExemensL2GenieCivilGC().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2GenieCivilGC", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2GenieCivilPhysique = (req, res, next) => {
  pdfModel.getPdfExemensL2GenieCivilPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2GenieCivilPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2GenieCivilTechnologie = (req, res, next) => {
  pdfModel.getPdfExemensL2GenieCivilTechnologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2GenieCivilTechno", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** image ************
exports.PdfimageL2GenieCivilMath = (req, res, next) => {
  pdfModel.getPdfimageL2GenieCivilMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2GenieCivilMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2GenieCivilGC = (req, res, next) => {
  pdfModel.getPdfimageL2GenieCivilGC().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2GenieCivilGC", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2GenieCivilPhysique = (req, res, next) => {
  pdfModel.getPdfimageL2GenieCivilPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2GenieCivilPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2GenieCivilTechnologie = (req, res, next) => {
  pdfModel.getPdfimageL2GenieCivilTechnologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2GenieCivilTechnologie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************render*************
exports.getL2GénieCivil = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2GénieCivil", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2GenieCivilMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2GenieCivilMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2GenieCivilGCCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2GenieCivilGCCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2GenieCivilTechnoCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2GenieCivilTehnoCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2GenieCivilPhysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2GenieCivilPhysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//----------------------------------------------------------------
//L2 Génie des procédés
// **************** partie cours************
exports.PdfCoursesL2GPMath = (req, res, next) => {
  pdfModel.getPdfCoursesL2GPMath().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2GPMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2GPChimie = (req, res, next) => {
  pdfModel.getPdfCoursesL2GPChimie().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2GPChimie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2GPPhysique = (req, res, next) => {
  pdfModel.getPdfCoursesL2GPPhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2GPPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfCoursesL2GPDesign = (req, res, next) => {
  pdfModel.getPdfCoursesL2GPDesign().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2GPDesign", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2GPreglemnatation = (req, res, next) => {
  pdfModel.getPdfCoursesL2GPreglemnatation().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL2GPReglementation", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TD************
exports.PdfTDL2GPMath = (req, res, next) => {
  pdfModel.getPdfTDL2GPMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2GPMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2GPPhysique = (req, res, next) => {
  pdfModel.getPdfTDL2GPPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2GPPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2GPChimie = (req, res, next) => {
  pdfModel.getPdfTDL2GPChimie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2GPChimie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2GPDesign = (req, res, next) => {
  pdfModel.getPdfTDL2GPDesign().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2GPDesign", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2GPReglemenatation = (req, res, next) => {
  pdfModel.getPdfTDL2GPReglemenatation().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2GPReglementation", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// *************TP******************
exports.PdfTPL2GPMath = (req, res, next) => {
  pdfModel.getPdfTPL2GPMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2GPMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2GPPhysique = (req, res, next) => {
  pdfModel.getPdfTPL2GPPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2GPPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2GPChimie = (req, res, next) => {
  pdfModel.getPdfTPL2GPChimie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2GPChimie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2GPDesign = (req, res, next) => {
  pdfModel.getPdfTPL2GPDesign().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2GPDesign", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2GPReglementation = (req, res, next) => {
  pdfModel.getPdfTPL2GPReglementation().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2GPReglementation", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************Exemens************
exports.PdfExemensL2GPMath = (req, res, next) => {
  pdfModel.getPdfExemensL2GPMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2GPMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2GPChimie = (req, res, next) => {
  pdfModel.getPdfExemensL2GPChimie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2GPChimie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2GPPhysique = (req, res, next) => {
  pdfModel.getPdfExemensL2GPPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2GPPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2GPDesign = (req, res, next) => {
  pdfModel.getPdfExemensL2GPDesign().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2GPDesign", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2GPReglemenatation = (req, res, next) => {
  pdfModel.getPdfExemensL2GPReglemenatation().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2GPReglementation", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** image ************
exports.PdfimageL2GPMath = (req, res, next) => {
  pdfModel.getPdfimageL2GPMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2GPMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2GPChimie = (req, res, next) => {
  pdfModel.getPdfimageL2GPChimie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2GPChimie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2GPPhysique = (req, res, next) => {
  pdfModel.getPdfimageL2GPPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2GPPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2GPDesign = (req, res, next) => {
  pdfModel.getPdfimageL2GPDesign().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2GPDesign", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2GPReglemenatation = (req, res, next) => {
  pdfModel.getPdfimageL2GPReglemenatation().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2GPReglementation", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** render************
exports.getL2GenieDesProcedes = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2GenieProcedes", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2GenieProcedesMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2GenieProcedesMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2GenieProcedesPhysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2GenieProcedesphysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2GenieProcedesChimieCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2GenieProcedesChimieCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2GenieProcedesdesignCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2GenieProcedesDesignCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2GenieProcedesReglemantationCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2GenieProcedesReglemeantationCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//----------------------------------------------------------------
//L2 Telecommunication
// **************** partie cours************
exports.PdfCoursesL2TelecomMath = (req, res, next) => {
  pdfModel.getPdfCoursesL2TelecomMath().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL2TelecomMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2TelecomPhysique = (req, res, next) => {
  pdfModel.getPdfCoursesL2TelecomPhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL2TelecomPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2TelecomTelecom = (req, res, next) => {
  pdfModel.getPdfCoursesL2TelecomTelecom().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL2TelecomTelecom", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2TelecomElectronique = (req, res, next) => {
  pdfModel.getPdfCoursesL2TelecomElectronique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL2TelecomElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TD************
exports.PdfTDL2TelecomMath = (req, res, next) => {
  pdfModel.getPdfTDL2TelecomMath().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL2TelecomMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2TelecomPhysique = (req, res, next) => {
  pdfModel.getPdfTDL2TelecomPhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL2TelecomPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2TelecomTelecom = (req, res, next) => {
  pdfModel.getPdfTDL2TelecomTelecom().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL2TelecomTelecom", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2TelecomElectronique = (req, res, next) => {
  pdfModel.getPdfTDL2TelecomElectronique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL2TelecomElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TP************
exports.PdfTPL2TelecomMath = (req, res, next) => {
  pdfModel.getPdfTPL2TelecomMath().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL2TelecomMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2TelecomPhysique = (req, res, next) => {
  pdfModel.getPdfTPL2TelecomPhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL2TelecomPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2TelecomTelecom = (req, res, next) => {
  pdfModel.getPdfTPL2TelecomTelecom().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL2TelecomTelecom", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2TelecomElectronique = (req, res, next) => {
  pdfModel.getPdfTPL2TelecomElectronique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL2TelecomElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************partie Exemens************
exports.PdfExemensL2TelecomMath = (req, res, next) => {
  pdfModel.getPdfExemensL2TelecomMath().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL2TelecomMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2TelecomPhysique = (req, res, next) => {
  pdfModel.getPdfExemensL2TelecomPhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL2TelecomPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2TelecomTelecom = (req, res, next) => {
  pdfModel.getPdfExemensL2TelecomTelecom().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL2TelecomTelecom", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL2TelecomElectronique = (req, res, next) => {
  pdfModel.getPdfExemensL2TelecomElectronique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL2TelecomElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** image ************
exports.PdfimageL2TelecomMath = (req, res, next) => {
  pdfModel.getPdfimageL2TelecomMath().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL2TelecomMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2TelecomPhysique = (req, res, next) => {
  pdfModel.getPdfimageL2TelecomPhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL2TelecomPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2TelecomTelecom = (req, res, next) => {
  pdfModel.getPdfimageL2TelecomTelecom().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL2TelecomTelecom", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2TelecomElectronique = (req, res, next) => {
  pdfModel.getPdfimageL2TelecomElectronique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL2TelecomElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** render************
exports.getL2Telecommunication = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2Telecommunication", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2TelecomMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2TelecomMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2TelecomPhysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2TelecomPhysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2TelecomTelecomCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2TelecomTelecomCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2TelecomElectroniqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2TelecomElectroniqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//----------------------------------------------------------------
//L2 Authomatique
// *************partie cours******************
exports.PdfCoursesL2AuthomatiqueMath = (req, res, next) => {
  pdfModel.getPdfCoursesL2AuthomatiqueMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL2AuthomatiqueMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2AuthomatiquePhysique = (req, res, next) => {
  pdfModel.getPdfCoursesL2AuthomatiquePhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL2AuthomatiquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2AuthomatiqueNetwork = (req, res, next) => {
  pdfModel.getPdfCoursesL2AuthomatiqueNetwork().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL2AuthomatiqueNetwork", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL2AuthomatiqueElectronique = (req, res, next) => {
  pdfModel.getPdfCoursesL2AuthomatiqueElectronique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL2AuthomatiqueElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TD************
exports.PdfTDL2AuthomatiqueMath = (req, res, next) => {
  pdfModel.getPdfTDL2AuthomatiqueMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2AuthomatiqueMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2AuthomatiquePhysique = (req, res, next) => {
  pdfModel.getPdfTDL2AuthomatiquePhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2AuthomatiquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2AuthomatiquNetwork = (req, res, next) => {
  pdfModel.getPdfTDL2AuthomatiquNetwork().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2AuthomatiqueNetwork", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL2AuthomatiquElectronique = (req, res, next) => {
  pdfModel.getPdfTDL2AuthomatiquElectronique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL2AuthomatiqueElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************partie TP************
exports.PdfTPL2AuthomatiqueMath = (req, res, next) => {
  pdfModel.getPdfTPL2AuthomatiqueMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2AuthomatiqueMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2AuthomatiquePhysique = (req, res, next) => {
  pdfModel.getPdfTPL2AuthomatiquePhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2AuthomatiquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2AuthomatiquNetwork = (req, res, next) => {
  pdfModel.getPdfTPL2AuthomatiquNetwork().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2AuthomatiqueNetwork", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL2AuthomatiquElectronique = (req, res, next) => {
  pdfModel.getPdfTPL2AuthomatiquElectronique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL2AuthomatiqueElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************partie Exemens************
exports.PdfExemsL2AuthomatiqueMath = (req, res, next) => {
  pdfModel.getPdfExemsL2AuthomatiqueMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2AuthomatiqueMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemsL2AuthomatiquePhysique = (req, res, next) => {
  pdfModel.getPdfExemsL2AuthomatiquePhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2AuthomatiquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemsL2AuthomatiquNetwork = (req, res, next) => {
  pdfModel.getPdfExemsL2AuthomatiquNetwork().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2AuthomatiqueNetwork", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemsL2AuthomatiquElectronique = (req, res, next) => {
  pdfModel.getPdfExemsL2AuthomatiquElectronique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL2AuthomatiqueElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** image ************
exports.PdfimageL2AuthomatiqueMath = (req, res, next) => {
  pdfModel.getPdfimageL2AuthomatiqueMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2AuthomatiqueMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2AuthomatiquePhysique = (req, res, next) => {
  pdfModel.getPdfimageL2AuthomatiquePhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2AuthomatiquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2AuthomatiquNetwork = (req, res, next) => {
  pdfModel.getPdfimageL2AuthomatiquNetwork().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2AuthomatiqueNetwork", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL2AuthomatiquElectronique = (req, res, next) => {
  pdfModel.getPdfimageL2AuthomatiquElectronique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL2AuthomatiqueElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** render************
exports.getL2Authomatique = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2Authomatique", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2AuthomatiqueMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2AuthomatiqueMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};

exports.L2AuthomatiquePhysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2AuthomatiquePhysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2AuthomatiqueNetworkCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2AuthomatiqueNetworkCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L2AuthomatiqueElectroniqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L2AuthomatiqueElectroniqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//L2 Mécanique
// **************** partie Cours************
exports.PdfCoursesL2Mecaniquehydro = (req, res, next) => {
  pdfModel.getPdfCoursesL2Mecaniquehydro().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL3MecaniqueHydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3MecaniqueAlgo = (req, res, next) => {
  pdfModel.getPdfCoursesL3MecaniqueAlgo().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL3MecaniqueAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3MecaniquePhysique = (req, res, next) => {
  pdfModel.getPdfCoursesL3MecaniquePhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL3MecaniquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3MecaniqueMemLic = (req, res, next) => {
  pdfModel.getPdfCoursesL3MecaniqueMemLic().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL3MecaniqueMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// // **************** partie TD************

exports.PdfTDL2Mecaniquehydro = (req, res, next) => {
  pdfModel.getPdfTDL2Mecaniquehydro().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL3MecaniqueHydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL3MecaniqueAlgo = (req, res, next) => {
  pdfModel.getPdfTDL3MecaniqueAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL3MecaniqueAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL3Mecaniquephysique = (req, res, next) => {
  pdfModel.getPdfTDL3Mecaniquephysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL3MecaniquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TP************
exports.PdfTPL3Mecaniquehydro = (req, res, next) => {
  pdfModel.getPdfTPL3Mecaniquehydro().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL3MecaniqueHydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3MecaniqueAlgo = (req, res, next) => {
  pdfModel.getPdfTPL3MecaniqueAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL3MecaniqueAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3MecaniquePhysique = (req, res, next) => {
  pdfModel.getPdfTPL3MecaniquePhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL3MecaniquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// // **************** partie Exemens************
exports.PdfExemensL3Mecaniquehydro = (req, res, next) => {
  pdfModel.getPdfExemensL3Mecaniquehydro().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL3Mecaniquehydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL3MecaniqueAlgo = (req, res, next) => {
  pdfModel.getPdfExemensL3MecaniqueAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL3MecaniqueAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL3MecaniquePhysique = (req, res, next) => {
  pdfModel.getPdfExemensL3MecaniquePhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL3MecaniquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** image ************
exports.PdfimageL3Mecaniquehydro = (req, res, next) => {
  pdfModel.getPdfimageL3Mecaniquehydro().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL3MecaniuqueHydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3MecaniqueAlgo = (req, res, next) => {
  pdfModel.getPdfimageL3MecaniqueAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL3MecaniqueAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3MecaniquePhysique = (req, res, next) => {
  pdfModel.getPdfimageL3MecaniquePhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL3MecaniuquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3MecaniqueMecLic = (req, res, next) => {
  pdfModel.getPdfimageL3MecaniqueMecLic().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL3MecaniqueMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************render*************
exports.getL3Mecanique = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3Mécanique", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3MecaniquehydroCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3MecaniquehydroCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3MecaniqueAlgoCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3MecaniqueAlgoCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3MecaniquePhysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3MecaniquePhysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3MecaniqueMemoireLicCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3MecaniqueMemoireLicCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//----------------------------------------------------------------
//L3 Telecommunication
// **************** partie cours************
exports.PdfCoursesL3TelecomAlgo = (req, res, next) => {
  pdfModel.getPdfCoursesL3TelecomAlgo().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3TelecomAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3TelecomPhysique = (req, res, next) => {
  pdfModel.getPdfCoursesL3TelecomPhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3TelecomPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3NetworkTelecom = (req, res, next) => {
  pdfModel.getPdfCoursesL3NetworkTelecom().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3TelecomNetwork", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3TelecomElectronique = (req, res, next) => {
  pdfModel.getPdfCoursesL3TelecomElectronique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3TelecomElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3TelecomMemLic = (req, res, next) => {
  pdfModel.getPdfCoursesL3TelecomMemLic().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3TelecomMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// // **************** partie TD************
exports.PdfTDL3TelecomAlgo = (req, res, next) => {
  pdfModel.getPdfTDL3TelecomAlgo().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3TelecomAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL3TelecomPhysique = (req, res, next) => {
  pdfModel.getPdfTDL3TelecomPhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3TelecomPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL3TelecomNetwork = (req, res, next) => {
  pdfModel.getPdfTDL3TelecomNetwork().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3TelecomNetwork", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL3TelecomElectronique = (req, res, next) => {
  pdfModel.getPdfTDL3TelecomElectronique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3TelecomElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// // **************** partie TP************
exports.PdfTPL3TelecomAlgo = (req, res, next) => {
  pdfModel.getPdfTPL3TelecomAlgo().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3TelecomAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3TelecomPhysique = (req, res, next) => {
  pdfModel.getPdfTPL3TelecomPhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3TelecomPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3TelecomNetwork = (req, res, next) => {
  pdfModel.getPdfTPL3TelecomNetwork().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3TelecomNetwork", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3TelecomElectronique = (req, res, next) => {
  pdfModel.getPdfTPL3TelecomElectronique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3TelecomElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// // ****************partie Exemens************
exports.PdfExemensL3TelecomAlgo = (req, res, next) => {
  pdfModel.getPdfExemensL3TelecomAlgo().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3TelecomAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL3TelecomPhysique = (req, res, next) => {
  pdfModel.getPdfExemensL3TelecomPhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3TelecomPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL3TelecomNetwork = (req, res, next) => {
  pdfModel.getPdfExemensL3TelecomNetwork().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3TelecomNetwork", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL3TelecomElectronique = (req, res, next) => {
  pdfModel.getPdfExemensL3TelecomElectronique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3TelecomElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** render************
exports.getL3Telecommunication = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3Telecommunication", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3TelecomAlgoCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3TelecomAlgoCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3TelecomPhysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3TelecomPhysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3TelecomElectroCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3TelecomElectroniqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3TelecomNetworkCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3TelecomNetworkCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3TelecomMemLicCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3TelecomMemLicCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
// **************** image ************
exports.PdfimageL3TelecomAlgo = (req, res, next) => {
  pdfModel.getPdfimageL3TelecomAlgo().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3TelecomAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3TelecomPhysique = (req, res, next) => {
  pdfModel.getPdfimageL3TelecomPhysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3TelecomPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3TelecomNetwork = (req, res, next) => {
  pdfModel.getPdfimageL3TelecomNetwork().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3TelecomNetwork", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3TelecomElectronique = (req, res, next) => {
  pdfModel.getPdfimageL3TelecomElectronique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3TelecomElectronique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
//------------------------------------------------------------
//L3 génie Civil
// **************** partie cours************
exports.PdfCoursesL3GCHydro = (req, res, next) => {
  pdfModel.getPdfCoursesL3GCHydro().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL3GChydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3GCphysique = (req, res, next) => {
  pdfModel.getPdfCoursesL3GCphysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL3GCPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3GCgenieCivil = (req, res, next) => {
  pdfModel.getPdfCoursesL3GCgenieCivil().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL3GCgenieCivil", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3GCMemLic = (req, res, next) => {
  pdfModel.getPdfCoursesL3GCMemLic().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursesL3GCMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TD************
exports.PdfTDL3GCHydro = (req, res, next) => {
  pdfModel.getPdfTDL3GCHydro().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3GChydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL3GCphysique = (req, res, next) => {
  pdfModel.getPdfTDL3GCphysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3GCphysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL3GCgenieCivil = (req, res, next) => {
  pdfModel.getPdfTDL3GCgenieCivil().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3GCgenieCivil", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TP************
exports.PdfTPL3GCHydro = (req, res, next) => {
  pdfModel.getPdfTPL3GCHydro().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3GChydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3GCphysique = (req, res, next) => {
  pdfModel.getPdfTPL3GCphysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3GCphysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3GCgenieCivil = (req, res, next) => {
  pdfModel.getPdfTPL3GCgenieCivil().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3GCgenieCivil", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie Exemens************
exports.PdfExemensL3GCHydro = (req, res, next) => {
  pdfModel.getPdfExemensL3GCHydro().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3GChydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExmensL3GCphysique = (req, res, next) => {
  pdfModel.getPdfExmensL3GCphysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3GCphysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExmensL3GCgenieCivil = (req, res, next) => {
  pdfModel.getPdfExmensL3GCgenieCivil().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3GCgenieCivil", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** image ************
exports.PdfimageL3GCHydro = (req, res, next) => {
  pdfModel.getPdfimageL3GCHydro().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3GChydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3GCphysique = (req, res, next) => {
  pdfModel.getPdfimageL3GCphysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3GCPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3GCgenieCivil = (req, res, next) => {
  pdfModel.getPdfimageL3GCgenieCivil().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3GCgenieCivil", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3GCMemLic = (req, res, next) => {
  pdfModel.getPdfimageL3GCMemLic().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3GCMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** render************
exports.getL3genieCivil = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3genieCivil", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.getL3GChydroliqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3GChydroCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.getL3GCphysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3GCPhysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.getL3GCgenieCivilCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3GCgénieCivilCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.getL3GCMemLicCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3GCMemLicCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//------------------------------------------------------------
//L3 génie ds procédés
// *************partie cours******************
exports.PdfCoursesL3GPphysique = (req, res, next) => {
  pdfModel.getPdfCoursesL3GPphysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3GPPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3GPpharmacie = (req, res, next) => {
  pdfModel.getPdfCoursesL3GPpharmacie().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3GPPharmacie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3GPAgronomie = (req, res, next) => {
  pdfModel.getPdfCoursesL3GPAgronomie().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3GPAgronomie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3GPMemLic = (req, res, next) => {
  pdfModel.getPdfCoursesL3GPMemLic().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3GPMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// *************partie TD******************
exports.PdfTDL3GPphysique = (req, res, next) => {
  pdfModel.getPdfTDL3GPphysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3GPPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL3GPAgronomie = (req, res, next) => {
  pdfModel.getPdfTDL3GPAgronomie().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3GPAgronomie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL3GPPharmacie = (req, res, next) => {
  pdfModel.getPdfTDL3GPPharmacie().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3GPPharmacie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// *************partie TP******************
exports.PdfTPL3GPphysique = (req, res, next) => {
  pdfModel.getPdfTPL3GPphysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3GPPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3GPAgronomie = (req, res, next) => {
  pdfModel.getPdfTPL3GPAgronomie().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3GPAgronomie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3GPPharmacie = (req, res, next) => {
  pdfModel.getPdfTPL3GPPharmacie().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3GPPharmacie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// *************Exemens******************
exports.PdfExemensL3GPphysique = (req, res, next) => {
  pdfModel.getPdfExemensL3GPphysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3GPphysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL3GPAgronomie = (req, res, next) => {
  pdfModel.getPdfExemensL3GPAgronomie().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3GPAgronomie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL3GPPharmacie = (req, res, next) => {
  pdfModel.getPdfExemensL3GPPharmacie().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3GPPharmacie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** image ************
exports.PdfimageL3GPphysique = (req, res, next) => {
  pdfModel.getPdfimageL3GPphysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3GPPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3GPAgronomie = (req, res, next) => {
  pdfModel.getPdfimageL3GPAgronomie().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3GPAgronomie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3GPPharmacie = (req, res, next) => {
  pdfModel.getPdfimageL3GPPharmacie().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3GPPharmacie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3GPMemLic = (req, res, next) => {
  pdfModel.getPdfimageL3GPMemLic().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3GPMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// *************render******************
exports.getL3genieprocedes = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3genieprocedes", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3GPphysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3GPPhysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3GPAgronomieCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3GPAgronomieCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3GPPharmacieCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3GPpharmacieCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3GPMemLicCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3GPMemLicCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//----------------------------------------------------------------
//L3 hydrolique
// **************** partie Cours************
exports.PdfCoursesL3hydroliquehydro = (req, res, next) => {
  pdfModel.getPdfCoursesL3hydroliquehydro().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3hydroliqueHydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3hydroliquephysique = (req, res, next) => {
  pdfModel.getPdfCoursesL3hydroliquephysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3hydroliquephysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3hydroliqueLaw = (req, res, next) => {
  pdfModel.getPdfCoursesL3hydroliqueLaw().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3hydroliqueLaw", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL3hydroliqueMecLic = (req, res, next) => {
  pdfModel.getPdfCoursesL3hydroliqueMecLic().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("CoursL3hydroliqueMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TD************
exports.PdfTDL3hydroliquehydro = (req, res, next) => {
  pdfModel.getPdfTDL3hydroliquehydro().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3hydroliqueHydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL3hydroliquephysique = (req, res, next) => {
  pdfModel.getPdfTDL3hydroliquephysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3hydroliquephysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL3hydroliqueLaw = (req, res, next) => {
  pdfModel.getPdfTDL3hydroliqueLaw().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TDL3hydroliqueLaw", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TP************
exports.PdfTPL3hydroliquehydro = (req, res, next) => {
  pdfModel.getPdfTPL3hydroliquehydro().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3hydroliqueHydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3hydroliquephysique = (req, res, next) => {
  pdfModel.getPdfTPL3hydroliquephysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3hydroliquephysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL3hydroliqueLaw = (req, res, next) => {
  pdfModel.getPdfTPL3hydroliqueLaw().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("TPL3hydroliqueLaw", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** Exemens ************
exports.PdfExemensL3hydroliquehydro = (req, res, next) => {
  pdfModel.getPdfExemensL3hydroliquehydro().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3hydroliqueHydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL3hydroliquephysique = (req, res, next) => {
  pdfModel.getPdfExemensL3hydroliquephysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3hydroliquephysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL3hydroliqueLaw = (req, res, next) => {
  pdfModel.getPdfExemensL3hydroliqueLaw().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("ExemensL3hydroliqueLaw", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** image ************
exports.PdfimageL3hydroliquehydro = (req, res, next) => {
  pdfModel.getPdfimageL3hydroliquehydro().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3Hydroliquehydro", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3hydroliquephysique = (req, res, next) => {
  pdfModel.getPdfimageL3hydroliquephysique().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3HydroliquePhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3hydroliqueLaw = (req, res, next) => {
  pdfModel.getPdfimageL3hydroliqueLaw().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3HydroliqueLaw", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL3hydroliqueMemLic = (req, res, next) => {
  pdfModel.getPdfimageL3hydroliqueMemLic().then((books) => {
    console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      //console.log(Profil);
      res.render("imageL3HydroliqueMemLic", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// *************render******************
exports.getL3hydrolique = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3Hydrolique", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3hydroliquehydroCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3hydroliquehydroCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3hydroliquephysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3hydroliquephysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3hydroliqueLawCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3hydroliqueLawCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L3hydroliqueMemcLicCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L3hydroliqueMecLicCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//----------------------------------------------------------------
//L1 SM
// **************** partie Cours************
exports.PdfCoursesL1SMAlgo = (req, res, next) => {
  pdfModel.getPdfCoursesL1SMAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1SMAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL1SMMath = (req, res, next) => {
  pdfModel.getPdfCoursesL1SMMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1SMMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL1SMPhysique = (req, res, next) => {
  pdfModel.getPdfCoursesL1SMPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1SMphysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** image ************
exports.PdfimageL1SMOffice = (req, res, next) => {
  pdfModel.getPdfimageL1SMOffice().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1SMoffice", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL1SMAlgo = (req, res, next) => {
  pdfModel.getPdfimageL1SMAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1SMAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL1SMMath = (req, res, next) => {
  pdfModel.getPdfimageL1SMMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1SMMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL1SMPhysique = (req, res, next) => {
  pdfModel.getPdfimageL1SMPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1SMphysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// *************render******************
exports.getL1SM = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1SM", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L1SMAlgoCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1SMAlgoCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L1SMMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1SMMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L1SMPhysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1SMphysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L1SMOfficeCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1SMOfficeCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
// **************** partie TD************
exports.PdfTDL1SMAlgo = (req, res, next) => {
  pdfModel.getPdfTDL1SMAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1SMAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL1SMMath = (req, res, next) => {
  pdfModel.getPdfTDL1SMMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1SMMath", {
        Profil: Profil,
        books: books,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL1SMPhysique = (req, res, next) => {
  pdfModel.getPdfTDL1SMPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1SMPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TP************
exports.PdfTPL1SMAlgo = (req, res, next) => {
  pdfModel.getPdfTPL1SMAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL1SMAlgo", {
        Profil: Profil,
        books: books,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL1SMMath = (req, res, next) => {
  pdfModel.getPdfTPL1SMMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL1SMMath", {
        Profil: Profil,
        books: books,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL1SMPhysique = (req, res, next) => {
  pdfModel.getPdfTPL1SMPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL1SMPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL1SMOffice = (req, res, next) => {
  pdfModel.getPdfTPL1SMOffice().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL1SMOffice", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie Exemens************
exports.PdfExemensL1SMOffice = (req, res, next) => {
  pdfModel.getPdfExemensL1SMOffice().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1SMOffice", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1SMAlgo = (req, res, next) => {
  pdfModel.getPdfExemensL1SMAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1SMAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1SMMath = (req, res, next) => {
  pdfModel.getPdfExemensL1SMMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1SMMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1SMPhysique = (req, res, next) => {
  pdfModel.getPdfExemensL1SMPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1SMphysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
//----------------------------------------------------------------
//L1 ST
// **************** partie Cours************
exports.PdfCoursesL1STAlgo = (req, res, next) => {
  pdfModel.getPdfCoursesL1STAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1STAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfCoursesL1STMath = (req, res, next) => {
  pdfModel.getPdfCoursesL1STMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1STMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfCoursesL1STPhysique = (req, res, next) => {
  pdfModel.getPdfCoursesL1STPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1STPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfCoursesL1STOffice = (req, res, next) => {
  pdfModel.getPdfCoursesL1STOffice().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1STOffice", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TD************
exports.PdfTDL1STAlgo = (req, res, next) => {
  pdfModel.getPdfTDL1STAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1STAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL1STMath = (req, res, next) => {
  pdfModel.getPdfTDL1STMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1STMath", {
        Profil: Profil,
        books: books,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL1STPhysique = (req, res, next) => {
  pdfModel.getPdfTDL1STphysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1STPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

// **************** partie TP************
exports.PdfTPL1STAlgo = (req, res, next) => {
  pdfModel.getPdfTPL1STAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL1STAlgo", {
        Profil: Profil,
        books: books,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfTPL1STMath = (req, res, next) => {
  pdfModel.getPdfTPL1STMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL1STMath", {
        Profil: Profil,
        books: books,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfTPL1STPhysique = (req, res, next) => {
  pdfModel.getPdfTPL1STPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL1STPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie Exemens************
exports.PdfExemensL1STAlgo = (req, res, next) => {
  pdfModel.getPdfExemensL1STAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1STAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1STOffice = (req, res, next) => {
  pdfModel.getPdfExemensL1STOffice().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1STOffice", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1STMath = (req, res, next) => {
  pdfModel.getPdfExemensL1STMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1STMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1STPhysique = (req, res, next) => {
  pdfModel.getPdfExemensL1STPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1STPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************image*************
exports.PdfimageL1STPhysique = (req, res, next) => {
  pdfModel.getPdfimageL1STPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1STPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL1STOffice = (req, res, next) => {
  pdfModel.getPdfimageL1STOffice().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1STOffice", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL1STMath = (req, res, next) => {
  pdfModel.getPdfimageL1STMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1STMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL1STAlgo = (req, res, next) => {
  pdfModel.getPdfimageL1STAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1STAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************render*************
exports.getL1ST = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1ST", { Profil: Profil, verifUser: req.session.UserId });
  });
};
exports.L1STAlgoCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1STAlgoCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};

exports.L1STMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1STMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};

exports.L1STPhysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1STPhysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L1STOfficeCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1STOfficeCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//----------------------------------------------------------------
//L1 MI
// **************** partie Cours************
exports.PdfCoursesL1MIAlgo = (req, res, next) => {
  pdfModel.getPdfCoursesL1MIAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1MIAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL1MIMath = (req, res, next) => {
  pdfModel.getPdfCoursesL1MIMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1MIMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL1MIPhysique = (req, res, next) => {
  pdfModel.getPdfCoursesL1MIPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1MIPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL1MIOffice = (req, res, next) => {
  pdfModel.getPdfCoursesL1MIOffice().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1MIOffice", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TD************
exports.PdfTDL1MIAlgo = (req, res, next) => {
  pdfModel.getPdfTDL1MIAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1MIAlgo", {
        Profil: Profil,
        books: books,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfTDL1MIMath = (req, res, next) => {
  pdfModel.getPdfTDL1MIMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1MIMath", {
        Profil: Profil,
        books: books,
        verifUser: req.session.UserId,
      });
    });
  });
};

exports.PdfTDL1MIphysique = (req, res, next) => {
  pdfModel.getPdfTDL1MIPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1MIPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1MIOffice = (req, res, next) => {
  pdfModel.getPdfExemensL1MIOffice().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1MIOffice", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TP************
exports.PdfTPL1MIAlgo = (req, res, next) => {
  pdfModel.getPdfTPL1MIAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL1MIAlgo", {
        Profil: Profil,
        books: books,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie Exemens************
exports.PdfExemensL1MIAlgo = (req, res, next) => {
  pdfModel.getPdfExemensL1MIAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1MIAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1MIOffice = (req, res, next) => {
  pdfModel.getPdfExemensL1MIOffice().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1MIOffice", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1MIPhysique = (req, res, next) => {
  pdfModel.getPdfExemensL1MIPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1MIPhysique", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1MIMath = (req, res, next) => {
  pdfModel.getPdfExemensL1MIMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1MIMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** image ************
exports.PdfimageL1MIAlgo = (req, res, next) => {
  pdfModel.getPdfimageL1MIAlgo().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1MIAlgo", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL1MIOffice = (req, res, next) => {
  pdfModel.getPdfimageL1MIOffice().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1MIOffice", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL1MIMath = (req, res, next) => {
  pdfModel.getPdfimageL1MIMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1MIMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL1MIPhysique = (req, res, next) => {
  pdfModel.getPdfimageL1MIPhysique().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1MIPhysique", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************render*************
exports.getL1MI = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1MI", { Profil: Profil, verifUser: req.session.UserId });
  });
};
exports.L1MIAlgoCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1MIAlgoCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};

exports.L1MIMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1MIMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};

exports.L1MIPhysiqueCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1MIPhysiqueCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L1MIOfficeCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1MIOfficeCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//----------------------------------------------------------------
//L1 SNV
// **************** partie Cours************

exports.PdfCoursesL1SNVMath = (req, res, next) => {
  pdfModel.getPdfCoursesL1SNVMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1SNVMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL1SNVBiologie = (req, res, next) => {
  pdfModel.getPdfCoursesL1SNVBiologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1SNVBiologie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL1SNVChimie = (req, res, next) => {
  pdfModel.getPdfCoursesL1SNVChimie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1SNVChimie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfCoursesL1SNVGoelogie = (req, res, next) => {
  pdfModel.getPdfCoursesL1SNVGoelogie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("CoursesL1SNVGoelogie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};

// **************** partie TD************
exports.PdfTDL1SNVMath = (req, res, next) => {
  pdfModel.getPdfTDL1SNVMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1SNVMath", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL1SNVBiologie = (req, res, next) => {
  pdfModel.getPdfTDL1SNVBiologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1SNVBiologie", {
        books: books,
        Profil: Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL1SNVChimie = (req, res, next) => {
  pdfModel.getPdfTDL1SNVChimie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1SNVChimie", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTDL1SNVGeologie = (req, res, next) => {
  pdfModel.getPdfTDL1SNVGeologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TDL1SNVGeologie", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** partie TP************
exports.PdfTPL1SNVMath = (req, res, next) => {
  pdfModel.getPdfTPL1SNVMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL1SNVMath", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL1SNVBiologie = (req, res, next) => {
  pdfModel.getPdfTPL1SNVBiologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL1SNVBiologie", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL1SNVChimie = (req, res, next) => {
  pdfModel.getPdfTPL1SNVChimie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL1SNVChimie", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfTPL1SNVGeologie = (req, res, next) => {
  pdfModel.getPdfTPL1SNVGeologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("TPL1SNVGeologie", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************Partie Exemens*************
exports.PdfExemensL1SNVMath = (req, res, next) => {
  pdfModel.getPdfExemensL1SNVMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1SNVMath", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1SNVBiologie = (req, res, next) => {
  pdfModel.getPdfExemensL1SNVBiologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1SNVBiologie", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1SNVChimie = (req, res, next) => {
  pdfModel.getPdfExemensL1SNVChimie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1SNVChimie", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfExemensL1SNVGeologie = (req, res, next) => {
  pdfModel.getPdfExemensL1SNVGeologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("ExemensL1SNVGeologie", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// **************** image ************
exports.PdfimageL1SNVMath = (req, res, next) => {
  pdfModel.getPdfimageL1SNVMath().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1SNVMath", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL1SNVBiologie = (req, res, next) => {
  pdfModel.getPdfimageL1SNVBiologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1SNVBiologie", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL1SNVChimie = (req, res, next) => {
  pdfModel.getPdfimageL1SNVChimie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1SNVChimie", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
exports.PdfimageL1SNVGeologie = (req, res, next) => {
  pdfModel.getPdfimageL1SNVGeologie().then((books) => {
    //console.log(books);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("imageL1SNVGiologie", {
        books: books,
        Profil,
        Profil,
        verifUser: req.session.UserId,
      });
    });
  });
};
// ****************render*************
exports.getL1SNV = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1SNV", { Profil: Profil, verifUser: req.session.UserId });
  });
};

exports.L1SNVMathCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1SNVMathCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};

exports.L1SNVBiologieCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1SNVBiologieCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};

exports.L1SNVGeologieCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1SNVGeologieCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
exports.L1SNVChimieCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("L1SNVChimieCourses", {
      Profil: Profil,
      verifUser: req.session.UserId,
    });
  });
};
//----------------------------------------------------------------
//Upload
exports.getUpload = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("Upload", {
      Profil: Profil,
      verifUser: req.session.UserId,
      Smessage: req.flash("successmessage")[0],
      Emessage: req.flash("Errormessage")[0],
    });
  });
};

exports.PostUploadrData = (req, res, next) => {
  //console.log(req.body);
  //console.log(req.file.filename);
  pdfModel
    .PostDataPdfMOdel(
      req.body.titre,
      req.body.description,
      req.body.niveau,
      req.body.specialite,
      req.body.categorie,
      req.body.type,
      req.body.date,
      req.body.nomUser,
      req.file.filename,
      req.body.module,
      req.body.typeFichier,
      req.session.UserId
    )
    .then((msg) => {
      req.flash("successmessage", msg);
      res.redirect("/Upload");
      console.log(msg);
    })
    .catch((err) => {
      req.flash("Errormessage", err);
      console.log(err);
      res.redirect("/Upload");
    });
};

//----------------------------------------------------------------
//My Courses
exports.getMyCourses = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    pdfModel.getMyCourses(req.session.UserId).then((docs) => {
      //console.log(docs);
      //console.log(req.session.UserId);
      res.render("MyCourses", {
        Profil: Profil,
        verifUser: req.session.UserId,
        Mydocs: docs,
      });
    });
  });
};
//----------------------------------------------------------------
//delete document
exports.deleteDocumentController = (req, res, next) => {
  let id = req.params.id;
  pdfModel
    .deleteDocumentModel(id)
    .then((verif) => {
      //console.log(verif);
      res.redirect("/MyCourses");
    })
    .catch((err) => {
      console.log(err);
    });
};
//----------------------------------------------------------------
//update document
exports.UpdateDocumentController = (req, res, next) => {
  let id = req.params.id;
  pdfModel.UpdateDocumentModel(id).then((doc) => {
    //console.log(doc);
    let id = req.session.UserId;
    profileModel.getProfilUserModel(id).then((Profil) => {
      console.log(Profil);
      res.render("PageUpdateDocument", {
        docupdate: doc,
        verifUser: req.session.UserId,
        Profil,
        Profil,
        Smessage: req.flash("success")[0],
        Emessage: req.flash("Error")[0],
      });
    });
  });
};
exports.PostUpdateDocument = (req, res, next) => {
  if (req.file) {
    pdfModel
      .PostUpdateDocumentModel(
        req.body.BookId,
        req.body.titre,
        req.body.description,
        req.body.niveau,
        req.body.specialite,
        req.body.categorie,
        req.body.type,
        req.body.date,
        req.body.nomUser,
        req.file.filename,
        req.body.module,
        req.body.typeFichier,
        req.session.UserId
      )
      .then((msg) => {
        req.flash("success", msg);
        res.redirect(`/update/${req.body.BookId}`);
        //console.log(msg);
      })
      .catch((err) => {
        req.flash("Error", err);
        //console.log(err);
        res.redirect(`/update/${req.body.BookId}`);
      });
  } else {
    pdfModel
      .PostUpdateDocumentModel(
        req.body.BookId,
        req.body.titre,
        req.body.description,
        req.body.niveau,
        req.body.specialite,
        req.body.categorie,
        req.body.type,
        req.body.date,
        req.body.nomUser,
        req.body.OldFile,
        req.body.module,
        req.body.typeFichier,
        req.session.UserId
      )
      .then((msg) => {
        req.flash("success", msg);
        res.redirect(`/update/${req.body.BookId}`);
        //console.log(msg);
      })
      .catch((err) => {
        req.flash("Error", err);
        console.log(err);
        res.redirect(`/update/${req.body.BookId}`);
      });
  }
};
//----------------------------------------------------------------
//Profil
exports.getProfil = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("profile", {
      Profil: Profil,
      verifUser: req.session.UserId,
      Smessage: req.flash("success")[0],
      Emessage: req.flash("Error")[0],
    });
  });
};
exports.PostProfilData = (req, res, next) => {
  console.log(req.body);
  console.log(req.file.filename);
  profileModel
    .PostDataProfilMOdel(
      req.body.nom,
      req.body.email,
      req.body.numero,
      req.body.status,
      req.body.address,
      req.body.travail,
      req.body.Sexe,
      req.file.filename,
      req.session.UserId
    )
    .then((msg) => {
      req.flash("success", msg);
      res.redirect("/Nouveauprofil");
      console.log(msg);
    })
    .catch((err) => {
      req.flash("Error", err);
      console.log(err);
      res.redirect("/Nouveauprofil");
    });
};
//----------------------------------------------------------------
//update Profil

exports.UpdateProfilController = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getMyProfile(id).then((prof) => {
    console.log(prof);
    console.log(req.session.UserId);
    res.render("Myprofile", {
      Profil: prof,
      verifUser: req.session.UserId,
      Smessage: req.flash("success")[0],
      Emessage: req.flash("Error")[0],
    });
  });
};
exports.PostUpdateProfile = (req, res, next) => {
  if (req.file) {
    profileModel
      .PostUpdateProfileModel(
        req.body.nom,
        req.body.email,
        req.body.numero,
        req.body.status,
        req.body.address,
        req.body.travail,
        req.body.Sexe,
        req.file.filename,
        req.session.UserId
      )
      .then((msg) => {
        req.flash("success", msg);
        res.redirect("/MyProfil");
        //console.log(msg);
      })
      .catch((err) => {
        req.flash("Error", err);
        //console.log(err);
        res.redirect("/MyProfil");
      });
  } else {
    profileModel
      .PostUpdateProfileModel(
        req.body.nom,
        req.body.email,
        req.body.numero,
        req.body.status,
        req.body.address,
        req.body.travail,
        req.body.Sexe,
        req.body.OldFile,
        req.session.UserId
      )
      .then((msg) => {
        req.flash("success", msg);
        res.redirect("/MyProfil");
        //console.log(msg);
      })
      .catch((err) => {
        req.flash("Error", err);
        //console.log(err);
        res.redirect("/MyProfil");
      });
  }
};
//----------------------------------------------------------------
//get dashbord
exports.getdashbord = (req, res, next) => {
  let idAdmin = req.session.UserId;
  console.log(idAdmin);
  profileModel.getProfileAdminModel(idAdmin).then((profile) => {
    console.log("xxxxxxxxxxxxxxxxxxx");
    res.render("dashbord", {
      verifUser: req.session.UserId,
      profile: profile,
    });
  });
};
//----------------------------------------------------------------
//get AllDocuments for Admin
exports.getAllDucmentsAdminController = (req, res, next) => {
  pdfModel.getAllDocumentsAdminModel().then((books) => {
    //console.log(books);
    let idAdmin = req.session.UserId;
    profileModel.getProfileAdminModel(idAdmin).then((profile) => {
      //console.log(profile);
      res.render("docuemnts", {
        books: books,
        profile: profile,
        verifUser: req.session.UserId,
      });
    });
  });
};
//----------------------------------------------------------------
//get Allusers for Admin
exports.getAllUsersAdminController = (req, res, next) => {
  AuthModel.getAllUsersAdminModel().then((users) => {
    //console.log(users);
    let idAdmin = req.session.UserId;
    profileModel.getProfileAdminModel(idAdmin).then((profile) => {
      //console.log(profile);
      res.render("users", {
        users: users,
        profile: profile,
        verifUser: req.session.UserId,
      });
    });
  });
};

//----------------------------------------------------------------
//get AllComments for Admin
exports.getAllCommentsAdminController = (req, res, next) => {
  commentModel.getAllCommentsAdminModel().then((Comments) => {
    console.log(Comments);
    let idAdmin = req.session.UserId;
    profileModel.getProfileAdminModel(idAdmin).then((profile) => {
      //console.log(profile);
      res.render("Comments", {
        Comments: Comments,
        profile: profile,
        verifUser: req.session.UserId,
      });
    });
  });
};
//----------------------------------------------------------------
//get All Profiles for Admin
exports.getAllProfilesAdminController = (req, res, next) => {
  profileModel.getAllProfilesAdminModel().then((profiles) => {
    //console.log(users);
    let idAdmin = req.session.UserId;
    profileModel.getProfileAdminModel(idAdmin).then((profile) => {
      //console.log(profile);
      res.render("AllProfilesForAdmin", {
        profiles: profiles,
        profile: profile,
        verifUser: req.session.UserId,
      });
    });
  });
};
//----------------------------------------------------------------
//delete document for Admin
exports.deleteDocumentAdminController = (req, res, next) => {
  let id = req.params.id;
  pdfModel
    .deleteDocumentAdminModel(id)
    .then((verif) => {
      //console.log(verif);
      res.redirect("/documents");
    })
    .catch((err) => {
      console.log(err);
    });
};
//----------------------------------------------------------------
//update document for Admin
exports.UpdateDocumentAdminController = (req, res, next) => {
  let id = req.params.id;
  pdfModel.UpdateDocumentAdminModel(id).then((doc) => {
    console.log(doc);
    res.render("PageUpdateDocumentAdmin", {
      docupdate: doc,
      verifUser: req.session.UserId,
      Smessage: req.flash("success")[0],
      Emessage: req.flash("Error")[0],
    });
  });
};
exports.PostUpdateDocumentAdmin = (req, res, next) => {
  if (req.file) {
    pdfModel
      .PostUpdateDocumentAdminModel(
        req.body.BookId,
        req.body.titre,
        req.body.description,
        req.body.niveau,
        req.body.specialite,
        req.body.categorie,
        req.body.type,
        req.body.date,
        req.body.nomUser,
        req.file.filename,
        req.body.module,
        req.body.typeFichier,
        req.session.UserId
      )
      .then((msg) => {
        req.flash("success", msg);
        res.redirect(`/updateDocAdmin/${req.body.BookId}`);
        //console.log(msg);
      })
      .catch((err) => {
        req.flash("Error", err);
        //console.log(err);
        res.redirect(`/updateDocAdmin/${req.body.BookId}`);
      });
  } else {
    pdfModel
      .PostUpdateDocumentAdminModel(
        req.body.BookId,
        req.body.titre,
        req.body.description,
        req.body.niveau,
        req.body.specialite,
        req.body.categorie,
        req.body.type,
        req.body.date,
        req.body.nomUser,
        req.body.OldFile,
        req.body.module,
        req.body.typeFichier,
        req.session.UserId
      )
      .then((msg) => {
        req.flash("success", msg);
        res.redirect(`/updateDocAdmin/${req.body.BookId}`);
        //console.log(msg);
      })
      .catch((err) => {
        req.flash("Error", err);
        console.log(err);
        res.redirect(`/updateDocAdmin/${req.body.BookId}`);
      });
  }
};
// exports.PostUpdateProfileUserAdmin = (req, res, next) => {
//   if (req.file) {
//     pdfModel
//       .PostUpdateDocumentAdminModel(
//         req.body.BookId,
//         req.body.titre,
//         req.body.description,
//         req.body.niveau,
//         req.body.specialite,
//         req.body.categorie,
//         req.body.type,
//         req.body.date,
//         req.body.nomUser,
//         req.file.filename,
//         req.body.module,
//         req.body.typeFichier,
//         req.session.UserId
//       )
//       .then((msg) => {
//         req.flash("success", msg);
//         res.redirect(`/updateDocAdmin/${req.body.BookId}`);
//         // res.render("documents");
//         console.log(msg);
//       })
//       .catch((err) => {
//         req.flash("Error", err);
//         //console.log(err);
//         res.redirect(`/updateDocAdmin/${req.body.BookId}`);
//       });
//   } else {
//     pdfModel
//       .PostUpdateDocumentAdminModel(
//         req.body.BookId,
//         req.body.titre,
//         req.body.description,
//         req.body.niveau,
//         req.body.specialite,
//         req.body.categorie,
//         req.body.type,
//         req.body.date,
//         req.body.nomUser,
//         req.file.filename,
//         req.body.module,
//         req.body.typeFichier,
//         req.session.UserId
//       )
//       .then((msg) => {
//         req.flash("success", msg);
//         res.redirect(`/updateDocAdmin/${req.body.BookId}`);
//         //console.log(msg);
//       })
//       .catch((err) => {
//         req.flash("Error", err);
//         //console.log(err);
//         res.redirect(`/updateDocAdmin/${req.body.BookId}`);
//       });
//   }
// };
//----------------------------------------------------------------
//delete user for Admin
exports.deleteUserAdminController = (req, res, next) => {
  let id = req.params.id;
  AuthModel.deleteUserAdminModel(id)
    .then((verif) => {
      //console.log(verif);
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
    });
};
//----------------------------------------------------------------
//delete Comment for Admin
exports.deleteCommentAdminController = (req, res, next) => {
  let idComment = req.params.id;
  commentModel
    .deleteCommentAdminModel(idComment)
    .then((verif) => {
      console.log(verif);
      console.log(idComment);
      res.redirect("/comments");
    })
    .catch((err) => {
      console.log(err);
    });
};
//----------------------------------------------------------------
//delete Profileuser for Admin
exports.deleteProfileUserAdminController = (req, res, next) => {
  let id = req.params.id;
  profileModel
    .deleteProfileUserAdminModel(id)
    .then((verif) => {
      //console.log(verif);
      res.redirect("/ProfileUsers");
    })
    .catch((err) => {
      console.log(err);
    });
};
//----------------------------------------------------------------
//update ProfileUser for Admin
exports.UpdateProfilUserController = (req, res, next) => {
  let id = req.params.id;
  profileModel.UpdateProfilUserModel(id).then((Profil) => {
    console.log(Profil);
    res.render("UpdateprofileUser", {
      Profil: Profil,
      verifUser: req.session.UserId,
      Smessage: req.flash("success")[0],
      Emessage: req.flash("Error")[0],
    });
  });
};
exports.PostUpdateProfileUserAdmin = (req, res, next) => {
  if (req.file) {
    profileModel
      .PostUpdateProfileUserAdminModel(
        req.body.profileId,
        req.body.nom,
        req.body.email,
        req.body.numero,
        req.body.status,
        req.body.address,
        req.body.travail,
        req.body.Sexe,
        req.file.filename,
        req.session.UserId
      )
      .then((msg) => {
        req.flash("success", msg);
        res.redirect(`/UpdateProfilUser/${req.body.profileId}`);
        //console.log(msg);
      })
      .catch((err) => {
        req.flash("Error", err);
        //console.log(err);
        res.redirect(`/UpdateProfilUser/${req.body.profileId}`);
      });
  } else {
    profileModel
      .PostUpdateProfileUserAdminModel(
        req.body.profileId,
        req.body.nom,
        req.body.email,
        req.body.numero,
        req.body.status,
        req.body.address,
        req.body.travail,
        req.body.Sexe,
        req.body.OldFile,
        req.session.UserId
      )
      .then((msg) => {
        req.flash("success", msg);
        res.redirect(`/UpdateProfilUser/${req.body.profileId}`);
        //console.log(msg);
      })
      .catch((err) => {
        req.flash("Error", err);
        //console.log(err);
        res.redirect(`/UpdateProfilUser/${req.body.profileId}`);
      });
  }
};
//----------------------------------------------------------------
//Page Details Pdf
exports.DetailsPdf = (req, res, next) => {
  let id = req.params.id;
  pdfModel.getDeatilsPdf(id).then((books) => {
    //console.log(books);
    // profileModel.getProfilUserModel(req.body.Idutilisateur).then((ProfileUserId) => {
    //   console.log(ProfileUserId);
    pdfModel.getAllDocumentsForRecommandation(id).then((result) => {
      console.log(result);
      let idUser = req.session.UserId;
      profileModel.getProfileUserDetailsModel(idUser).then((profile) => {
        //console.log(profile);
        let id = req.session.UserId;
        profileModel.getProfilUserModel(id).then((Profil) => {
          //console.log(Profil);
          res.render("details", {
            books: books,
            verifUser: req.session.UserId,
            profile: profile,
            Profil: Profil,
            result: result,
            Smessage: req.flash("success")[0],
            Emessage: req.flash("Error")[0],
            Successmessage: req.flash("successMessage")[0],
            Errormessage: req.flash("ErrorMessage")[0],
          });
        });
      });
    });
  });
};
//evaluation
exports.PostEvaluationData = (req, res, next) => {
  evaluationMoel
    .EvaluationFunctionModel(req.body.BookId, req.session.UserId, req.body.Note)
    .then((msg) => {
      //console.log(user);
      req.flash("success", msg);
      res.redirect(`/Documentdetails/${req.body.BookId}`);
    })
    .catch((err) => {
      //console.log(msg);
      req.flash("Error", err);
      res.redirect(`/Documentdetails/${req.body.BookId}`);
    });
};
// comment
exports.PostCommentData = (req, res, next) => {
  commentModel
    .CommentFunctionModel(
      req.body.BookId,
      req.session.UserId,
      req.body.document,
      req.body.user,
      req.body.contenu
    )
    .then((msj) => {
      //console.log(user);
      req.flash("successMessage", msj);
      res.redirect(`/Documentdetails/${req.body.BookId}`);
    })
    .catch((error) => {
      //console.log(msg);
      req.flash("ErrorMessage", error);
      res.redirect(`/Documentdetails/${req.body.BookId}`);
    });
};
//----------------------------------------------------------------
//Profil Admin
exports.getProfilAdmin = (req, res, next) => {
  res.render("profileAdmin", {
    verifUser: req.session.UserId,
    Smessage: req.flash("success")[0],
    Emessage: req.flash("Error")[0],
  });
};
exports.PostProfilDataForAdmin = (req, res, next) => {
  console.log(req.body);
  console.log(req.file.filename);
  profileModel
    .PostProfilDataForAdminMOdel(
      req.body.nom,
      req.body.email,
      req.body.numero,
      req.body.status,
      req.body.address,
      req.body.travail,
      req.body.Sexe,
      req.file.filename,
      req.session.UserId
    )
    .then((msg) => {
      req.flash("success", msg);
      res.redirect("/NouveauprofilAdmin");
      console.log(msg);
    })
    .catch((err) => {
      req.flash("Error", err);
      console.log(err);
      res.redirect("/NouveauprofilAdmin");
    });
};
//------------------------------------------------------------------
//Update Profile Admin
exports.UpdateProfilAdminController = (req, res, next) => {
  let id = req.session.UserId;
  profileModel.getMyProfileAdmin(id).then((prof) => {
    //console.log(prof);
    //console.log(req.session.UserId);
    res.render("UpdateprofileAdmin", {
      Profil: prof,
      verifUser: req.session.UserId,
      Smessage: req.flash("success")[0],
      Emessage: req.flash("Error")[0],
    });
  });
};

exports.PostUpdateProfileAdmin = (req, res, next) => {
  if (req.file) {
    profileModel
      .PostUpdateProfilAdminModel(
        req.body.Idprofile,
        req.body.nom,
        req.body.email,
        req.body.numero,
        req.body.status,
        req.body.address,
        req.body.travail,
        req.body.Sexe,
        req.file.filename,
        req.session.UserId
      )
      .then((msg) => {
        req.flash("success", msg);
        res.redirect("/UpdateProfilAdmin");
        //console.log(msg);
      })
      .catch((err) => {
        req.flash("Error", err);
        //console.log(err);
        res.redirect("/UpdateProfilAdmin");
      });
  } else {
    profileModel
      .PostUpdateProfilAdminModel(
        req.body.Idprofile,
        req.body.nom,
        req.body.email,
        req.body.numero,
        req.body.status,
        req.body.address,
        req.body.travail,
        req.body.Sexe,
        req.body.OldFile,
        req.session.UserId
      )
      .then((msg) => {
        req.flash("success", msg);
        res.redirect("/UpdateProfilAdmin");
        //console.log(msg);
      })
      .catch((err) => {
        req.flash("Error", err);
        //console.log(err);
        res.redirect("/UpdateProfilAdmin");
      });
  }
};

//----------------------------------------------------------------
//update Comment for Admin
exports.UpdateCommentForAdminController = (req, res, next) => {
  let id = req.params.id;
  commentModel.UpdateCommentForAdminrModel(id).then((comment) => {
    console.log(comment);
    res.render("UpdateCommentForAdmin", {
      comment: comment,
      verifUser: req.session.UserId,
      Smessage: req.flash("success")[0],
      Emessage: req.flash("Error")[0],
    });
  });
};
exports.PostUpdateCommenteAdmin = (req, res, next) => {
  commentModel
    .PostUpdateCommentModel(
      req.body.IdComment,
      req.body.IdBook,
      req.body.UserId,
      req.body.document,
      req.body.nomuser,
      req.body.contenu
    )
    .then((msg) => {
      req.flash("success", msg);
      res.redirect(`/updateCommentAdmin/${req.body.IdComment}`);
      //console.log(msg);
    })
    .catch((err) => {
      req.flash("Error", err);
      //console.log(err);
      res.redirect(`/updateCommentAdmin/${req.body.IdComment}`);
    });
};
