import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mysql';

class DoctorModel extends Model {
  public id!: number;
  public nombre!: string;
  public apellido!: string;
  public especialidad!: string;
  public consultorio!: string;
  public email!: string;
}

DoctorModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    especialidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    consultorio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'DoctorModel',
    tableName: 'doctores',
    timestamps: false,
    underscored: true,
  }
);

export default DoctorModel;
