function mostrar()
{

	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	


	do{
		numero=parseInt(prompt("ingrese un numero"));

		acumulador = acumulador + numero;
		contador= contador + 1

		respuesta=prompt("quiere ingresar otro numero?")
		

	}while( respuesta == "si");

	promedio = acumulador / contador;

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN