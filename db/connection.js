import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1); // Finaliza el proceso en caso de error
  }
};

export default connectDB;