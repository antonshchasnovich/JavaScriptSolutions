fizzBuzz();

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        console.log(getFizzBuzzIfPossible(i));
    }

    function getFizzBuzzIfPossible(i) {
        var x = ["FizzBuzz", i, i, "Fizz", i, "Buzz", "Fizz", i, i, "Fizz", "Buzz", i, "Fizz", i, i, i, i];
        return x[i % 15];
    };
};
