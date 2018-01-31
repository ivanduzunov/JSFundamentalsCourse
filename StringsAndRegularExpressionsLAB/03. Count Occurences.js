function Occurrencies(element, str) {
    let elementLenght = element.length

    let arrayLenght = str.length - elementLenght + 1

    let counter = 0

    for (let i = 0; i < arrayLenght; i++) {
        if (element === str.substr(i, elementLenght)) {
            counter++
        }
    }

    console.log(counter)
}

