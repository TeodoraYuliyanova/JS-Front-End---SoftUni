function fruit(fruitType,weight,price){
    weightInKg = weight / 1000;
    totalPrice = price * weightInKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80);