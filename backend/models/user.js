const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: [
            "Principal",
            "VicePrincipal",
            "Coordinator",
            "Teacher",
            "AdminStaff",
            "NonTeachingStaff"
        ],
        required: true
    },
    department: {
        type: String,
        required: true,
    },
    employee_id: {
        type: Number,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },

})



module.exports = mongoose.model('User', userSchema);