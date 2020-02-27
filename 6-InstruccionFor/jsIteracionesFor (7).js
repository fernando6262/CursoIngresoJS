function mostrar()
{
    var numero;
    var contadorDivisores = 0;

    numero = parseInt(prompt("ingrese un numero :"));
    while (isNaN(numero)){


        numero=parseInt(prompt("eso no es un numero.ingrese un numero:"));
    }
    for( var i=1 ; i <= numero ; i++){
        if (numero % i == 0){
            console.log(i);
            contadorDivisores++;
        }


    }

    console.log("cantidad de divisores encontrados :" + contadorDivisores );





}//FIN DE LA FUNCIÓN