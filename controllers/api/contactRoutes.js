const path = require("path");
const router = require("express").Router();
const emails = require("../../utils/emails");
const emails2 = require("../../utils/emails2");

router.post("/", (req, res) => {
  try {
    console.log(req.body);
    emails2.sendContactEmail(req.body);
    emails2.sendContactEmail2Tina(req.body);
    res.status(200).json("contact request received");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
