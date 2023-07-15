import { Person } from "../interfaces/person";
import PersonModel from "../models/person";

const insertPerson = async (item: Person) => {
  const responseInsert = await PersonModel.create({
    nombre: item.nombre,
    cedula: item.cedula,
    apellido: item.apellido,
    edad: item.edad,
    telefono: item.telefono,
  });
 
  return responseInsert;
};



const getPersons = async () => {
  const responseItem = await PersonModel.findAll();
  return responseItem;
};

const getPerson = async (id: string) => {
  const responseItem = await PersonModel.findByPk(id);
  return responseItem;
};

const updatePerson = async (id: string, data: Person) => {
  const responseItem = await PersonModel.update(data, {
    where: { id },
    returning: true,
  });
  return responseItem[1][0];
};

const deletePerson = async (id: string) => {
  const responseItem = await PersonModel.destroy({ where: { id } });
  return responseItem;
};

export default { insertPerson, getPersons, getPerson, updatePerson, deletePerson };
