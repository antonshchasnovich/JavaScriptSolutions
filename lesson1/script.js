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

function isDeepEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") {
        return false;
    }

    var propsContA = 0;
    var propsContB = 0;
    for (var propA in a) {
        propsContA++;
    };
    for (var propB in b) {
        propsContB++;
    };
    if (propsContA != propsContB) {
        return false;
    }

    for (var key in a) {
        if (!(key in b) || !isDeepEqual(a[key, b[key]])) {
            return false;
        }
    }
    return true;
}
