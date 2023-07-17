import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mysql';

class PersonModel extends Model {
  public id!: number;
  public nombre!: string;
  public cedula!: number;
  public apellido!: string;
  public edad!: number;
  public telefono!: number;
}

PersonModel.init(
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
    cedula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Otros campos del modelo
  },
  {
    sequelize,
    modelName: 'PersonModel',
    tableName: 'person',
    timestamps: false,
    underscored: true,
  }
);

export default PersonModel;
