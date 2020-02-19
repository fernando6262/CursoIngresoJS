function mostrar()
{

	var contador=0;
	var acumulador=0;

	while(contador <= 4){

		numero = parseInt(prompt("ingrese un numero"));

		while(isNaN(numero)){

			numero = parseInt(prompt("eso no es un numero.ingrese un numero"));

		}

		acumulador = acumulador + numero;
		
		contador++;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN