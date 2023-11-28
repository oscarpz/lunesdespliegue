import { modeloHabitacion } from '../Models/modeloHabitacion.js';

// Importa el modelo 'modeloHabitacion' desde el archivo correspondiente para poder interactuar con la base de datos.

export class ServicioHabitacion {
  constructor() {}

  // Constructor de la clase ServicioHabitacion.

  async registrarHabitacion(datos) {
    try {
      const habitacionNueva = new modeloHabitacion(datos);

      // Crea una nueva instancia de 'modeloHabitacion' utilizando los datos proporcionados.

      return await habitacionNueva.save();

      // Intenta guardar la nueva habitación en la base de datos y devuelve la habitación guardada.

    } catch (error) {
      throw error;

      // Captura cualquier error que ocurra durante la operación y lo propaga para su manejo en niveles superiores.

    }
  }

  async buscarHabitaciones() {
    try {
      const habitaciones = await modeloHabitacion.find();

      // Busca todas las habitaciones en la base de datos utilizando el modelo 'modeloHabitacion'.

      return habitaciones;

      // Devuelve un arreglo de habitaciones encontradas.

    } catch (error) {
      throw error;

      // Captura cualquier error que ocurra durante la operación y lo propaga para su manejo en niveles superiores.

    }
  }

  async buscarHabitacion(id) {
    try {
      const habitacion = await modeloHabitacion.findById(id);

      // Busca una habitación en la base de datos por su ID utilizando el modelo 'modeloHabitacion'.

      return habitacion;

      // Devuelve la habitación encontrada.

    } catch (error) {
      throw error;

      // Captura cualquier error que ocurra durante la operación y lo propaga para su manejo en niveles superiores.

    }
  }

  async modificarHabitacion(id, datos) {
    try {
      return await modeloHabitacion.findByIdAndUpdate(id, datos, { new: true });

      // Intenta modificar una habitación en la base de datos utilizando su ID y los nuevos datos proporcionados. El argumento { new: true } indica que se debe devolver la versión actualizada de la habitación.

    } catch (error) {
      throw error;

      // Captura cualquier error que ocurra durante la operación y lo propaga para su manejo en niveles superiores.

    }
  }

  async borrarHabitacion(id) {
    try {
      await modeloHabitacion.findByIdAndDelete(id);

      // Intenta eliminar una habitación de la base de datos utilizando su ID.

    } catch (error) {
      throw error;

      // Captura cualquier error que ocurra durante la operación y lo propaga para su manejo en niveles superiores.

    }
  }
}
