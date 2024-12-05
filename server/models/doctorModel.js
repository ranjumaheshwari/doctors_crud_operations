import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    },
    location: {
        type: String,
        required: true,
    },
    hospital_name: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Doctor", doctorSchema); // Updated model name to 'Doctor'
