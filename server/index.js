
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


import mysql from "mysql"

const connection = mysql.createConnection({
    host: 'localhost',     // host for connection
    port: 3306,            // default port for mysql is 3306
    database: 'ibmdb2',     
    user: 'root',          // username of the mysql connection
    password: 'lielife24'    ,
    insecureAuth:true   // password of the mysql connection
});

// executing connection
connection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("connected successfully!!");
    }
});

app.post("/askQuestion", async (req, res) => {
  const paramx = {
    questionid: req.body.quesid,
    patientid: req.body.patientId,
    text: req.body.text,
    priority1: req.body.p1,
    priority2: req.body.p2,
    priority3: req.body.p3,
    priority4: req.body.p4,
  };

  const sql =
    "INSERT INTO question (questionid, patientid, text, priority1, priority2, priority3, priority4) VALUES (?, ?, ?, ?, ?, ?, ?)";

  const params = [
    paramx.questionid,
    paramx.patientid,
    paramx.text,
    paramx.priority1,
    paramx.priority2,
    paramx.priority3,
    paramx.priority4,
  ];

  connection.query(sql, params, (err, result) => {
    if (err) {
      console.error("Error inserting:", err);
      res.status(500).send("Error inserting data into the database.");
    } else {
      console.log("Inserted successfully:", result);
      res.status(200).send("Data inserted successfully.");
    }
  });
});

app.post("/responseAnswer", async (req, res) => {
  const paramx = {
    questionid: req.body.quesid,
    doctorid: req.body.doctorId,
    answerid: req.body.ansid,
    text: req.body.text,
    votes: req.body.votes,
  };
  console.log(paramx);

  const sql = "INSERT INTO answer (questionid, doctorid, answerid, text, votes) VALUES (?, ?, ?, ?, ?)";
  const params = [
    paramx.questionid,
    paramx.doctorid,
    paramx.answerid,
    paramx.text,
    paramx.votes,
  ];

  connection.query(sql, params, (err, result) => {
    if (err) {
      console.error("Error inserting:", err);
      res.status(500).send("Error inserting data into the database.");
    } else {
      console.log("Inserted successfully:", result);
      res.status(200).send("Data inserted successfully.");
    }
  });
});

app.get("/Query", (req, res) => {
  const v1 = req.query.v1;
  const v2 = req.query.v2;
  const v3 = req.query.v3;
  const v4 = req.query.v4;

  console.log(req.query);

  const query = `SELECT *
    FROM QUESTION
    WHERE PRIORITY1 = ?
      AND PRIORITY2 = ?
      AND PRIORITY3 = ?
      AND PRIORITY4 = ?;`;

  connection.query(query, [v1, v2, v3, v4], (err, data) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.json({ error: "Database query error" });
    } else {
      if (data && data.length > 0) {
        console.log(data);
        res.json(data);
      } else {
        console.log(data);
        res.json(["Not found"]);
      }
    }
  });
});

app.get("/Query/:questionid", (req, res) => {
  const questionId = req.params.questionid;

  const query = `SELECT * FROM answer WHERE questionid = ?`;

  connection.query(query, [questionId], (err, data) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.json({ error: "Database query error" });
    } else {
      if (data && data.length > 0) {
        res.json(data);
        console.log(data);
      } else {
        res.json([ "Not found" ]);
        console.log(data);
      }
    }
  });
});

app.post("/signup-patient", async (req, res) => {
  const paramx = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    patientid: req.body.patientid,
  };

  const sql = "INSERT INTO patient (email, password, name, patientid) VALUES (?, ?, ?, ?)";
  const params = [
    paramx.email,
    paramx.password,
    paramx.name,
    paramx.patientid,
  ];

  connection.query(sql, params, (err, result) => {
    if (err) {
      console.error("Error inserting:", err);
      res.status(500).json({ message: "fail" });
    } else {
      console.log("Inserted successfully:", result);
      res.status(200).json({ message: "success" });
    }
  });
});

