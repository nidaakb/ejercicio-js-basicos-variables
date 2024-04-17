/**
 * Jugando con string
 */

let nombre = "Mad";
let apellido = "Max";

let presentacion = "Me llamo Mad Max";

/**
 * Pregunta 1: ¿Qué valor tengo que asignar a 'presenetacion' para que me muestre pantalla:
 *   * "Me llamo Mad Max?"
 *
 *  Deberiamos añadir el string "Me llamo Mad Max" a presentacion.
 * 
 */

console.log("Pregunta 1:", presentacion);

/**
 * Pregunta 2: Cambia el valor de las variables adecuadamente para que, en vez de "Me llamo Mad Max", escribe "Me llamo {tu nombre} {tu apellido}"
 */
nombre = "Nidaa";
apellido = "Kabbaj";
presentacion = "Me llamo " + nombre + " Kabbaj";

console.log("Pregunta 2:", presentacion);
