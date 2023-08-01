function solve(array,number){
    let arr = [];

    for (let index = 0; index < array.length; index += number) {
        arr.push(array[index]);
    }

    return arr;
}

solve(['5','20','31','4','20'], 2);
