import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mysql';

interface AppointmentModelAttributes {
  id: number;
  person_cedula: number;
  doctores_especialidad: string;
  person_nombre: string;
  person_apellido: string;
  doctores_nombre: string;
  doctores_apellido: string;
  doctores_consultorio:string;
}

class AppointmentModel extends Model<AppointmentModelAttributes> {}

AppointmentModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    person_cedula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PersonModel',
        key: 'id',
      },
    },
    doctores_especialidad: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'DoctorModel', 
        key: 'id',
      },
    },
    person_nombre: {
      type: DataTypes.STRING,
      references: {
        model: 'PersonModel',
        key: 'id',
      },
    }, 
    person_apellido: {
      type: DataTypes.STRING,
      references: {
        model: 'PersonModel',
        key: 'id',
      },
    },
    doctores_nombre: {
      type: DataTypes.STRING,
      references: {
        model: 'DoctorModel', 
        key: 'id',
      }, 
    },
    doctores_apellido: {
      type: DataTypes.STRING,
      references: {
        model: 'DoctorModel', 
        key: 'id',
      }, 
    },
    doctores_consultorio: {
      type: DataTypes.STRING,
      references: {
        model: 'DoctorModel', 
        key: 'id',
      },
    }
  },
  {
    sequelize,
    modelName: 'AppointmentModel',
    tableName: 'citas', // Nombre de la tabla en la base de datos
    timestamps: false,
    underscored: true,
  }
);

export default AppointmentModel;
