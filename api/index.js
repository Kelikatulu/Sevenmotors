const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// Paths
const root = process.cwd();

// View engine
app.set("views", path.join(root, "views"));
app.set("view engine", "ejs");

// Static files
app.use(express.static(path.join(root, "public")));

// Home route
app.get("/", (req, res) => {
  const carsPath = path.join(root, "data", "cars.json");
  const cars = JSON.parse(fs.readFileSync(carsPath, "utf8"));
  res.render("index", { cars });
});

// IMPORTANT: export for Vercel
module.exports = app;
