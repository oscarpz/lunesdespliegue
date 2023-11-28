import mongoose from "mongoose";

// Define un nuevo esquema de MongoDB para las habitaciones.
const Schema = mongoose.Schema;
const HabitacionSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  costo: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  capacidad: {
    type: Number,
    required: true,
  },
});

// Crea un modelo de MongoDB para las habitaciones a partir del esquema definido.
export const modeloHabitacion = mongoose.model('Habitacion', HabitacionSchema);

