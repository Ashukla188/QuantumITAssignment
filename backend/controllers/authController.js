const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// 🧩 Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, dob, email, password } = req.body;

    if (!name || !dob || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      dob,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        dob: user.dob,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//  Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        dob: user.dob,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
