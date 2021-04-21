// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(x) {
    if ((typeof x === 'string' && x.trim().length > 0) || typeof x === 'number' ) {
        return "Hello, " + x + "!";
    }
    return 'Hello, World!';
}

// isFive function

function isFive(x) {
        return x == 5;
}

// isEven function

function isEven(input) {
    return parseFloat(input) % 2 === 0;
}

//is Vowel

//function isVowel(string) {
//    if (string === "a"||"e"||"i"||"o"||"u"||"A"||"E"||"I"||"O"||"U") {
//        return true;
//    }
//}

function isVowel(string) {
    return string === "a" || string === "e" || string === "i"|| string === "o"|| string === "u"|| string === "A"|| string === "E"|| string === "I"|| string === "O"|| string === "U";
}

// add function

function add(x,y) {
    if (isNaN(x) || isNaN(y)) {
        return NaN;
    } else {
        return parseFloat(x) + parseFloat(y);
    }
}



