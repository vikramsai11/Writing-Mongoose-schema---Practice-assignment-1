const mongoose = require('mongoose');

// Define Profile Schema
const ProfileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true }
});

// Define User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: [String], default: ['user'] }, // Array of roles (e.g., ['user', 'admin'])
  profile: ProfileSchema, // Embedded profile schema
  lastLogin: { type: Date, default: Date.now } // Tracks last login
});

// Create and export the model
const User = mongoose.model('User', UserSchema);
module.exports = User;