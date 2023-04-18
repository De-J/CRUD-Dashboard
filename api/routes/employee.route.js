import express from "express";
import {
    getEmp,
    createEmp,
    updateEmp,
    deleteEmp
} from "../controllers/employee.controller.js";

const router = express.Router();

router.get("/get", getEmp);
router.post("/add", createEmp);
router.post("/update", updateEmp);
router.post("/del", deleteEmp);

export default router;
