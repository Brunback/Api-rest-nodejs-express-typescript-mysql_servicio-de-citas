import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mysql';

interface AppointmentModelAttributes {
  id: number;
  person_id: number;
  doctores_id: number;
  person_nombre: string;
  person_apellido: string;
  doctores_nombre: string;
  doctores_apellido: string;}

class AppointmentModel extends Model<AppointmentModelAttributes> {}

AppointmentModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: 'id',
      },
    },
    doctores_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      key: 'id',
    },
    person_nombre: '',
    person_apellido: '',
    doctores_nombre: '',
    doctores_apellido: ''
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
