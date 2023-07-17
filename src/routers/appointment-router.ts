import { Router } from "express";
import { logMiddleware  } from "../middleware/log";
import { getItem,getItems,updateItem,deleteItem,postItem} from "../controllers/appointmentcontroller";
const router3 = Router();


router3.get("/appointment", logMiddleware ,getItems);
router3.get("/appointment/:id", logMiddleware ,getItem);
router3.post("/appointment", logMiddleware ,postItem);
router3.put("/appointment/:id",logMiddleware , updateItem);
router3.delete("/appointment/:id", logMiddleware ,deleteItem);

export{router3}