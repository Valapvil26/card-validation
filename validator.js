const validator = {
  isValid: function (creditCardNumber) {
    let array = creditCardNumber.split("").reverse();
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 1) {
        let multTotalDigito = array[i] * 2;
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

    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += parseInt(array[i]);
    }

    if (suma % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify: function (creditCardNumber) {
    const tamaño = creditCardNumber.length;
    return (
      ("" + creditCardNumber).slice(0, tamaño - 4).replace(/./g, "#") +
      ("" + creditCardNumber).slice(tamaño - 4)
    );
  },
};
export default validator;
