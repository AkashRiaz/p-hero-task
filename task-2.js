const myNumber =[2, -5, 10, -3, 7]


const sumOfPositiveNumber =(numbers)=>{
    // const sum = 0;
    const positiveNumber = numbers.filter(number=> number > 0 )

    const total = positiveNumber.reduce((acc, current)=> acc + current, 0)
    return total;
}

const result = sumOfPositiveNumber(myNumber);
console.log(result)