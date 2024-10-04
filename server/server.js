import express from "express";
import cors from "cors";
import mysql from "mysql";
const app = express();

app.use(express.json());
app.use(cors());

const port = 5000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "students",
});

app.post("/add_user", (req, res) => {
  const sql =
    "INSERT INTO student_table (`name`, `email`, `age`, `gender`) VALUES (?, ?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.age, req.body.gender];
  db.query(sql, values, (err) => {
    if (err)
      return res.json({ message: "something unexpected has occured" + err });
    return res.json({ success: "Student Added Successfully" });
  });
});

app.get("/students", (req, res) => {
  const sql = "SELECT * FROM student_table";
  db.query(sql, (err, result) => {
    if (err) return res.json({ message: "Server Error" + err });
    return res.json(result);
  });
});

app.get("/get_student/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM student_table WHERE `id`=? ";
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ message: "Server Error" + err });
    return res.json(result);
  });
});

app.post("/edit_student/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "UPDATE student_table SET `name`=?, `email`=?, `age`=?, `gender`=? WHERE id=?";
  const values = [
    req.body.name,
    req.body.email,
    req.body.age,
    req.body.gender,
    id,
  ];
  db.query(sql, values, (err) => {
    if (err)
      return res.json({ message: "something unexpected has occured" + err });
    return res.json({ success: "Student Added Successfully" });
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM student_table WHERE id=?";
  const values = [id];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student delete successfully" });
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
