const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("src/uploads"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));

app.use("/",(req,res)=>{
    res.send("Welcome to Category Management Dashboard API");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
