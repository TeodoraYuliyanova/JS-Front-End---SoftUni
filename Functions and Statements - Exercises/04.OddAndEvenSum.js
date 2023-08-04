function sum(number) {
    let evenSum = 0;
    let oddSum = 0;

    let numberString = number.toString();

    for (let index = 0; index < numberString.length; index++) {
        let digit = Number(numberString[index]);

        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}


sum(1000435);