const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("./config");
// Connecting to mongodb
mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to mongodb"); //startup your backend server to see the success case message if it successful or the error case message if it is not successful
  })
  .catch((error) => {
    console.log(error.message);
  });
// // login
const app = express();
app.use(bodyParser.json());
app.use(express.json());

// Set static folder
app.use("/", express.static(path.join(__dirname, "public")));

//Set ejs viewsndir
app.set("views", "./views");
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/department", (req, res) => {
  res.render("department");
});
app.get("/jay", (req, res) => {
  res.render("jay");
});
app.get("/doctor", (req, res) => {
  res.render("doctor");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

//Register and Login Api
// const authRoute = require("./routers/auth");
// app.use("/api/register", authRoute);
// app.use("/api/login", authRoute);
app.post("/api/register", async (req, res) => {
  const {
    firstName,
    lastName,
    DoB,
    gender,
    category,
    email,
    phone,
    kinName,
    kinPhone,
    relationship,
    address,
    password: hashedPassword,
  } = req.body;
  let minPass = 6;
  let maxPass = 20;

  const password = await bcrypt.hash(hashedPassword, 10);
  if (hashedPassword.length < minPass || hashedPassword.length > maxPass) {
    return res.json({
      status: "error",
      error: "Password too small. Should be atleast 6 characters",
    });
  }

  console.log("From the frontend", req.body);
  // console.log(password)
  try {
    const response = await User.create({
      firstName,
      lastName,
      DoB,
      gender,
      category,
      email,
      phone,
      kinName,
      kinPhone,
      relationship,
      address,
      password,
    });
    console.log("Account created successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      return res.json({
        status: "error",
        error: "User details already exist",
      });
    }
    res.status(400).send(error);
    throw error.message;
  }
  res.json({
    status: "ok",
  });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  }).lean();
  if (!user) {
    return res.json({
      status: "error",
      error: "User does not exist",
    });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      config.JWT_SECRET
    );
    return res.json({
      status: "ok",
      data: token,
    });
  }
  res.json({
    status: "error",
    error: "Invalid Account/Password ",
  });
});

app.listen(8080, () => {
  console.log("serve at http://localhost:8080");
});
