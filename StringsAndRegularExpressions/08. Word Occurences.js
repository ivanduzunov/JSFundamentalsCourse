function WordOccurances(input, word) {

    let counter = 0
    let wordToLowerCase = word.toLowerCase()


    let matches = input.match(/[a-zA-Z]+/g)
    if (matches != null) {
        for (let j = 0; j < matches.length; j++) {
            if (matches[j].toLowerCase() === wordToLowerCase) {
                counter++
            }
        }
    }

    console.log(counter)
}