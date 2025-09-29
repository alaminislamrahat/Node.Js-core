// ===== Dependencies =====
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ===== Middleware =====
app.use(express.json()); // for JSON requests
app.use(express.urlencoded({ extended: true })); // for x-www-form-urlencoded requests

// ===== MongoDB Connection =====
mongoose
  .connect(
    "mongodb+srv://rahatPractice:9Bw57bQUNH.M_Mx@cluster0.3jkraio.mongodb.net/rahatPractice?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ===== Schema =====
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  jobTitle: { type: String },
  gender: { type: String },
},{timestamps: true});

// ===== Model =====
const User = mongoose.model("User", userSchema);

// ===== Routes =====
app.get("/", (req, res) => {
  res.send("Hello from home page 🚀");
});


//html
app.get("/users", async(req, res)=> {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
    ${allDbUsers.map((user) => `<li> ${user.firstName}</li>`).join("")}
    </ul>
    `

    res.send(html)
});

//json

app.get("/api/users", async(req, res) => {
    const allDbUsers = await User.find({})
    res.setHeader("x-name", "rahat");

    res.json(allDbUsers)
})

app.post("/api/users", async (req, res) => {
  try {
    const body = req.body;

    // Validate required fields
    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.job_title
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Create new user
    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });

    console.log("✅ User created:", result);

    return res.status(201).json({ msg: "User created successfully", user: result });
  } catch (err) {
    console.error("❌ Error creating user:", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// ===== Start Server =====
app.listen(8000, () => console.log("🚀 Server running on http://localhost:8000"));
