import { Api } from "./Api.js";
import 'dotenv/config';

// Creamos una instancia de la clase Api
const servidor = new Api();

// Iniciamos el servidor
servidor.levantarServidor();
