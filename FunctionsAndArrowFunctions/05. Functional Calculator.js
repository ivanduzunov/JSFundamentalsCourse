function Calculator(a, b, op) {
    let add = function (a, b) {
        return a + b
    };
    let subtract = function (a, b) {
        return a - b
    };
    let multiply = function (a, b) {
        return a * b
    };
    let divide = function (a, b) {
        return a / b
    };

    switch (op){
        case "+":
            console.log(add(a,b))
            break
        case "-":
            console.log(subtract(a, b))
            break
        case "*":
            console.log(multiply(a, b))
            break
        case "/":
            console.log(divide(a, b))
            break
    }
}

