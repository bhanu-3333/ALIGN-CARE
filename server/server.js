require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const clinicRoutes = require("./routes/clinicRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  if (req.method === 'POST') console.log('Body:', req.body);
  next();
});

connectDB();

app.get("/", (req, res) => {
  res.send("AlignCare API is running");
});

app.get("/api/health", (req, res) => {
  res.json({ message: "Server is up and running", time: new Date().toISOString() });
});

app.use("/api/auth", authRoutes);
app.use("/api/clinics", clinicRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});