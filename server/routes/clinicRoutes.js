const express = require("express");
const router = express.Router();
const clinicController = require("../controllers/clinicController");

router.post("/register", clinicController.registerClinic);
router.get("/admin/all", clinicController.getAllClinics);
router.get("/admin/zone/:zone", clinicController.getClinicsByZone);

module.exports = router;
