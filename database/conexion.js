import mongoose from "mongoose";

/**
 * Establece una conexión a la base de datos MongoDB.
 * Utiliza las opciones proporcionadas para la configuración de la conexión.
 */
export async function establecerConexion() {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Éxito en la conexión");
  } catch (error) {
    console.error("Fallamos en la conexión", error);
  }
}
