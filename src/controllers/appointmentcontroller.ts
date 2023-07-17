import { Request, Response } from "express";
import appointment from "../services/appointment";


const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await appointment.getAppointment(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    res.status(500);
  res.send("ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await appointment.getAppointments();
    res.send(response);
  } catch (e) {
    res.status(500);
    res.send("ERROR_GET_ITEMS");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await appointment.updateAppointment(id, body);
    res.send(response);
  } catch (e) {
    console.error(e);
    res.status(500);
  res.send("ERROR_UPDATE_ITEM");
  }
};
const postItem = async (req: Request, res: Response) => {
  try {
    const { cedula, especialidad } = req.body;

    const paciente = await appointment.searchPerson(cedula);
    const doctor = await appointment.searchDoctor(especialidad);

    if (!paciente) {
      return res.status(404).json({ error: "Paciente no encontrado" });
    }

    if (!doctor) {
      return res.status(404).json({ error: "Doctor no encontrado" });
    }

    const responseInsert = await appointment.makeAppointment(cedula, especialidad);
    res.status(201).json(responseInsert);
  } catch (e) {
    console.log(e);
    res.status(500).send("ERROR_POST_ITEM");
  }
};
const deleteItem = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    await appointment.deleteAppointment(id);
    res.send(appointment.deleteAppointment);
  } catch (e) {
    res.status(500);
    res.send("ERROR_POST_ITEM");
  }
};


export { postItem, getItem,getItems,updateItem,deleteItem};

