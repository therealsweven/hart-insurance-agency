const path = require("path");
const router = require("express").Router();

// policy review request
router.post("/policy-review", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

// update contact request
router.post("/update-contact", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

// policy change request
router.post("/policy-change", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

// proof of insurance request
router.post("/proof", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

// free consultation request
router.post("/consult", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
