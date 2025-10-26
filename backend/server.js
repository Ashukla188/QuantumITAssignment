const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const cors = require("cors");
const connectDB = require("./config/db");
console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();


const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
