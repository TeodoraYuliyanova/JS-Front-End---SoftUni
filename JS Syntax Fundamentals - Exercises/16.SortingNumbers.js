function sortArr(arr){

    arr.sort((a, b) => a - b);
    let length = arr.length;

    let shifted = [];

     for (let index = 0; index < length; index++) {
        shifted.push(arr.shift());
        shifted.push(arr.pop());
     }

     return shifted;
}