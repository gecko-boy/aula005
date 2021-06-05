

let convertToF = function (celsius) {
    // * 9/5 + 32
    let farenheit = celsius * 9/5 + 32;
    return farenheit + "ºF";
}
document.write(convertToF(14) + "<br>");


let characters = function(str) {
    for(let i = 0; i < str.length; i++) {
        document.write(str[i]);
    }
}
characters("Are we all asleep?<br>");


let reverseString = function(str) {
    let s = '';
    for(let i = str.length - 1; i >= 0; i--) {
        s += str[i];
    }
    return s;
}
document.write(reverseString("Vicente") + "<br>");


//FACTORIAL: 5! = 1 * 2 * 3 * 4 * 5

let factorial = function(num) {
    let fact = 1;
    for(let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
document.write(factorial(5) + "<br>");


let theLongestWord = function(str) {
    //Partir a string em palavras
    //Contar o numero de letras em cada palavra
    //Guardar a maior

    let largest = 0;
    let words = str.split(' ');
    for(let i = 0; i < words.length; i++) {
        if(words[i].length > largest) {
            largest = words[i].length;
        }
        return largest;
    }
}
document.write(theLongestWord("The quick brown fox jumped over the lazy dog"));

document.write("<h1>TPC</h1>");

let truncateString = function(str, num) {
    let phrase = "";
    for(let i = 0; i <= num; i++) {
        phrase += str[i];
    }
    return phrase + "...";
}

document.write(truncateString("Hoje está um lindo dia", 21));
document.write("<br>");
document.write(truncateString("Hoje está um lindo dia", 5));

document.write("<br>");

let titleCase = function (str) {
    var splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    } return splitStr.join(" ");
}

document.write(titleCase("Hoje está um belo dia"));