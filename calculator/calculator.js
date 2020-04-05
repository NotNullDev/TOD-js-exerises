function add (number1, number2) {
	return number1 + number2;
}

function subtract (number1, number2) {
	return number1 - number2;
}

function sum (arrayOfNumbers) {
	return arrayOfNumbers.reduce((sum,number)=>{
		sum += number;
		return sum;
	}, 0);
	
}

function multiply (arrayOfNumbers) {
	if(arrayOfNumbers.length === 0){
		return;
	}
	return arrayOfNumbers.reduce((multiply, number)=>{
		return multiply * number;
	}, 1)
}

function power(number1, number2) {
	return number1**number2;
}

function factorial(number1) {
	if(number1 == 0){
		return 1;
	}else if(number1> 0 && Number.isInteger(number1)){
		let factorial = 1;
		for(let i = 1; i <= number1; i++){
			factorial *= i; 
		}
		return factorial;
	}else{
		return;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}