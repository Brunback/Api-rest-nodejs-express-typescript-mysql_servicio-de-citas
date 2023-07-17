import { Appointment } from "../interfaces/Appointment";
import PersonModel from "../models/person";
import DoctorModel from "../models/doctors";
import AppointmentModel from "../models/appointments";


const searchPerson = async (cedula: number) => {
  const paciente = await PersonModel.findOne({
    where: {
      cedula: cedula,
    },
  });

  return paciente;
};

const searchDoctor = async (especialidad: string) => {
  const doctor = await DoctorModel.findOne({
    where: {
      especialidad: especialidad,
    },
  });

  return doctor;
};

const makeAppointment = async (cedula: number, especialidad: string) => {
  const paciente = await PersonModel.findOne({
    where: {
      cedula: cedula,
    },
  });
  const doctor = await DoctorModel.findOne({
    where: {
      especialidad: especialidad,
    },
  });

  const responseInsert = await AppointmentModel.create({
    id: 0,
    person_cedula: cedula,
    doctores_especialidad: especialidad,
    person_nombre: paciente?.nombre ?? '',
    person_apellido: paciente?.apellido ?? '',
    doctores_nombre: doctor?.nombre ?? '',
    doctores_apellido: doctor?.apellido ?? '',
    doctores_consultorio: doctor?.consultorio ?? '',
  });

  return responseInsert;
};

const getAppointments = async () => {
  const responseItem = await AppointmentModel.findAll();
  return responseItem;
};

const getAppointment= async (id: string) => {
  const responseItem = await AppointmentModel.findByPk(id);
  return responseItem;
};

const updateAppointment= async (id: string, data: Appointment) => {
  const responseItem = await AppointmentModel.update(data, {
    where: { id },
    returning: true,
  });
  return responseItem[1][0];
};

const deleteAppointment= async (id: string) => {
  const responseItem = await AppointmentModel.destroy({ where: { id } });
  return responseItem;
};



export default { searchPerson, searchDoctor, makeAppointment,getAppointments,getAppointment,updateAppointment, deleteAppointment};
