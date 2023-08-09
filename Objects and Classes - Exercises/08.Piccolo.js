function piccolo(parkingLot){

     let carsInParking = {};
 
     for (let line of parkingLot) {
          
        const[direction,carNumber] = line.split(", ");

        if(direction === "IN"){
            carsInParking[carNumber] = "IN";
        }else if(direction === "OUT"){
            delete carsInParking[carNumber];
        }
     }

     if(Object.keys(carsInParking).length === 0){
         console.log("Parking Lot is Empty");
     }else {
         Object.entries(carsInParking).sort().forEach(carNumber => console.log(carNumber[0]));
     }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);