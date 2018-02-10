function BiggestMultiplication(input) {
    let biggestMultiplication = 0

    for (let num of input) {
        if (num.match(/^[0-9]$/g)) {

            let number = Number(num)
            let numIndex = input.indexOf(num)
            if (number === 1) {
                let currMultiplication = Number(input[input.indexOf(num) + 1])
                if (currMultiplication > biggestMultiplication) {
                    biggestMultiplication = currMultiplication
                }
            } else {
                let numbersToMultiply =[]
                if (numIndex + number + 1 > input.length - 1) {
                    numbersToMultiply = input.slice(numIndex + 1)
                }else{
                    numbersToMultiply = input.slice(numIndex + 1, numIndex + number + 1)
                }
                let currMultiplication = Number(numbersToMultiply[0]) * Number(numbersToMultiply[1])

                for (let i = 2; i < numbersToMultiply.length; i++) {
                    currMultiplication *= Number(numbersToMultiply[i])
                }

                if (currMultiplication > biggestMultiplication) {
                    biggestMultiplication = currMultiplication
                }
            }

        }
    }

    console.log(biggestMultiplication)

}