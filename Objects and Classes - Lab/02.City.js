function createCity(city){
    Object.entries(city).forEach((pair) => {
        console.log(`${pair[0]} -> ${pair[1]}`);
    });
}

createCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
  });