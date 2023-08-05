function factorialDivision(num1, num2) {

    function calculateFactorial(number){
        let factorialSum = 1;
        for (let index = 1; index <= number; index++) {
            factorialSum *= index;
        }
        return factorialSum;
    }

    let divisonOfFactorials = calculateFactorial(num1) / calculateFactorial(num2);

    console.log(`${divisonOfFactorials.toFixed(2)}`);
}

factorialDivision(5,2);