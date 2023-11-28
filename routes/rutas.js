import express from 'express';

// Importa el paquete 'express' necesario para crear rutas y definir un enrutador.

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js';
import { ControladorReservas } from '../Controllers/ControladorReservas.js';

// Importa los controladores que manejarán las solicitudes a las rutas de Habitaciones y Reservas.

const router = express.Router();

// Crea un enrutador utilizando express.Router(). Este enrutador se utilizará para definir las rutas de la aplicación.

const controladorHabitacion = new ControladorHabitacion();
const controladorReservas = new ControladorReservas();

// Crea instancias de los controladores de Habitaciones y Reservas para manejar las solicitudes entrantes.

// Rutas para Habitaciones
router.post('/api/habitaciones', controladorHabitacion.registrarHabitacion);
router.get('/api/habitaciones/:id', controladorHabitacion.buscarHabitacionPorId);
router.get('/api/habitaciones', controladorHabitacion.buscarHabitaciones);
router.put('/api/habitaciones/:id', controladorHabitacion.modificarHabitacion);
router.delete('/api/habitaciones/:id', controladorHabitacion.borrarHabitacion);

// Define rutas relacionadas con las operaciones CRUD para el recurso "Habitaciones" usando el enrutador. Estas rutas corresponden a las acciones de registro, búsqueda por ID, búsqueda de todas las habitaciones, modificación y eliminación de habitaciones.

// Rutas para Reservas
router.post('/api/reservas', controladorReservas.registrarReserva);
router.get('/api/reservas/:id', controladorReservas.buscarReservaPorId);
router.get('/api/reservas', controladorReservas.buscarReservas);
router.put('/api/reservas/:id', controladorReservas.modificarReserva);
router.delete('/api/reservas/:id', controladorReservas.borrarReserva);

// Define rutas relacionadas con las operaciones CRUD para el recurso "Reservas" usando el enrutador. Estas rutas corresponden a las acciones de registro, búsqueda por ID, búsqueda de todas las reservas, modificación y eliminación de reservas.

export { router };

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación. Este enrutador contiene todas las rutas definidas anteriormente.
