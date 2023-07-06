const path = require("path");
const router = require("express").Router();
const emails = require("../../utils/emails");

router.post("/", (req, res) => {
  try {
    console.log(req.body);
    emails.sendContactEmail(req.body);
    res.status(200).json("contact request received");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
