function mostrar()
{
    var edad;
    var estado;

    edad=parseInt(document.getElementById("edad").value);
    estado=parseInt(document.getElementById("estadoCivil").value);

    if(edad < 18 && estado != "Soltero") {

        alert("es muy pequeño para no ser soltero");
    }

	


}//FIN DE LA FUNCIÓN