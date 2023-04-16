const router = require("express").Router();

// auto quote
router.get("/autos", (req, res) => {
  try {
    res.status(200).render("autoQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});
// property quote
router.get("/property", (req, res) => {
  try {
    res.status(200).render("propertyQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});
// business quote
router.get("/business", (req, res) => {
  try {
    res.status(200).render("businessQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
