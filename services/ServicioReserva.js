import { modeloReserva } from '../Models/modeloReserva.js';

// Importa el modelo 'modeloReserva' desde el archivo correspondiente para poder interactuar con la base de datos.

export class ServicioReserva {
  constructor() {}

  // Constructor de la clase ServicioReserva.

  async registrarReserva(datos) {
    try {
      const reservaNueva = new modeloReserva(datos);

      // Crea una nueva instancia de 'modeloReserva' utilizando los datos proporcionados.

      return await reservaNueva.save();

      // Intenta guardar la nueva reserva en la base de datos y devuelve la reserva guardada.

    } catch (error) {
      throw error;

      // Captura cualquier error que ocurra durante la operación y lo propaga para su manejo en niveles superiores.

    }
  }

  async buscarReservas() {
    try {
      const reservas = await modeloReserva.find();

      // Busca todas las reservas en la base de datos utilizando el modelo 'modeloReserva'.

      return reservas;

      // Devuelve un arreglo de reservas encontradas.

    } catch (error) {
      throw error;

      // Captura cualquier error que ocurra durante la operación y lo propaga para su manejo en niveles superiores.

    }
  }

  async buscarReserva(id) {
    try {
      const reserva = await modeloReserva.findById(id);

      // Busca una reserva en la base de datos por su ID utilizando el modelo 'modeloReserva'.

      return reserva;

      // Devuelve la reserva encontrada.

    } catch (error) {
      throw error;

      // Captura cualquier error que ocurra durante la operación y lo propaga para su manejo en niveles superiores.

    }
  }

  async modificarReserva(id, datos) {
    try {
      return await modeloReserva.findByIdAndUpdate(id, datos, { new: true });

      // Intenta modificar una reserva en la base de datos utilizando su ID y los nuevos datos proporcionados. El argumento { new: true } indica que se debe devolver la versión actualizada de la reserva.

    } catch (error) {
      throw error;

      // Captura cualquier error que ocurra durante la operación y lo propaga para su manejo en niveles superiores.

    }
  }

  async borrarReserva(id) {
    try {
      await modeloReserva.findByIdAndDelete(id);

      // Intenta eliminar una reserva de la base de datos utilizando su ID.

    } catch (error) {
      throw error;

      // Captura cualquier error que ocurra durante la operación y lo propaga para su manejo en niveles superiores.

    }
  }
}
