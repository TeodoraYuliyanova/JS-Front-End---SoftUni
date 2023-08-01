function listOfNames(array) {

    let sortedtArray = array.sort();
    for (let index = 0; index < sortedtArray.length; index++) {
        console.log(`${index + 1}.${sortedtArray[index]}`);

    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);