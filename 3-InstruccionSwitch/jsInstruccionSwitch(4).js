function mostrar()
{

var mes = document.getElementById('mes').value;

switch(mes){

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert("este mes tiene 30 dias");
        break;
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        alert("este mes tiene 31 dias");
        break;
    default:
        alert("este mes tiene 28 0 29 dias");
}
	



}//FIN DE LA FUNCIÓN