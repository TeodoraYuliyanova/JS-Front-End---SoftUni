function arrayRotation(array, numberRotation) {

    for (let index = 0; index < numberRotation; index++) {
        const firstElement = array.shift();
        array.push(firstElement);
    }

    let output = "";
    array.forEach(element => {
        output += element + " ";
    });

    console.log(output);
}

arrayRotation([51, 47, 32, 61, 21], 2);