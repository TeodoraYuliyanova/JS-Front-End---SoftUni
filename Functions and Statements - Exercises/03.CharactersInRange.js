function charactersInRange(char1, char2) {
    let result = "";

    if(char1.charCodeAt() < char2.charCodeAt()){
        for (let index = char1.charCodeAt() + 1; index < char2.charCodeAt(); index++) {
            result += String.fromCharCode(index) + " ";
        }
    }else {
        for (let index = char2.charCodeAt() + 1; index < char1.charCodeAt(); index++) {
            result += String.fromCharCode(index) + " ";
        }
    }
   
    console.log(result);
}

charactersInRange('a', 'd');