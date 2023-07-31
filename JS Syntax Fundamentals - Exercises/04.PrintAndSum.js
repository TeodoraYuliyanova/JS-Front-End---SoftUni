function printAndSum(num1, num2) {
    let sum = 0;
    let numbers = "";

    for (let index = num1; index <= num2; index++) {
        numbers += index + " ";
        sum += index;
    }

    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);