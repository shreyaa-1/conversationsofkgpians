// models/Subscription.js
const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String },
    linkedin: { type: String, required: true }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
