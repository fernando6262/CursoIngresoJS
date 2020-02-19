function mostrar()
{
// dos formas de resolver
	var numero = prompt("ingrese un número entre 0 y 10.");

// 1er forma
	while(!(numero >=0 && numero <=9)){

		numero=parseInt(prompt("numero incorrecto.ingrese un numero valido!!!"))

	}

// 2da forma

/* while( numero <0 || numero >9 || isNaN(numero)){

    numero = parseInt(prompt("numero incorrecto.ingreselo nuevamente"))
}

*/

document.getElementById('Numero').value=numero;



}//FIN DE LA FUNCIÓN