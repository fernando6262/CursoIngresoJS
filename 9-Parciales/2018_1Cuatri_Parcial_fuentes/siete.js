function mostrar()
{

    var nota;
    var sexo;
    var acumuladordeNotas;
    var promedioNotas;
    var notaBaja;
    var sexoBajo;
    var flag=0;
    var contadorVaroneMas6 = 0;

    for(var i = 0 ; i < 5 ; i++){

        Nota=parseInt(prompt("ingrese una nota (1 - 10) :"));
        while(nota < 0 || nota > 10 || isNaN(nota)){

            Nota=parseInt(prompt(" no ta invalida.ingrese una nota valida (1 - 10) :"));
        }

        sexo=prompt("ingrese un sexo f o m:");
        while(sexo != "f" && sexo != "m"){

            Nota=prompt(" sexo invalido.ingrese un sexo valido (f o m) :");
        }

    }


    }
}
