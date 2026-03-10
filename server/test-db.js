const mongoose = require('mongoose');
require('dotenv').config();

async function test() {
  console.log('Testing connection to:', process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000
    });
    console.log('SUCCESS: Connected to MongoDB');
    
    // Check if we can query the User collection
    const User = require('./models/User');
    const count = await User.countDocuments();
    console.log('SUCCESS: User count =', count);
    
    await mongoose.connection.close();
  } catch (err) {
    console.error('FAILURE: Could not connect to MongoDB:', err.message);
    process.exit(1);
  }
}

test();
