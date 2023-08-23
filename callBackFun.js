const substraction = (a,b) => a-b;

function calculate(a, b, operate) {
    return operate(a,b);
}

const subResult = calculate(8,3,substraction);

console.log(subResult);