import { Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/authcontroller";

const router4 = Router();
router4.post("/register", registerCtrl);
router4.post("/login", loginCtrl);

export { router4 };
