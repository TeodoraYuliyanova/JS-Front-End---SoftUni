function sum(array){
    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if(element % 2 === 0){
            evenSum += element;
        }else if (element % 2 !== 0){
            oddSum += element;
        }
    }

    let difference = evenSum - oddSum;

    console.log(difference);
}

sum([1,2,3,4,5,6])