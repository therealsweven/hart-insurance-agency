const router = require("express").Router();

// report a claim
router.get("/claim", (req, res) => {
  try {
    res.status(200).render("claim");
  } catch (err) {
    res.status(500).json(err);
  }
});
// policy review
router.get("/policy-review", (req, res) => {
  try {
    res.status(200).render("policyReview");
  } catch (err) {
    res.status(500).json(err);
  }
});
// make a payment
router.get("/payment", (req, res) => {
  try {
    res.status(200).render("payment");
  } catch (err) {
    res.status(500).json(err);
  }
});
// update contact info
router.get("/update-contact-info", (req, res) => {
  try {
    res.status(200).render("updateContactInfo");
  } catch (err) {
    res.status(500).json(err);
  }
});
// policy changes
router.get("/policy-changes", (req, res) => {
  try {
    res.status(200).render("policyChanges");
  } catch (err) {
    res.status(500).json(err);
  }
});
// proof of insurance
router.get("/proof-of-insurance", (req, res) => {
  try {
    res.status(200).render("proofOfInsurance");
  } catch (err) {
    res.status(500).json(err);
  }
});
// contact my carrier
router.get("/contact-carrier", (req, res) => {
  try {
    res.status(200).render("contactCarrier");
  } catch (err) {
    res.status(500).json(err);
  }
});
// free consultation
router.get("/consultation", (req, res) => {
  try {
    res.status(200).render("consultation");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
