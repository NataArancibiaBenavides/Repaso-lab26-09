/*
calcular el sueldo semanal de un trabajador con base en las horas que trabajador
Ej: Carol gana 10000 por hora y trabaja 20 horas a la semana
200000
20*10000
*/

function salaryWeek(hours,payment){
	var salary=hours*payment;
	return salary;
}
function salaryWeek(hours,payment){
	return hours* payment;
}

/*
Calcular la cantidad de digitos de un numero, por ej: 1986, debera retornar 4 */
function numberOfDigits(number){
	var counter=0;
	var digits=number.toString();// "1986"//
	for (var i=0;i<digits.length;i++){
	counter++;
}
return counter;
}
// toString cuenta la cantidad de caracteres
// i+=2 es igual a i=i+2
//i++ es igual a i=i+1
// palabra palindroma ejemplo anita lava la tina da lo mismo si se lee como esta y si se le de derecha a izquierda
function palindrome(word){
	var long= word.length;
	for(var i=0;i<long;i++){
		if(word[i]!== word[long - 1 - i])){
	return false;
}
	}
	return true;
}
// 




}
