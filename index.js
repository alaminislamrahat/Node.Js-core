// ===== Dependencies =====
const express = require("express");


const { connectMongoDb } = require('./connection')

const app = express();

//connection

connectMongoDb("mongodb+srv://rahatPractice:9Bw57bQUNH.M_Mx@cluster0.3jkraio.mongodb.net/rahatPractice?retryWrites=true&w=majority&appName=Cluster0")


const userRouter = require("./routes/user")

// ===== Middleware =====
app.use(express.json()); // for JSON requests
app.use(express.urlencoded({ extended: true })); // for x-www-form-urlencoded requests

// ===== MongoDB Connection =====


// ===== Schema =====


// ===== Model =====


// ===== Routes =====
app.get("/", (req, res) => {
  res.send("Hello from home page 🚀");
});



//routes

app.use("/user", userRouter)


// ===== Start Server =====
app.listen(8000, () => console.log("🚀 Server running on http://localhost:8000"));
