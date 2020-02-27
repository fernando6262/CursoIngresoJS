function mostrar()
{

    var letra;
    var numero;
    var contadorpares = 0;
    var contadorimpares = 0;
    var acumuladorpositivo = 0;
    var acumuladornegativo = 0;
    var mayor;
    var menor;
    var letramayor;
    var letramenor;
    var flag = 0;
    var contador =0;
    var seguir;


    do{

        letra = prompt (" ingrese una letra :");
        while(!(letra >= "A" && letra <= "Z" ||  letra >= "a" && letra <= "z")){
            letra = prompt (" eso no es una letra .ingrese una letra :");

        }
        numero = parseInt(prompt("ingrese un numero entre -100 y 100 :"));
        while(numero <= "-100" && numero >= "100" && isNaN){
            letra =parseInt(prompt (" sato invalido .ingrese un numero entre -100 - 100 :"));

        }



        if( numero % 2 == 0)
		{
			contadorDpares ++;

		}

		else if (numero % 2 != 0)
		{
			contadorDpares ++;

		}

		else
		{
			contadorDceros ++;
		}

		if(numero > 0)
		{
			acumuladorDpositivos = acumuladorDpositivos + numero;
			contadorDpositivos++;
		}

		if(numero < 0)
		{
			acumuladorDnegativos = acumuladorDnegativos + numero;

		}

		if (flag == 0 || numero > numeroMax)
		{
			numeroMax = numero;
			letraMax = letra;
		}
		if(flag == 0 || numero < numeroMin)
		{
			numeroMin = numero;
			letraMin = letra
		}
		
	} while (seguir == "si");

	if(contadorDpositivos != 0)
	{
		
		promedioPositivos = (acumuladorDpositivos / contadorDpositivos);
	}













        seguir=prompt("quiere continuar?: ");

    
    }while(seguir == "s");
    
    promediopos


	document.write("la cantidad de numeros pares es" + contadorDpares+ "<br>");
	document.write("la cantidad de numeros impares es: " +contadorDimpares+ "<br>");
	document.write("la cantidad de ceros es "+contadorDceros+ "<br>");
	document.write("el promedio de todos los numeros positivos es:" +promedioPositivos+ "<br>");
	document.write("la suma de todos los numeros negativos es:" +acumuladorDnegativos+ "<br>");
	document.write("el numero")
}

