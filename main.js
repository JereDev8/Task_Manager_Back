import express from 'express'
import dotenv from 'dotenv'
import router from './routes/tasks.route.js';
import connectDB from './db/connection.js';
import cors from 'cors'
import SwaggerUI from 'swagger-ui-express'
import specs from './swagger.js';

dotenv.config();

const corsOptions = {
    origin: 'http://localhost:5173', // Especifica el origen permitido
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization', // Encabezados permitidos
  };
  

connectDB()
const app = express();

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(specs))
 
// Rutas
app.use('/api', router)

// Puerto y arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});