import express from "express";
import {
    findEmp,
    getEmp,
    createEmp,
    updateEmp,
    deleteEmp
} from "../controllers/employee.controller.js";

const router = express.Router();

router.get("/chart", findEmp);

router.get("/get", getEmp);
router.post("/add", createEmp);
router.post("/update", updateEmp);
router.post("/del", deleteEmp);

export default router;
