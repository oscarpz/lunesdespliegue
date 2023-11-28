import { router } from './routes/rutas.js';
import cors from 'cors'
import express from 'express'
import { establecerConexion } from "./database/conexion.js"

export class Api {
    constructor() {
        this.app = express(); // Crea una instancia de Express.js
        this.conectarBD(); // Llama al método para establecer la conexión con la base de datos
        this.procesarPeticiones(); // Llama al método para configurar el manejo de peticiones HTTP
    }

    levantarServidor() {
        // Levantando el servidor en el puerto 3001
        this.app.listen(process.env.PORT, function () {
            console.log("Servidor operando con éxito ");
        });
    }

    procesarPeticiones() {
        this.app.use(cors())
        this.app.use(express.json()); // Habilita el formato JSON para el manejo de datos
        this.app.use('/', router); // Asocia las rutas definidas en el enrutador con la aplicación Express
    }

    conectarBD() {
        // Establece una conexión a la base de datos llamando a la función 'establecerConexion' desde el módulo 'conexion'
        establecerConexion().then(() => {
            // La conexión se estableció con éxito, pero aquí no se realiza ninguna acción adicional.
            // Esto podría utilizarse para manejar eventos posteriores a la conexión de la base de datos.
        });
    }
}
