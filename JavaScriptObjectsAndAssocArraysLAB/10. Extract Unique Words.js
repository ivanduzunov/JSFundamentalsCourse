function CountWords(input) {
    let words = new Set()

    for (let i = 0; i < input.length; i++) {
        let matches = input[i].match(/[a-zA-Z_]+/g)
        matches.forEach(m => {
            words.add(m.toLowerCase())
        })
    }

    console.log([...words.values()].join(", "))
}