const router = require("express").Router();
let carriers = require("../utils/carriers");

// about
router.get("/", (req, res) => {
  try {
    res.status(200).render("about");
  } catch (err) {
    res.status(500).json(err);
  }
});
// refer
router.get("/refer", (req, res) => {
  try {
    res.status(200).render("referral");
  } catch (err) {
    res.status(500).json(err);
  }
});
// carriers
router.get("/carriers", (req, res) => {
  try {
    // for (i = 0; i < carriers.length; i++) {
    //   carriers[i] = carriers[i].get({ plain: true });
    // }
    console.log(carriers);
    res.status(200).render("carriers", { carriers });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
