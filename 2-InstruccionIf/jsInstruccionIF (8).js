function mostrar()
{
    var edad;
    var estado;

    edad=document.getElementById("edad").value;
    estado=document.getElementById("estadoCivil").value;

    if(estado == "Soltero" && edad > 17) {
    
        alert("Es soltero y no es menor");

    }



            


}//FIN DE LA FUNCIÓN