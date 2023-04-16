const router = require("express").Router();

// auto quote
router.get("/autos", (req, res) => {
  try {
    res.status(200).render("autosInsurance");
  } catch (err) {
    res.status(500).json(err);
  }
});
// property quote
router.get("/property", (req, res) => {
  try {
    res.status(200).render("propertyInsurance");
  } catch (err) {
    res.status(500).json(err);
  }
});
// business quote
router.get("/business", (req, res) => {
  try {
    res.status(200).render("businessInsurance");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
