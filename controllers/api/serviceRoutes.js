const path = require("path");
const router = require("express").Router();
const emails = require("../../utils/emails2");

// policy review request
router.post("/policy-review", (req, res) => {
  try {
    console.log(req.body);
    emails.sendPolicyReviewReqConfirm(req.body.email, req.body.name);
    emails.sendPolicyReviewReq2Tina(req.body);
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

// update contact request
router.post("/update-contact", (req, res) => {
  try {
    console.log(req.body);
    emails.sendContactUpdateReq2Tina(req.body);
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

// policy change request
router.post("/policy-change", (req, res) => {
  try {
    console.log(req.body);
    emails.sendPolicyChangeReq2Tina(req.body);
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

// proof of insurance request
router.post("/proof", (req, res) => {
  try {
    console.log(req.body);
    emails.sendProofReq2Tina(req.body);
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

// free consultation request
router.post("/consult", (req, res) => {
  try {
    console.log(req.body);
    emails.sendConsultReq2Tina(req.body);
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
