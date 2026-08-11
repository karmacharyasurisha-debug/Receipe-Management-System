const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3000;

// CORS
app.use(cors());

// JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Node.js server is running!");
});

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "receipe",
    port: 3306
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
        return;
    }

    console.log("✅ Connected to XAMPP MySQL!");
});

// GET recipes
app.get("/recipes", (req, res) => {
    const sql = "SELECT * FROM recipes";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("❌ GET error:", err.message);
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(results);
    });
});

// POST recipes
app.post("/recipes", (req, res) => {

    console.log("📥 POST /recipes received");
    console.log(req.body);

    const {
        title,
        category,
        image,
        preparationTime,
        serving,
        ingredients,
        steps
    } = req.body;

    const sql = `
        INSERT INTO recipes
        (title, category, image, preparation_time, serving, ingredients, steps)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        title,
        category,
        image,
        preparationTime,
        serving,
        JSON.stringify(ingredients),
        JSON.stringify(steps)
    ];

    db.query(sql, values, (err, result) => {

        if (err) {
            console.error("❌ INSERT error:", err.message);

            return res.status(500).json({
                error: err.message
            });
        }

        console.log("✅ Recipe saved! ID:", result.insertId);

        res.status(201).json({
            message: "Recipe added successfully!",
            id: result.insertId
        });
    });
});


// GET single recipe by ID
app.get("/recipes/:id", (req, res) => {

    const recipeId = req.params.id;

    const sql = "SELECT * FROM recipes WHERE id = ?";

    db.query(sql, [recipeId], (err, results) => {

        if (err) {
            console.error("❌ Query failed:", err.message);

            return res.status(500).json({
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                error: "Recipe not found"
            });
        }

        res.json(results[0]);
    });
});

app.delete("/recipes/:id", (req, res) => {

    const recipeId = req.params.id;

    const sql = "DELETE FROM recipes WHERE id = ?";

    db.query(sql, [recipeId], (err, result) => {

        if (err) {

            console.error("❌ Delete failed:", err.message);

            return res.status(500).json({
                error: "Failed to delete recipe"
            });

        }

        if (result.affectedRows === 0) {

            return res.status(404).json({
                error: "Recipe not found"
            });

        }

        console.log("✅ Recipe deleted:", recipeId);

        res.json({
            message: "Recipe deleted successfully"
        });

    });

});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});