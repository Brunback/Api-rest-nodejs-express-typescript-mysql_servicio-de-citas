import { Request, Response } from "express";
import person from "../services/person"; 


const getListadoPacientes = async (req: Request, res: Response) => {
  try {
    const pacientes = await person.getPersons();
    res.render('list-pacientes', { pacientes }); 
  } catch (e) {
    res.status(500).send("ERROR_GET_PACIENTES");
  }
};
const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await person.getPerson(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    res.status(500);
  res.send("ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await person.getPersons();
    res.send(response);
  } catch (e) {
    res.status(500);
    res.send("ERROR_GET_ITEMS");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await person.updatePerson(id, body);
    res.send(response);
  } catch (e) {
    console.error(e);
    res.status(500);
  res.send("ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  
  try { 
    const responseInsert = await person.insertPerson(body);
    res.status(201).json(responseInsert); 
  } catch (e) {
    res.status(500).send("ERROR_POST_ITEM");
  }
};


const deleteItem = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    await person.deletePerson(id);
    res.send(person.deletePerson);
  } catch (e) {
    res.status(500);
    res.send("ERROR_POST_ITEM");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem, getListadoPacientes }