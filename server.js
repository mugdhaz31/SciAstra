const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sci_astra"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");
});

app.get("/courses", (req, res) => {
    db.query("SELECT * FROM courses WHERE discounted = 1", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post("/purchase", (req, res) => {
    const { courseId, userId } = req.body;
    db.query("INSERT INTO transactions (course_id, user_id) VALUES (?, ?)", [courseId, userId], (err) => {
        if (err) throw err;
        res.json({ status: "Success" });
    });
});

app.post("/blog", (req, res) => {
    const { title, content, scheduleTime } = req.body;
    console.log("New Blog Post Scheduled:", {
        title,
        content,
        scheduleTime
    });
    res.json({ status: "Blog scheduled" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
