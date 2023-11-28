import mongoose from "mongoose";

// Importa el paquete mongoose necesario para trabajar con MongoDB en Node.js.

const Schema = mongoose.Schema;

// Crea un nuevo esquema de MongoDB para las reservas.

const ReservaSchema = new Schema({
  fechaEntrada: {
    type: String,
    required: true,
  },
  fechaSalida: {
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

// Crea un modelo de MongoDB para las reservas a partir del esquema definido.

export const modeloReserva = mongoose.model('Reserva', ReservaSchema);
