import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/mysql';

class UserModel extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
  public name!: string;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Auth',
  }
);

export default UserModel;
