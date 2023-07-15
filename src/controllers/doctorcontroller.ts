import { Request, Response } from "express";
import {
    insertDoctor,
    getDoctors, 
    getDoctor,
    updateDoctor, 
    deleteDoctor
} from "../services/doctors"; 

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getDoctor(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    res.status(500);
  res.send("ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getDoctors();
    res.send(response);
  } catch (e) {
    res.status(500);
    res.send("ERROR_GET_ITEMS");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateDoctor(id, body);
    res.send(response);
  } catch (e) {
    console.error(e);
    res.status(500);
  res.send("ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  
  try {
   await insertDoctor(body);
    res.status(201).json(insertDoctor)
  } catch (e) {
    res.status(500).send("ERROR_POST_ITEM");
  }
};


const deleteItem = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    await deleteDoctor(id);
    res.send(deleteDoctor);
  } catch (e) {
    res.status(500);
    res.send("ERROR_POST_ITEM");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem }