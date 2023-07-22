import "dotenv/config";
import express from "express";
import cors from "cors";
import sequelize from './config/mysql';
import { router } from "./routers/person-router";
import { router2} from "./routers/doctors-router";
import { router4 } from "./routers/auth-router";
import { router3} from "./routers/appointment-router";

const app = express();
app.use(express.json());
app.options('*', cors());
const corsOptions = {
  origin: 'http://127.0.0.1:5500'
};

app.use(cors(corsOptions));
sequelize.sync()
  .then(() => {
    console.log('Conexión establecida con la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });
  app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
  });
app.use(router);
app.use(router2);
app.use(router3);
app.use(router4);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listo por el puerto ${PORT}`));
