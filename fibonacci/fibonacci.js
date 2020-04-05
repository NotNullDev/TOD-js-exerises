const fibonacci = function(number1) {
    if(number1 < 0){
        return "OOPS";
    }
  const fibonacciArray = [];
  for(i = 0; i< number1; i++){
    if(i === 0 || i === 1 ){
        fibonacciArray.push(1);
        continue;
    }
    let nextNumber = fibonacciArray[i -2] + fibonacciArray[i -1];
    fibonacciArray.push(nextNumber)
  }
  return fibonacciArray.pop();
}

module.exports = fibonacci
