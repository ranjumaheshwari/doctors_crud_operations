import express from 'express';
import { getAllDoctors, getOneDoctor, updateDoctor, createDoctor, removeDoctor } from "../controller/hospitalcontroller.js";

const route = express.Router();

route.post("/create", createDoctor);
route.get("/getalldoctors", getAllDoctors);
route.get("/getonedoctor/:id", getOneDoctor); // Updated route to reflect 'doctor'
route.put("/update/:id", updateDoctor);
route.delete("/remove/:id",removeDoctor);

export default route;
