const axios = require('axios');

const API_URL = 'http://localhost:5000/api/clinics';

const testClinic = {
  tndcRegistrationNo: "TNDC12345",
  ownerName: "Dr. Akash",
  clinicAddress: {
    building: "Room 101, Star Building",
    area: "Anna Nagar",
    pinCode: "600040",
    state: "Tamil Nadu"
  },
  clinicType: "Dental Clinic",
  alignerCompany: "Align Tech"
};

async function runTests() {
  try {
    console.log("--- Testing Clinic Registration ---");
    const regRes = await axios.post(`${API_URL}/register`, testClinic);
    console.log("Response:", regRes.data);

    console.log("\n--- Testing Admin Fetch All ---");
    const allRes = await axios.get(`${API_URL}/admin/all`);
    console.log("Clinics found:", allRes.data.length);
    console.log("First clinic zone:", allRes.data[0].zone);

    const zone = allRes.data[0].zone;
    console.log(`\n--- Testing Admin Fetch Zone (${zone}) ---`);
    const zoneRes = await axios.get(`${API_URL}/admin/zone/${zone}`);
    console.log(`Clinics in ${zone}:`, zoneRes.data.length);

  } catch (error) {
    if (error.response) {
      console.error("Error Response:", error.response.data);
    } else {
      console.error("Error:", error.message);
    }
  }
}

runTests();
