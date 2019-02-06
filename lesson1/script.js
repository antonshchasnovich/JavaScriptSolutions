fizzBuzz();

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        console.log(getFizzBuzzIfPossible(i));
    }

    function getFizzBuzzIfPossible(n) {
        let results = ["FizzBuzz"];
        return results[n % 15] || getFizzIfPossible(n);
    }

    function getFizzIfPossible(n) {
        let results = ["Fizz"];
        return results[n % 3] || getBuzzIfPossible(n);
    }

    function getBuzzIfPossible(n) {
        let results = ["Buzz"];
        return results[n % 5] || n;
    }
}

function isPalindrom(str) {
    let text = str.toLowerCase().replace(/\s+/g, "");
    let reversedText = text.split("").reverse().join("");
    return text == reversedText;
}
