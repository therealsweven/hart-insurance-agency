const router = require("express").Router();
//***** AUTOS *****
// autos quotes
router.get("/autos", (req, res) => {
  try {
    res.status(200).render("autoQuotes");
  } catch (err) {
    res.status(500).json(err);
  }
});

// auto quote
router.get("/auto", (req, res) => {
  try {
    res.status(200).render("autoQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});
// moto quote
router.get("/moto", (req, res) => {
  try {
    res.status(200).render("motoQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});
// atv quote
router.get("/atv", (req, res) => {
  try {
    res.status(200).render("atvQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});
// RV quote
router.get("/RV", (req, res) => {
  try {
    res.status(200).render("RVQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});
// boat quote
router.get("/boat", (req, res) => {
  try {
    res.status(200).render("boatQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});
// classicCar quote
router.get("/classicCar", (req, res) => {
  try {
    res.status(200).render("classicCarQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});

//***** PROPERTY *****

// property quotes
router.get("/property", (req, res) => {
  try {
    res.status(200).render("propertyQuotes");
  } catch (err) {
    res.status(500).json(err);
  }
});

// homeowners quote
router.get("/homeowners", (req, res) => {
  try {
    res.status(200).render("homeownersQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});
// landlord quote
router.get("/landlord", (req, res) => {
  try {
    res.status(200).render("landlordQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});
// condo quote
router.get("/condo", (req, res) => {
  try {
    res.status(200).render("condoQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});
// renters quote
router.get("/renters", (req, res) => {
  try {
    res.status(200).render("rentersQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});

//***** BUSINESS *****

// business quotes
router.get("/business", (req, res) => {
  try {
    res.status(200).render("businessQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});

// commercialGL quote
router.get("/commercialGL", (req, res) => {
  try {
    res.status(200).render("commercialGLQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});

// workersComp quote
router.get("/workersComp", (req, res) => {
  try {
    res.status(200).render("workersCompQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});

// commercialUmbrella quote
router.get("/commercialUmbrella", (req, res) => {
  try {
    res.status(200).render("commercialUmbrellaQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});

// inlandMarine quote
router.get("/inlandMarine", (req, res) => {
  try {
    res.status(200).render("inlandMarineQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});

// cyber quote
router.get("/cyber", (req, res) => {
  try {
    res.status(200).render("cyberQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});

// businessProperty quote
router.get("/businessProperty", (req, res) => {
  try {
    res.status(200).render("businessPropertyQuote");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
