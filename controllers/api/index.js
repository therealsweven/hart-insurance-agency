const router = require("express").Router();
const contactRoutes = require("./contactRoutes");
const serviceRoutes = require("./serviceRoutes");
const aboutRoutes = require("./aboutRoutes");

router.use("/contact", contactRoutes);
router.use("/services", serviceRoutes);
router.use("/about", aboutRoutes);

module.exports = router;
