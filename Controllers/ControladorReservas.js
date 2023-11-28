import { ServicioReserva } from '../services/ServicioReserva.js';

export class ControladorReservas {
  constructor() {}

  /**
   * Registra una nueva reserva en la base de datos.
   * 
   * @param {Object} peticion - Objeto de solicitud HTTP con los datos de la reserva.
   * @param {Object} respuesta - Objeto de respuesta HTTP.
   */
  async registrarReserva(peticion, respuesta) {
    try {
      // 1. Esculcar los datos que se quieren usar para el registro
      let datosReservaRegistrar = peticion.body;

      // 2. Validar los datos
      if (!datosReservaRegistrar) {
        return respuesta.status(400).json({
          "mensaje": "Faltan datos obligatorios para el registro"
        });
      }

      // 3. Intentar guardar los datos en la base de datos
      // Implementa la lógica real para registrar reservas utilizando el servicio
      const servicioReserva = new ServicioReserva();
      const reservaRegistrada = await servicioReserva.registrarReserva(datosReservaRegistrar);

      // 4. Responder con la reserva registrada
      respuesta.status(200).json({
        "mensaje": "Éxito en la operación de registro de reserva",
        "datos": reservaRegistrada
      });
    } catch (error) {
      respuesta.status(500).json({
        "mensaje": "Fallamos en la operación de registro de reserva: " + error.message
      });
    }
  }

  /**
   * Busca y devuelve todas las reservas en la base de datos.
   * 
   * @param {Object} peticion - Objeto de solicitud HTTP.
   * @param {Object} respuesta - Objeto de respuesta HTTP.
   */
  async buscarReservas(peticion, respuesta) {
    try {
      let servicioReserva = new ServicioReserva();
      const reservas = await servicioReserva.buscarReservas(); // Cambia a buscarReservas
      respuesta.status(200).json({
        "mensaje": "Éxito en la operación de búsqueda de reservas",
        "datos": reservas
      });
    } catch (error) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operación de búsqueda de reservas: " + error
      });
    }
  }

  /**
   * Busca una reserva por su ID en la base de datos.
   * 
   * @param {Object} peticion - Objeto de solicitud HTTP con el ID de la reserva.
   * @param {Object} respuesta - Objeto de respuesta HTTP.
   */
  async buscarReservaPorId(peticion, respuesta) {
    try {
      // 1. Esculcar los parámetros de la petición
      let idReservaBuscar = peticion.params.id;

      // 2. Validar el dato de entrada
      if (!idReservaBuscar) {
        return respuesta.status(400).json({
          "mensaje": "Falta el parámetro de ID"
        });
      }

      // 3. Implementa la lógica para buscar una reserva por ID en la base de datos utilizando el servicio
      const servicioReserva = new ServicioReserva();
      const reservaEncontrada = await servicioReserva.buscarReserva(idReservaBuscar);

      // 4. Responder con la reserva encontrada
      respuesta.status(200).json({
        "mensaje": "Éxito en la operación de búsqueda de reserva por ID",
        "datos": reservaEncontrada
      });
    } catch (error) {
      respuesta.status(500).json({
        "mensaje": "Fallamos en la operación de búsqueda de reserva por ID: " + error.message
      });
    }
  }

  /**
   * Modifica una reserva en la base de datos.
   * 
   * @param {Object} peticion - Objeto de solicitud HTTP con el ID y los datos de la reserva a modificar.
   * @param {Object} respuesta - Objeto de respuesta HTTP.
   */
  async modificarReserva(peticion, respuesta) {
    try {
      // 1. Esculcar los parámetros de la petición
      let idReservaModificar = peticion.params.id;
      let datosReservaModificar = peticion.body;

      // 2. Validar los datos
      if (!idReservaModificar || !datosReservaModificar) {
        return respuesta.status(400).json({
          "mensaje": "Falta el parámetro de ID o los datos a modificar"
        });
      }

      // 3. Implementa la lógica para modificar una reserva en la base de datos utilizando el servicio
      const servicioReserva = new ServicioReserva();
      const reservaModificada = await servicioReserva.modificarReserva(idReservaModificar, datosReservaModificar);

      // 4. Responder con la reserva modificada
      respuesta.status(200).json({
        "mensaje": "Éxito en la operación de modificación de reserva",
        "datos": reservaModificada
      });
    } catch (error) {
      respuesta.status(500).json({
        "mensaje": "Fallamos en la operación de modificación de reserva: " + error.message
      });
    }
  }

  /**
   * Borra una reserva en la base de datos por su ID.
   * 
   * @param {Object} peticion - Objeto de solicitud HTTP con el ID de la reserva a borrar.
   * @param {Object} respuesta - Objeto de respuesta HTTP.
   */
  async borrarReserva(peticion, respuesta) {
    try {
      // 1. Esculcar los parámetros de la petición
      let idReservaBorrar = peticion.params.id;

      // 2. Validar el dato de entrada
      if (!idReservaBorrar) {
        return respuesta.status(400).json({
          "mensaje": "Falta el parámetro de ID"
        });
      }

      // 3. Implementa la lógica para borrar una reserva por ID en la base de datos utilizando el servicio
      const servicioReserva = new ServicioReserva();
      await servicioReserva.borrarReserva(idReservaBorrar);

      // 4. Responder con un mensaje de éxito
      respuesta.status(200).json({
        "mensaje": "Éxito en la operación de borrado de reserva"
      });
    } catch (error) {
      respuesta.status(500).json({
        "mensaje": "Fallamos en la operación de borrado de reserva: " + error.message
      });
    }
  }
}
