const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Signup
exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;
  const normalizedEmail = (email || '').toLowerCase().trim();
  const normalizedRole = (role || 'user').toLowerCase().trim();

  try {
    const userExists = await User.findOne({ email: normalizedEmail });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email: normalizedEmail,
      password: hashedPassword,
      role: normalizedRole
    });

    await user.save();

    res.status(201).json({ message: "Account created", role: user.role });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const normalizedEmail = (email || '').toLowerCase().trim();

  try {
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login successful",
      role: user.role
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};