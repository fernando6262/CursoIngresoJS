/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var aumento;
    var importefinal;
//paso 1
   //paso 1.1
    importe = document.getElementById("sueldo").value;
    //paso 1.2
    importe = parseFloat(importe);
//paso 2
    aumento = importe * 10 / 100;
//paso 3

    importefinal = importe + aumento;
//paso 4
    document.getElementById("resultado").value = importefinal






	
}
