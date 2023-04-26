const path = require("path");
const router = require("express").Router();

router.post("/refer", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json("referral request received");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
