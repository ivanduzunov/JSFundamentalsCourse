function CountWords(input) {
    let words = {}


    let matches = input[0].match(/[a-zA-Z_]+/g)

    for (let word of matches) {
        if (!words.hasOwnProperty(word)) {
            words[word] = 0
        }

        words[word] += 1
    }

    let result = JSON.stringify(words)

    console.log(result)
}