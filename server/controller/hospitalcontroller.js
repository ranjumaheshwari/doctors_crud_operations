import Doctor from "../models/doctorModel.js"; // Updated import to new doctor model

// Create a new doctor
export const createDoctor = async (req, res) => {
    try {
        const doctorData = new Doctor(req.body);
        await doctorData.save();
        res.status(200).json({ msg: "Doctor created successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all doctors
export const getAllDoctors = async (req, res) => {
    try {
        const doctorData = await Doctor.find();
        res.status(200).json(doctorData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get one doctor by ID
export const getOneDoctor = async (req, res) => {
    try {
        const id = req.params.id;
        const doctorData = await Doctor.findById(id);
        if (!doctorData) {
            return res.status(404).json({ msg: "Doctor not found" });
        }
        res.status(200).json({ msg: "Doctor found" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update doctor by ID
export const updateDoctor = async (req, res) => {
    try {
        const id = req.params.id;
        const doctorExist = await Doctor.findById(id);
        if (!doctorExist) {
            return res.status(404).json({ msg: "Doctor not found" });
        }
        await Doctor.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: "Doctor updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const removeDoctor = async (req, res) => {
    try {
        const id = req.params.id;
        const doctorExist = await Doctor.findById(id);
        if (!doctorExist) {
            return res.status(404).json({ msg: "Doctor not found" });
        }
        await Doctor.findOneAndDelete(id); //req.body, { new: true });
        res.status(200).json({ msg: "Doctor deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
