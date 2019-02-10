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

function spiral(array) {
    var spiralArray = [];
    var tempArray = array.map(function (arr) {
        return arr.slice();
    });

    while (true) {
        var element = tempArray.shift()
        if (element) {
            for (var i = 0; i < element.length; i++) {
                spiralArray.push(element[i]);
            }
            if (tempArray.length > 0) {
                tempArray = rotate(tempArray);
            }
        } else {
            break;
        }
    }
    return spiralArray;
}

function rotate(array) {
    var rotatedArray = matrixArray(array[0].length, array.length);
    for (var i = 0; i < rotatedArray.length; i++) {
        for (var j = 0; j < rotatedArray[0].length; j++) {
            rotatedArray[rotatedArray.length - i - 1][j] = array[j][i];
        }
    }
    return rotatedArray;
}

function matrixArray(rows, columns) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array();
        for (var j = 0; j < columns; j++) {
            arr[i][j] = null;
        }
    }
    return arr;
}

function quadraticEquation(a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
    } else if (discriminant == 0) {
        return [-b / (2 * a)];
    } else {
        return [];
    }
}

drawCalendar(2019, 2, document.getElementById("calendar"));

function drawCalendar(year, month, element) {
    var d = new Date(year, month - 1);
    var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }
    
    while (d.getMonth() == month - 1) {
        table += '<td>' + d.getDate() + '</td>';

        if (d.getDay() == 0) {
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }
    
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }
    table += '</tr></table>';
    element.innerHTML = table;
    
    function getDay(date) {
      var day = date.getDay();
      if (day == 0) day = 7;
      return day - 1;
    }

}
