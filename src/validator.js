const validator = {
  isValid: function (creditCardNumber) {
    /*Convertir el número de tarjeta en un array*/
    let array = creditCardNumber.split("").reverse();
    /*Buscar los dígitos con posiciones pares e impares y recorrer todos los elementos del arreglo*/
    for (let i = 0; i < array.length; i++) {
      /*Establecer la condición de dígitos con posición par*/
      if (i % 2 === 1) {
        let multTotalDigito = array[i] * 2;
        /*Establecer lo que pasará cuando la multiplicación del dígito sea mayor a 9*/
        if (multTotalDigito > 9) {
          array[i] = multTotalDigito
            .toString()
            .split("")
            .reduce((a, b) => parseInt(a) + parseInt(b), 0);
        } else {
          array[i] = multTotalDigito;
        }
      }
    }
/*Suma total de impares en cero*/
    let suma = 0;
/*Recorrer todo el arreglo*/
    for (let i = 0; i < array.length; i++) {
      suma += parseInt(array[i]);
    }
/*Utilizar un if para validar si la tarjeta es true o flase*/
    if (suma % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  /*Función creada para regresar l
  os últimos 4 digitos con una mascara*/
  maskify: function (creditCardNumber) {
    const tamaño = creditCardNumber.length;
    return (
      ("" + creditCardNumber).slice(0, tamaño - 5).replace(/./g, "#") + /*5 porque me esta tomando los espacios como número*/
      ("" + creditCardNumber).slice(tamaño - 5)
    );
  },
};
export default validator;

