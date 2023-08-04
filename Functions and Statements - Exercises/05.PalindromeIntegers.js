function palindromeIntegers(array) {

    function isPalindromeInteger(num) {
        const reversedNum = parseInt(String(num).split('').reverse().join(''));
        return num === reversedNum;
    }

    array.forEach(element => {
        const isPalindrome = isPalindromeInteger(element);
        console.log(isPalindrome);
    });
}


palindromeIntegers([123, 323, 421, 121]);