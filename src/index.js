import validator from "./validator.js";

/*Escribir el número y que se vaya mostrando*/
let tarjeta = document.querySelector("#tarjeta"),
numeroTarjeta = document.querySelector("#tarjeta .numero"); /*crear la constante de numero de tarjeta para que al escribir se vaya mostrando en la tarjeta*/


/*girar la tarjeta para ver los datos de atras*/
let girarTarjeta = () => {
if (tarjeta.classList.contains("active")) {
  tarjeta.classList.remove("active");
}
};
/*Rotación de la tarjeta*/
tarjeta.addEventListener("click", () => {
tarjeta.classList.toggle(
  "active"
); /*toggle significa que si no tiene la clase active se la coloca y si la tiene se la quita*/
});

let formulario = document.querySelector("#formulario");
formulario.contNumero.addEventListener("keyup", (e) => {
/*Input/formulario número de tarjeta*/
let valorInput = e.target.value;
formulario.contNumero.value = valorInput

  .replace(/\s/g, "") /*Elimina los espacios en blanco*/
  .replace(/\D/g, "") /*No deja colocar letras*/
  .replace(/([0-9]{4})/g, "$1 ") /*Se coloca espacio cada 4 números*/
  .trim(); /*Elimina el espacio que queda de ultimas*/

numeroTarjeta.textContent = valorInput;

if (valorInput == "") {
  numeroTarjeta.textContent = "#### #### #### ####";
}

for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

girarTarjeta(); /* Voltea la cara de la tarjeta para que se vea el frente.*/
});

const ingresarNumero =
  document.getElementById(
    "formulario"
  ); /*crear una constante con el id de ingresar tarjeta*/

ingresarNumero.addEventListener("submit", (Event) => {
  Event.preventDefault();
  const contNumero = document.getElementById("contNumero");
  const creditCardNumber = contNumero.value;

  if (creditCardNumber === "") {
    alert("Por favor rellenar todos los espacios");
  } else {
    const isValid = validator.isValid(creditCardNumber);
    const verificarResultado = document.getElementById("verificarResultado");
    document.getElementById("detallePago").outerHTML = "";
    document.getElementById("tarjeta").outerHTML = "";
    document.getElementById("validar").outerHTML = "";
    const verificar = validator.maskify(creditCardNumber);
    // console.log(verificar);
    contNumero.value = verificar;
    if (isValid === true) {
      /*mostrar resultado de true y false en la pantalla*/
      verificarResultado.innerHTML =
        "<h2> Tarjeta válida"; /*mensaje de pago exitoso*/
    } else {
      verificarResultado.innerHTML =
        "<h2> Tarjeta inválida"; /*mensaje de pago rechazado*/
    }
  }



});