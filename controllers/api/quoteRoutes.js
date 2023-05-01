const path = require("path");
const router = require("express").Router();

router.post("/", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json("quote request received");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
