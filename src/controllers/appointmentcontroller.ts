import { Request, Response } from "express";

async function generarCita(req: Request, res: Response) {
  try {
    // Realiza cualquier otra acción necesaria después de generar la cita

    res.status(200).json({ message: 'Cita generada correctamente' });
  } catch (error) {
    // Manejo de errores
    console.error(error);
    res.status(500).json({ error: 'Error al generar la cita' });
  }
}

export default generarCita;
