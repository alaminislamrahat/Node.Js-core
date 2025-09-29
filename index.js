// ===== Dependencies =====
const express = require("express");

const { connectMongoDb } = require('./connection')
const userRouter = require("./routes/user")

const app = express();

//connection

connectMongoDb("mongodb+srv://rahatPractice:9Bw57bQUNH.M_Mx@cluster0.3jkraio.mongodb.net/rahatPractice?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("mongodb connected!!"))




// ===== Middleware =====
app.use(express.json()); // for JSON requests
app.use(express.urlencoded({ extended: true })); // for x-www-form-urlencoded requests




// ===== Routes =====
app.get("/", (req, res) => {
  res.send("Hello from home page 🚀");
});



//routes

app.use("/api/user", userRouter)


// ===== Start Server =====
app.listen(8000, () => console.log("🚀 Server running on http://localhost:8000"));