app.post("/signup-doctor", async (req, res) => {
  const paramx = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    doctorid: req.body.doctorid,
    mobilenum: req.body.mobilenum,
    address: req.body.address,
    specialisation: req.body.specialisation,
    experience: req.body.experience,
  };

  const sql = "INSERT INTO doctor (email, password, name, doctorid, mobilenum, address, specialisation, experience) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  const params = [
    paramx.email,
    paramx.password,
    paramx.name,
    paramx.doctorid,
    paramx.mobilenum,
    paramx.address,
    paramx.specialisation,
    paramx.experience,
  ];

  connection.query(sql, params, (err, result) => {
    if (err) {
      console.error("Error inserting:", err);
      res.status(500).json({ message: "fail" });
    } else {
      console.log("Inserted successfully:", result);
      res.status(200).json({ message: "success" });
    }
  });
});

app.post("/login-patient", async (req, res) => {
  const sql = "SELECT * FROM patient WHERE email = ?";

  connection.query(sql, [req.body.email], (err, data) => {
    if (err) {
      console.error("Error executing the query:", err);
      return res.status(500).json({ message: "fail" });
    }

    if (data.length === 0) {
      return res.status(404).json({ message: "fail" });
    }

    const datax = data[0];
    if (req.body.password === datax.password) {
      res.status(200).json({ message: "success", id: datax.patientid });
    } else {
      res.status(401).json({ message: "fail" });
    }
  });
});

app.post("/login-doctor", async (req, res) => {
  const sql = "SELECT * FROM doctor WHERE email = ?";

  connection.query(sql, [req.body.email], (err, data) => {
    if (err) {
      console.error("Error executing the query:", err);
      return res.status(500).json({ message: "fail" });
    }

    if (data.length === 0) {
      return res.status(404).json({ message: "fail" });
    }

    const datax = data[0];
    if (req.body.password === datax.password) {
      res.status(200).json({ message: "success", id: datax.doctorid });
    } else {
      res.status(401).json({ message: "fail" });
    }
  });
});

app.get("/doctorProfile/:doctorId", (req, res) => {
  const doctorId = req.params.doctorId;
  const query = "SELECT * FROM doctor WHERE doctorid = ?";

  connection.query(query, [doctorId], (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.json({ error: "Database query error" });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.json({ error: "Doctor not found" });
      }
    }
  });
});

app.get("/patientProfile/:patientId", (req, res) => {
  const patientId = req.params.patientId;
  const query = "SELECT * FROM patient WHERE patientid = ?";

  connection.query(query, [patientId], (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.json({ error: "Database query error" });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
        console.log(results[0]);
      } else {
        res.json({ error: "Patient not found" });
      }
    }
  });
});

app.get("/stackExchange/d/:doctorId", (req, res) => {
  const doctorId = req.params.doctorId;
  const query = "SELECT * FROM answer WHERE doctorid = ?";

  connection.query(query, [doctorId], (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.json({ error: "Database query error" });
    } else {
      if (results.length > 0) {
        res.json(results);
      } else {
        res.json([{ error: "Not found" }]);
      }
    }
  });
});

app.get("/stackExchange/p/:patientId", (req, res) => {
  const patientId = req.params.patientId;
  const query = "SELECT * FROM question WHERE patientid = ?";

  connection.query(query, [patientId], (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.json({ error: "Database query error" });
    } else {
      if (results.length > 0) {
        res.json(results);
      } else {
        res.json([{ error: "Not found" }]);
      }
    }
  });
});

app.get("/stackExchange/pt/:questionid", (req, res) => {
  const questionId = req.params.questionid;
  const query = "SELECT * FROM answer WHERE questionid = ?";

  connection.query(query, [questionId], (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.json({ error: "Database query error" });
    } else {
      if (results.length > 0) {
        res.json(results);
      } else {
        res.json([{ error: "Not found" }]);
      }
    }
  });
});

app.get("/stackExchange/dr/:answerid", (req, res) => {
  const answerId = req.params.answerid;
  const query = `SELECT * FROM question WHERE questionid = (SELECT questionid FROM answer WHERE answerid = ?)`;

  connection.query(query, [answerId], (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.json({ error: "Database query error" });
    } else {
      if (results.length > 0) {
        res.json(results);
      } else {
        res.json([{ error: "Not found" }]);
      }
    }
  });
});

app.listen(5000, () => console.log("Server started!!"));