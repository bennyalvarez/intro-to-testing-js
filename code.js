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

//isEven function