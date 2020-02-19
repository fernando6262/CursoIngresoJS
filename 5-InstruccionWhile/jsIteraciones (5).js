function mostrar()
{
// dos forma de resolverlo
var sexo = prompt("ingrese f ó m .").toLowerCase();

while(sexo !="m" && sexo !="f"){

    sexo=prompt("error ingrese un sexo").toLowerCase()
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN