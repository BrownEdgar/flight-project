require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require('./db/db')
const cors = require('cors')

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const citiesRouter = require("./routes/cities");
const companyRouter = require("./routes/company");
const flightRouter = require("./routes/flight");


const services = require("./Services");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/uploads", express.static('uploads'))

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/cities", citiesRouter);
app.use("/companies", companyRouter);
app.use("/flights", flightRouter);

app.locals.models = {
  users: db.users,
  city: db.cities,
  flight: db.flight,
  company: db.companies,
};

app.locals.services = {
  users: new services.users(app.locals.models),
  auth: new services.auth(app.locals.models),
  city: new services.city(app.locals.models),
  flight: new services.flight(app.locals.models),
  company: new services.company(app.locals.models),
};

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({ err: err.message });
});

module.exports = app;
