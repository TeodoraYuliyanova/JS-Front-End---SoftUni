function solve(text,censoredWord){

    let censoredText = text;
    
    while(censoredText.includes(censoredWord)){
        censoredText = censoredText.replace(censoredWord, '*'.repeat(censoredWord.length));
    }

    console.log(censoredText);
}

solve('A small sentence with some words', 'small');