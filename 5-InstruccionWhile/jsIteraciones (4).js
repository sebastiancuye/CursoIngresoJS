//al presionar el botón pedir un número entre 0 y 9 inclusive.
function mostrar()
{
	var numero;
	do 
	{
		numero = prompt("ingrese numero entre 0 y 10: ");
		numero < -1 && numero > 11 || isNaN(numero);
	} while (numero )
		{
			alert("Escribi bien salame");
		}
}







/* function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");

	while (numero < -1 || numero > 11 || isNaN (numero)) // isNaN = si no es numero
	{
		alert("Error, ingrese un numero entre 0 y 10");
		break;
	}
	
	if (numero < 10 && numero > -1)
	{
		document.getElementById('Numero').value = numero;
	}

}//FIN DE LA FUNCIÓN */
