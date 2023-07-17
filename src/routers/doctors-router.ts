import {  Router } from "express";
import { getItems, getItem, postItem, updateItem, deleteItem } from "../controllers/doctorcontroller";
import { logMiddleware  } from "../middleware/log";
const router2 = Router();

router2.get("/doctors",logMiddleware , getItems);
router2.get("/doctors/:id",logMiddleware, getItem);
router2.post("/doctors",logMiddleware , postItem);
router2.put("/doctors/:id",logMiddleware , updateItem);
router2.delete("/doctors/:id", logMiddleware , deleteItem);

export { router2 };