// Create web server
// Start web server
// Create routes
// Create route for comments

// Import express
const express = require("express");

// Create web server
const app = express();

// Start web server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Create routes
// app.get("/", (req, res) => {
//   res.send("This is the home page");
// });

// app.get("/about", (req, res) => {
//   res.send("This is the about page");
// });

// app.get("/contact", (req, res) => {
//   res.send("This is the contact page");
// });

// Create route for comments
// app.get("/comments", (req, res) => {
//   res.send("This is the comments page");
// });

// Create route for comments with query string
// app.get("/comments", (req, res) => {
//   console.log(req.query);
//   res.send("This is the comments page");
// });

// Create route for comments with query string
app.get("/comments", (req, res) => {
  console.log(req.query);
  res.send(`You have requested a comment with an ID of ${req.query.id}`);
});