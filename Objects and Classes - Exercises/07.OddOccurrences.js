function oddOccurrences(input) {

    input = input.split(" ");

    let occurrences = new Map();

    for (let word of input) {
        word = word.toLowerCase();

        if (!occurrences.has(word)) {
            occurrences.set(word, 1);
        } else {
            occurrences.set(word, occurrences.get(word) + 1);
        }
    }

    for ( element of occurrences) {
        if(element[1] % 2 !== 0){
            process.stdout.write(`${element[0]} `);
        }
    }
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');