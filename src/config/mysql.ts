import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'Consultas',
  logging: false,
});

/**async function testConnection() {
  try {
     sequelize.authenticate
  } catch (err) {
    
  }
}
  
testConnection();**/


export default sequelize;
