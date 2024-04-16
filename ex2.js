/**
 * Que sucede aquí?
 * Se estan proporcionando unos valores inciales a las variables y luego se asigna un nuevo valor a esas variables.
 */

 let variable1 = 1;
 let variable2 = 2;
 let variable3 = 3;
 let variable4 = 4;
 variable2= 2;
 varialbe3= 4;
 variable4= 1;
 variable1= -7;

 console.log(variable4)

 /**
  * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
  * El valor de la varibale4 seria -14 ya que:
  * variable2 se convierte en -7
  * variable4 se convierte en -7 * 2
  */

  variable2 = variable1;
  variable4 = variable2 * 2;


/**
  * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
  */

console.log(variable4)