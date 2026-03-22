const Clinic = require("../models/Clinic");

const getZoneFromPin = (pinCode) => {
  // Simple logic: first 3 digits as zone
  if (pinCode && pinCode.length >= 3) {
    return `Zone-${pinCode.substring(0, 3)}`;
  }
  return "Unknown";
};

exports.registerClinic = async (req, res) => {
  try {
    const { tndcRegistrationNo, ownerName, clinicAddress, clinicType, alignerCompany } = req.body;

    const zone = getZoneFromPin(clinicAddress.pinCode);

    const newClinic = new Clinic({
      tndcRegistrationNo,
      ownerName,
      clinicAddress,
      clinicType,
      alignerCompany,
      zone
    });

    await newClinic.save();
    res.status(201).json({ message: "Clinic registered successfully", clinic: newClinic });
  } catch (error) {
    console.error("Error registering clinic:", error);
    res.status(500).json({ error: "Failed to register clinic" });
  }
};

exports.getAllClinics = async (req, res) => {
  try {
    const clinics = await Clinic.find().sort({ createdAt: -1 });
    res.status(200).json(clinics);
  } catch (error) {
    console.error("Error fetching clinics:", error);
    res.status(500).json({ error: "Failed to fetch clinics" });
  }
};

exports.getClinicsByZone = async (req, res) => {
  try {
    const { zone } = req.params;
    const clinics = await Clinic.find({ zone }).sort({ createdAt: -1 });
    res.status(200).json(clinics);
  } catch (error) {
    console.error("Error fetching clinics by zone:", error);
    res.status(500).json({ error: "Failed to fetch clinics by zone" });
  }
};
