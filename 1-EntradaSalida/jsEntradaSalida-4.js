/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//muestra mensaje
var nombre;
//pido el nombre en la venta emergente
nombre = prompt("ingrese su nombre");
//muentro lo que ingresan en por la pantalla emergente,en el cuadro de la pagina
document.getElementById("elNombre").value   =nombre;
}

