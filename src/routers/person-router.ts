import { Router } from "express";
import { getItems, getItem, postItem, updateItem, deleteItem,getListadoPacientes} from "../controllers/personcontroller";
import { logMiddleware  } from "../middleware/log";
const router = Router();

router.get("/person", logMiddleware ,getItems);
router.get("/person/:id", logMiddleware ,getItem);
router.post("/person",logMiddleware , postItem);
router.put("/person/:id", logMiddleware ,updateItem);
router.delete("/person/:id",logMiddleware , deleteItem);

export { router };
