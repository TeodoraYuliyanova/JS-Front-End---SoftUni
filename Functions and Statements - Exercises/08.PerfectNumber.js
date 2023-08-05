function perfectNumber(number) {
    let divisors = [];

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    let sum = 0;

    divisors.forEach(element => {
        sum += element;
    });


    console.log(number === sum ? "We have a perfect number!" : "It's not so perfect.");
}

perfectNumber(6);