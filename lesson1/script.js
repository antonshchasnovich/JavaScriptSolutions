function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        console.log(getFizzBuzzIfPossible(i));
    }

    function getFizzBuzzIfPossible(i) {
        let results = ["FizzBuzz", i, i, "Fizz", i, "Buzz", "Fizz", i, i, "Fizz", "Buzz", i, "Fizz", i, i, i, i];
        return results[i % 15];
    }
}

function isPalindrom(str) {
    let text = str.toLowerCase().replace(/\s+/g, "");
    let reversedText = text.split("").reverse().join("");
    return text == reversedText;
}
