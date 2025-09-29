const User = require("../models/user")

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({})
    res.setHeader("x-name", "rahat");

    res.json(allDbUsers)
}


async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id)
    if (!user) {
        return res.status(404).json({ msg: "not found" })
    }
    return res.json(user)
}



async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id,{firstName: "changed"})

    return res.json({ status: "success" })
}
async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)

    return res.json({ status: "success" })
}


async function handleCreateUser(req, res){
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

    return res.status(201).json({ msg: "User created successfully", id: result._id });
  } catch (err) {
    console.error("❌ Error creating user:", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
}