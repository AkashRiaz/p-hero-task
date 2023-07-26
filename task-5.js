const simpleCalculator=(number1, operator, number2) =>{
    switch (operator) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      case '/':
        if (number2 !== 0) {
          return number1 / number2;
        } else {
          return "Cannot divide by zero";
        }
      default:
        return "Invalid operator";
    }
  }
  
  // Test the calculator
  const num1 = 5;
  const operator = '+';
  const num2 = 3;
  
  const result = simpleCalculator(num1, operator, num2);
  console.log(result);