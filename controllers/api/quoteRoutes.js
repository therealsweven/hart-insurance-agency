const path = require("path");
const router = require("express").Router();
const emails2 = require("../../utils/emails2");

router.post("/", (req, res) => {
  try {
    console.log(req.body);
    console.log(req.body.additional.email);
    emails2.sendQuoteConfirm(
      req.body.additional.email,
      req.body.additional.firstName
    );
    emails2.sendInquiry2Tina(req.body);
    res.status(200).json("quote request received");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
