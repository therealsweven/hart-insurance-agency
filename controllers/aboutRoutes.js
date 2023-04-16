const router = require("express").Router();

// auto quote
router.get("/", (req, res) => {
  try {
    res.status(200).render("about");
  } catch (err) {
    res.status(500).json(err);
  }
});
// property quote
router.get("/refer", (req, res) => {
  try {
    res.status(200).render("referral");
  } catch (err) {
    res.status(500).json(err);
  }
});
// business quote
router.get("/carriers", (req, res) => {
  try {
    res.status(200).render("carriers");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
