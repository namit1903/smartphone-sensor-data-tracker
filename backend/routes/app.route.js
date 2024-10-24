import express from "express";
import gatherData from "../controllers/gatherData.controller.js";
import registerUser from "../controllers/register.controller.js";
const router=express.Router();

router.post('/accelerometer-data',gatherData);
router.post('register-user',registerUser);
export default router;