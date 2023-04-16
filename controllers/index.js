const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const api = require("./api");
const quoteRoutes = require("./quoteRoutes");
const serviceRoutes = require("./serviceRoutes");
const insuranceRoutes = require("./insuranceRoutes");
const aboutRoutes = require("./aboutRoutes");

router.use("/", homeRoutes);
router.use("/api", api);
router.use("/quotes", quoteRoutes);
router.use("/services", serviceRoutes);
router.use("/insurance", insuranceRoutes);
router.use("/about", aboutRoutes);

module.exports = router;
