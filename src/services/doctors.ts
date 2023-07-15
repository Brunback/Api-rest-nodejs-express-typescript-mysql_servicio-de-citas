import { Doctor } from "../interfaces/doctor";
import doctorModel from "../models/doctors";

const insertDoctor = async (item: Doctor) => {
  const responseInsert = await doctorModel.create({
    nombre: item.nombre,
    apellido: item.apellido,
    especialidad: item.especialidad,
    consultorio: item.consultorio,
    email: item.email,
  });
 
  return responseInsert;
};



const getDoctors= async () => {
  const responseItem = await doctorModel.findAll();
  return responseItem;
};

const getDoctor = async (id: string) => {
  const responseItem = await doctorModel.findByPk(id);
  return responseItem;
};

const updateDoctor = async (id: string, data: Doctor) => {
  const responseItem = await doctorModel.update(data, {
    where: { id },
    returning: true,
  });
  return responseItem[1][0];
};

const deleteDoctor = async (id: string) => {
  const responseItem = await doctorModel.destroy({ where: { id } });
  return responseItem;
};


export { insertDoctor, getDoctors, getDoctor, updateDoctor, deleteDoctor};
