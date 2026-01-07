const express = require("express");
const router = express.Router();
const { getCategories } = require("../controllers/categoryController");
const auth = require("../middleware/authMiddleware");

// Protected route (token required)
router.get("/", auth, getCategories);

module.exports = router;