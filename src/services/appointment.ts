import { Appointment } from "../interfaces/Appointment";
import PersonModel from "../models/person";
import DoctorModel from "../models/doctors";
import AppointmentModel from "../models/appointments";
import { Op } from 'sequelize';

const buscarPaciente = async (cedula: number) => {
  const paciente = await PersonModel.findOne({
    where: {
      cedula: cedula,
      email: { [Op.ne]: undefined },
    },
  });

  return paciente;
};

const buscarDoctor = async (especialidad: string) => {
  const doctor = await DoctorModel.findOne({
    where: {
      especialidad: especialidad,
      email: { [Op.ne]: undefined },
    },
  });

  return doctor;
};
const crearCita = async (pacienteId: number, doctorId: number) => {
    const paciente = await PersonModel.findByPk(pacienteId);
    const doctor = await DoctorModel.findByPk(doctorId);
  
    const responseInsert = await AppointmentModel.create({
        id: 0,
        person_id: pacienteId,
        doctores_id: doctorId,
        person_nombre: paciente?.nombre ?? '',
        person_apellido: paciente?.apellido ?? '',
        doctores_nombre: doctor?.nombre ?? '',
        doctores_apellido: doctor?.apellido ?? '',
    });
  
    return responseInsert;
  };
  
  export { buscarPaciente , buscarDoctor , crearCita }