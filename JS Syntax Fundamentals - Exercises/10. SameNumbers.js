function sameNumbers(number) {
    let digitToString = number.toString();
    let sum = 0;
    let isDifferent = false;

    for (let index = 0; index < digitToString.length; index++) {

        let firstSymbol = digitToString[0];

        if(firstSymbol !== digitToString[index]){
            isDifferent = true;
        }

        sum += Number (digitToString[index]);
    }

    if(isDifferent){
        console.log("false")
       }else{
           console.log("true")
       }
    console.log(sum);

}

sameNumbers(1234);
sameNumbers(22222);