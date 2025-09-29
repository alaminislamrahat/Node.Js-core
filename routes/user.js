const express = require("express");


const router = express.Router()



//json

router.get("/", async(req, res) => {
    const allDbUsers = await User.find({})
    res.setHeader("x-name", "rahat");

    res.json(allDbUsers)
})

router.post("/", async (req, res) => {
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


module.exports = router;