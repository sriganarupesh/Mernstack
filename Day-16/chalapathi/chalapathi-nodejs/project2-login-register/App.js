const express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = 
        require("passport-local-mongoose");
const Country = require("./model/Country");
let app = express();
mongoose.connect("mongodb://localhost/politics");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Country.authenticate()));
passport.serializeUser(Country.serializeUser());
passport.deserializeUser(Country.deserializeUser());
app.get("/", function (req, res) {
    res.render("home1");
});
app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});
app.get("/register2", function (req, res) {
    res.render("register2");
});
app.post("/register2", async (req, res) => {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password
    });
    return res.status(200).json(country);
  });
app.get("/login2", function (req, res) {
    res.render("login2");
});
app.post("/login2", async function(req, res){
    try {
        const Country = await Country.findOne({ username: req.body.username });
        if (user) {
          const result = req.body.password === user.password;
          if (result) {
            res.render("secret");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
});
app.get("/logout", function (req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}
app.listen(2000, function () {
    console.log("Server Has Started!");
});