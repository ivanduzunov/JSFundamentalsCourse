function CountPopulation(input) {
    let results = new Map()

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(/<->/g)
        let townName = tokens[0].trim()
        let population = Number(tokens[1].trim())

        if (!results.has(townName)) {
            results.set(townName, 0)
        }

        let currPopulation = results.get(townName)
        results.set(townName, population + currPopulation)
    }

    for (let [key, value] of results) {
        console.log(`${key} : ${value}`)
    }
}

