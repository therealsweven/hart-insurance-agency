const router = require("express").Router();
const contactRoutes = require("./contactRoutes");
const serviceRoutes = require("./serviceRoutes");
const aboutRoutes = require("./aboutRoutes");
const quoteRoutes = require("./quoteRoutes");

router.use("/contact", contactRoutes);
router.use("/services", serviceRoutes);
router.use("/about", aboutRoutes);
router.use("/quote", quoteRoutes);

module.exports = router;
