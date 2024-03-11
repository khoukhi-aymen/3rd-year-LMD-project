const express = require("express");
const path = require("path");
const app = express();
const pdfRouter = require("./routers/pdfRouetr");
const authentification = require("./routers/authentificationRouter");
const session = require("express-session");
const flash = require("connect-flash");
const contactRouter = require("./routers/countactRouter");
const { redirect } = require("express/lib/response");
const MongoDbStore = require("connect-mongodb-session")(session);
app.use(express.static(path.join(__dirname, "assets")));
app.set("view engine", "ejs");
app.set("views", "views");

var Store = new MongoDbStore({
  uri: "mongodb://localhost:27017/bbzUniversity",
  collection: "Sessions",
});

app.use(
  session({
    secret: "This is a secret",
    store: Store,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
// ------------------------------------------------------------------------
//L3informatique
app.use("/", pdfRouter);
app.use("/", contactRouter);
app.use("/dashboard", (req, res, next) => {
  console.log(req.session.UserId);
  res.render("dashbord", { verifUser: req.session.UserId });
});
app.use("/documents", (req, res, next) => {
  res.render("docuemnts");
});
app.use("/users", (req, res, next) => {
  res.render("users");
});
/*app.use("/", pdfRouter);
app.use("/", pdfRouter);
app.use("/", pdfRouter);
app.use("/", pdfRouter);
app.use("/", pdfRouter);*/

// app.get("/profil", (req, res, next) => {
//   res.render("profile", { verifUser: req.session.UserId });
// });
// app.get("/L3InfoalgoCourses", (req, res, next) => {
//   res.render("L3InfoalgoCourses");
// });
// app.get("/L3InfoMemLicCourses", (req, res, next) => {
//   res.render("L3InfoMemLicCourses");
// });
// app.get("/L3InfoMathCourses", (req, res, next) => {
//   res.render("L3InfoMathCourses");
// });
// ------------------------------------------------------------------------
//L3Mathematique
/*app.use("/", pdfRouter);
app.use("/", pdfRouter);
app.use("/", pdfRouter);
app.use("/", pdfRouter);*/
// app.get("/L3Mathematique", (req, res, next) => {
//   res.render("L3Mathematique");
// });
// app.get("/L3MathAlgoCourses", (req, res, next) => {
//   res.render("L3MathAlgoCourses");
// });

// app.get("/L3MathMathCourses", (req, res, next) => {
//   res.render("L3MathMathCourses");
// });
// app.get("/L3MathMemLicCourses", (req, res, next) => {
//   res.render("L3MathMemLicCourses");
// });
// ------------------------------------------------------------------------
//L2 informatique
/*app.use("/", pdfRouter);
app.use("/", pdfRouter);
app.use("/", pdfRouter);*/
// app.get("/L2informatique", (req, res, next) => {
//   res.render("L2informatique");
// });
// app.get("/L2InfoalgoCourses", (req, res, next) => {
//   res.render("L2InfoalgoCourses");
// });
// app.get("/L2InfoMathCourses", (req, res, next) => {
//   res.render("L2InfoMathCourses");
// });
// app.get("/L2InfoEnglishCourses", (req, res, next) => {
//   res.render("L2InfoEnglishCourses");
// });

// ------------------------------------------------------------------------
//L2 mathematique
/*app.use("/", pdfRouter);
app.use("/", pdfRouter);
app.use("/", pdfRouter);*/
// app.get("/L2mathematique", (req, res, next) => {
//   res.render("L3mathematique");
// });
// app.get("/L2MathMathCourses", (req, res, next) => {
//   res.render("L2MathMathCourses");
// });
// app.get("/L2MathAlgoCourses", (req, res, next) => {
//   res.render("L2MathAlgoCourses");
// });

// ------------------------------------------------------------------------
//L1 ST
/*app.use("/", pdfRouter);
app.use("/", pdfRouter);*/
// app.get("/L1ST", (req, res, next) => {
//   res.render("L1ST");
// });
// app.get("/L1STAlgoCourses", (req, res, next) => {
//   res.render("L1STAlgoCourses");
// });

// app.get("/L1STMathCourses", (req, res, next) => {
//   res.render("L1STMathCourses");
// });
// app.get("/L1STPhysiqueCourses", (req, res, next) => {
//   res.render("L1STPhysiqueCourses");
// });
// app.get("/L1STOfficeCourses", (req, res, next) => {
//   res.render("L1STOfficeCourses");
// });
// ------------------------------------------------------------------------
//L1 MI
// **************** partie Cours************
/*app.use("/", pdfRouter);
app.use("/", pdfRouter);
app.use("/", pdfRouter);
app.use("/", pdfRouter);
app.use("/", pdfRouter);
app.use("/", pdfRouter);
app.use("/", pdfRouter);*/
// app.get("/L1MI", (req, res, next) => {
//   res.render("L1MI");
// });
// app.get("/L1MIAlgoCourses", (req, res, next) => {
//   res.render("L1MIAlgoCourses");
// });
// app.get("/L1MIMathCourses", (req, res, next) => {
//   res.render("L1MIMathCourses");
// });
// app.get("/L1MIPhysiqueCourses", (req, res, next) => {
//   res.render("L1MIPhysiqueCourses");
// });
// app.get("/L1MIOfficeCourses", (req, res, next) => {
//   res.render("L1MIOfficeCourses");
// });
// ------------------------------------------------------------------------
//authentification
app.use("/", authentification);
app.use("/", authentification);
/*app.use("/", authentification);
app.use("/", authentification);*/
// ------------------------------------------------------------------------
// app.get("/Upload", (req, res, next) => {
//   res.render("Upload", {});
// });
// app.get("/MyCourses", (req, res, next) => {
//   res.render("MyCourses", { verifUser: req.session.UserId });
// });
app.listen(5000, () => {
  console.log("server run in port 5000!");
});
