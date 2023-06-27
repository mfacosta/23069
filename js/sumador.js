function sumar () {

//obtener la refencia al inout con id="valor1"
//usando el D.O.M

const apuntadorAValor1 = document.getElementById('valor1');
const apuntadorAValor2 = document.getElementById('valor2');

//ahora obtengo el valor de cada apuntados y lo guarda en una variable

const v1 = + apuntadorAValor1.ariaValue;
const v2 = + apuntadorAValor2.ariaValue;

//muestro en la consola los valores
console.log(apuntadorAValor1,v1);
console.log(apuntadorAValor2,v2);

//UPDATE DEL DIV CON LA SUMA DE 1V+V2
// O SEA, CALCULO LA SUMA +

const suma = parseInt(v1) + (v2);

const apuntadorAlresultado = document.getElementById('resultado');

//en los div no existe value (como el input) existe innerHTML

apuntadorAlresultado.innerHTML = suma;








}