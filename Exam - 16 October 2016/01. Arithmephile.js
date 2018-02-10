function BiggestMultiplication(input) {
    let biggestMultiplication = -Infinity

    while (input.length > 0) {

        let num = Number(input.shift())

        if (num >= 0 && num < 10) {
            let currMultiplication = 1
            for (let i = 0; i < num; i++) {
                currMultiplication *= Number(input.shift())
            }

            if (currMultiplication > biggestMultiplication) {
                biggestMultiplication = currMultiplication
            }
        }
    }

    console.log(biggestMultiplication)

}