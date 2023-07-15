import {  Router } from "express";
import { getItems, getItem, postItem, updateItem, deleteItem } from "../controllers/doctorcontroller";
import { logMiddleware  } from "../middleware/log";
const router2 = Router();

router2.get("/doctors", getItems);
router2.get("/doctors/:id",logMiddleware, getItem);
router2.post("/doctors", postItem);
router2.put("/doctors/:id", updateItem);
router2.delete("/doctors/:id", deleteItem);

export { router2 };