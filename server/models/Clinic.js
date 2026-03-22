const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema({
  tndcRegistrationNo: { type: String, required: true, unique: true },
  ownerName: { type: String, required: true },
  clinicAddress: {
    building: { type: String, required: true },
    area: { type: String, required: true },
    pinCode: { type: String, required: true },
    state: { type: String, required: true }
  },
  clinicType: { type: String, required: true },
  alignerCompany: { type: String, required: true },
  zone: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Clinic", clinicSchema);
