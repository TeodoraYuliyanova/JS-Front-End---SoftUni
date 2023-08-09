function wordTracker(input) {
    const [searchWords,...words] = input;

    const wordOccurrences = searchWords.split(" ").reduce((acc,curr) => {
        acc[curr] = 0;

        return acc;
    },{});

    words.forEach((word) => {
        if(wordOccurrences.hasOwnProperty(word)){
            wordOccurrences[word] += 1;
        }
    });

    Object.entries(wordOccurrences)
    .sort(([word1, count1],[word2, count2]) => count2 - count1).forEach((word) => console.log(`${word[0]} - ${word[1]}`))

}


wordTracker([
'this sentence',
'In', 'this', 'sentence', 'you', 'have',
'to', 'count', 'the', 'occurrences', 'of',
'the', 'words', 'this', 'and', 'sentence',
'because', 'this', 'is', 'your', 'task'
]
);


wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 
    'another', 'the', 'And', 'finally', 'the', 
    'the', 'sentence']
    );