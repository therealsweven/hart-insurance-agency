const path = require("path");
const router = require("express").Router();
const emails = require("../../utils/emails2");

router.post("/refer", (req, res) => {
  try {
    console.log(req.body);
    emails.sendReferral2Tina(req.body);
    res.status(200).json("referral request received");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
