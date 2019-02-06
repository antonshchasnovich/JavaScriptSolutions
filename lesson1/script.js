fizzBuzz();

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        console.log(getFizzBuzzIfPossible(i));
    }

    function getFizzBuzzIfPossible(n) {
        let fizzBuzzArr = ["FizzBuzz"];
        let fizzArr = ["Fizz"];
        let buzzArr = ["Buzz"];
        return fizzBuzzArr[n % 15] || fizzArr[n % 3] || buzzArr[n % 5] || n;
    }
}

function isPalindrom(str) {
    let text = str.toLowerCase().replace(/\s+/g, "");
    let reversedText = text.split("").reverse().join("");
    return text == reversedText;
}
