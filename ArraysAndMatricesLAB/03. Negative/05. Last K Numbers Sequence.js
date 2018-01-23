function Sequennce(sequenceLenght, numberOfElementsToSum) {

    let result = [1]

    for (let i = 1; i < sequenceLenght; i++) {
        let startIndex = result.length <= numberOfElementsToSum ? 0 : result.length - numberOfElementsToSum
        let sumNumbers = result.slice(startIndex, i + numberOfElementsToSum).reduce((a, b) => {
            return a + b
        })

        result.push(sumNumbers)
    }

    console.log(result.join(" "))
}