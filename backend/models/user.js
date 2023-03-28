const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    gender: { type: String, required: true },
    availableOn: { type: String },
    company: { type: String },
    graduatedFrom: { type: String, required: true },
    profilePicture: { type: String },
    resume: { type: String },
});

module.exports = mongoose.model('User', userSchema);