const express = require("express");
const app = express();
const students = require("./students.json");
const fs = require("fs");

app.use(express.json());

app.listen(3000, (error) => {
  if (error) {
    console.log(error.message);
  }
  console.log("Server is running");
});

let student = [];

app.post("/student/addDetails", (req, res) => {
  req.body;
  student.push(req.body);
  res.json({ result: "Success" });
  fs.writeFile("students.json", JSON.stringify(student), (err) => {
    if (err) throw err;
    console.log("Save successfully");
  });
});

app.get("/student/getDetails", (req, res) => {
  fs.readFile("students.json", function (err, data) {
    if (err) throw err;
    console.log("Read successfully");
    let studentsdata = JSON.parse(data);
    res.json(studentsdata);
  });
});
