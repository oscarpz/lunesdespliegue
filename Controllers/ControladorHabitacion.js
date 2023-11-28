import { ServicioHabitacion } from '../services/ServicioHabitacion.js';

export class ControladorHabitacion {
  constructor() {}

  /**
   * Registra una nueva habitación en la base de datos.
   * 
   * @param {Object} peticion - Objeto de solicitud HTTP con los datos de la habitación.
   * @param {Object} respuesta - Objeto de respuesta HTTP.
   */
  async registrarHabitacion(peticion, respuesta) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      // 1. Lo primero que se debe hacer para registrar
      // es escudriñar los datos que se quieren usar para el registro
      let datosHabitacionRegistrar = peticion.body;

      // 2. Validar los datos
      if (!datosHabitacionRegistrar || !datosHabitacionRegistrar.nombre || !datosHabitacionRegistrar.costo) {
        return respuesta.status(400).json({
          "mensaje": "Faltan datos obligatorios para el registro"
        });
      }

      // 3. Intentar guardar los datos
      await servicioHabitacion.registrarHabitacion(datosHabitacionRegistrar);
      // 4. Responder
      respuesta.status(200).json({
        "mensaje": "Éxito en la operación de guardado",
        "datos": datosHabitacionRegistrar,
      });
    } catch (error) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operación de guardado" + error
      });
    }
  }

  /**
   * Busca y devuelve todas las habitaciones en la base de datos.
   * 
   * @param {Object} peticion - Objeto de solicitud HTTP.
   * @param {Object} respuesta - Objeto de respuesta HTTP.
   */
  async buscarHabitaciones(peticion, respuesta) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      // Paso 1. Intentar buscar los datos en BD
      // Paso 2. Responder
      respuesta.status(200).json({
        "mensaje": "Éxito en la operación de búsqueda",
        "datos": await servicioHabitacion.buscarHabitaciones()
      });

    } catch (error) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operación de búsqueda" + error
      });
    }
  }

  /**
   * Busca una habitación por su ID en la base de datos.
   * 
   * @param {Object} peticion - Objeto de solicitud HTTP con el ID de la habitación.
   * @param {Object} respuesta - Objeto de respuesta HTTP.
   */
  async buscarHabitacionPorId(peticion, respuesta) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      // 1. Esculcar los parámetros de la petición
      let idHabitacionBuscar = peticion.params.id;
      // 2. Validar el Dato de entrada
      if (!idHabitacionBuscar) {
        return respuesta.status(400).json({
          "mensaje": "Falta el parámetro de ID"
        });
      }
      // 3. Intento buscar el dato en BD
      // 4. Responder
      respuesta.status(200).json({
        "mensaje": "Éxito en la operación de búsqueda",
        "datos": await servicioHabitacion.buscarHabitacion(idHabitacionBuscar)
      });
    } catch (error) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operación de búsqueda" + error
      });
    }
  }

  /**
   * Modifica una habitación en la base de datos.
   * 
   * @param {Object} peticion - Objeto de solicitud HTTP con el ID y los datos de la habitación a modificar.
   * @param {Object} respuesta - Objeto de respuesta HTTP.
   */
  async modificarHabitacion(peticion, respuesta) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      // Paso 1. traigo el id a editar de la petición
      let idHabitacionModificar = peticion.params.id;
      let datosHabitacionModificar = peticion.body;
      // 2. Validar los datos
      if (!idHabitacionModificar || !datosHabitacionModificar) {
        return respuesta.status(400).json({
          "mensaje": "Falta el parámetro de ID o los datos a modificar"
        });
      }
      // 3. Intentar buscar y modificar en BD
      await servicioHabitacion.modificarHabitacion(idHabitacionModificar, datosHabitacionModificar);
      // 4. Responder
      respuesta.status(200).json({
        "mensaje": "Éxito en la operación de Modificación",
        "datos": datosHabitacionModificar
      });
    } catch (error) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operación de edición" + error
      });
    }
  }

  /**
   * Borra una habitación en la base de datos por su ID.
   * 
   * @param {Object} peticion - Objeto de solicitud HTTP con el ID de la habitación a borrar.
   * @param {Object} respuesta - Objeto de respuesta HTTP.
   */
  async borrarHabitacion(peticion, respuesta) {
    try {
      let idHabitacionBorrar = peticion.params.id;
      if (!idHabitacionBorrar) {
        return respuesta.status(400).json({
          "mensaje": "Falta el parámetro de ID"
        });
      }

      let servicioHabitacion = new ServicioHabitacion();
      await servicioHabitacion.borrarHabitacion(idHabitacionBorrar);
      respuesta.status(200).json({
        "mensaje": "Éxito en la operación de borrado"
      });
    } catch (error) {
      console.error("Error al borrar habitación:", error);
      respuesta.status(500).json({
        "mensaje": "Fallamos en la operación de borrado"
      });
    }
  }
}
