const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
// const transporter = require("./config");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//Init Middleware
app.use(express.json({ extended: false }));

app.use("/api/email", require("./routes/email"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/user"));
// app.get("/", (req, res) => res.send("API running"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on: http://localhost:${PORT}`)
);

// "email":"test@test.com",
// "password":"12345678"
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYwNTI3MTIwMGUyMmQ2YzI2MDU5ODA0In0sImlhdCI6MTU5NDE3MzIwMiwiZXhwIjoxNTk0NTMzMjAyfQ.krMnCn4DBPWGJKMWPEgpU4eoQVToPoK0ckS3Q0ITdlY"
