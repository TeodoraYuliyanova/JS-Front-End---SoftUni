function convertoToObject(inputJSON){

    Object.entries(JSON.parse(inputJSON)).forEach((pair) => {
        console.log(`${pair[0]}: ${pair[1]}`);
    });
}

convertoToObject('{"name": "George", "age": 40, "town": "Sofia"}');