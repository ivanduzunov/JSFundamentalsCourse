function CountWords(input) {
    let words = new Map()


    let matches = input[0].match(/[a-zA-Z_]+/g)

    for (let word of matches) {

        let key = word.toLowerCase()

        if (!words.has(key)) {
            words.set(key, 0)
        }

        let currentNum = words.get(key)
        words.set(key, currentNum + 1)
    }

    let keysSorted = Array.from(words.keys()).sort((a, b) => a.localeCompare(b))

    for (let key of keysSorted) {
        console.log(`'${key}' -> ${words.get(key)} times`)
    }
}