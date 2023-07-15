import { Router } from "express";
import { getItems, getItem, postItem, updateItem, deleteItem,getListadoPacientes} from "../controllers/personcontroller";
import { logMiddleware  } from "../middleware/log";
const router = Router();

router.get("/person", getItems);
router.get("/person/:id", logMiddleware ,getItem);
router.post("/person", postItem);
router.put("/person/:id", updateItem);
router.delete("/person/:id", deleteItem);

export { router };
