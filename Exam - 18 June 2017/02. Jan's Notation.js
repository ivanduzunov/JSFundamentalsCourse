function Calc(input) {
    //100/100
    let numbers = []

    for (let i = 0; i < input.length; i++) {

        let secondNumber = 0
        let firstNumber = 0

        let isNumber = input[i].toString().match(/[0-9.]+/g)
        if (isNumber != null) {
            numbers.push(Number(input[i]))
        } else {
            switch (input[i]) {
                case '+':
                    secondNumber = Number(numbers.pop())
                    firstNumber = Number(numbers.pop())
                    numbers.push(firstNumber + secondNumber)
                    break

                case '-':
                    secondNumber = Number(numbers.pop())
                    firstNumber = Number(numbers.pop())
                    numbers.push(firstNumber - secondNumber)
                    break

                case '*':
                    secondNumber = Number(numbers.pop())
                    firstNumber = Number(numbers.pop())
                    numbers.push(firstNumber * secondNumber)
                    break

                case '/':
                    secondNumber = Number(numbers.pop())
                    firstNumber = Number(numbers.pop())
                    numbers.push(firstNumber / secondNumber)
                    break
            }
        }
    }

    if (numbers.length > 1) {
        console.log("Error: too many operands!")
    } else if (numbers.length === 0) {
        console.log("Error: not enough operands!")
    } else if (numbers.join(" ").toString() === "NaN") {
        console.log("Error: not enough operands!")
    } else {
        console.log(numbers.join(" "));
    }
}