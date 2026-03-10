const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');

async function checkData() {
  await mongoose.connect(process.env.MONGO_URI);
  const users = await User.find().limit(5);
  console.log('Sample Users:', JSON.stringify(users, null, 2));
  
  const roles = await User.distinct('role');
  console.log('Unique Roles in DB:', roles);
  
  await mongoose.connection.close();
}

checkData();
