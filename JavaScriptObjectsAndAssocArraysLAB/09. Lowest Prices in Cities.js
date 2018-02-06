function LowestPrices(input) {
    let priceTownList = new Map()
    let lowestPriceList = new Map()

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split("|")

        let townName = tokens[0].trim()
        let productName = tokens[1].trim()
        let price = Number(tokens[2].trim())

        if (!priceTownList.has(productName)) {
            priceTownList.set(productName, new Map())
        }

        priceTownList.get(productName).set(townName, price)
    }

    for (let [k, v] of priceTownList) {
        let keys = Array.from(priceTownList.get(k).values()).sort((a, b) => a - b)
        let lowestPriceValue = keys[0]
        lowestPriceList.set(k, `${lowestPriceValue} (${v[lowestPriceValue]})`)
    }

    for (let [k, v] of lowestPriceList) {
        console.log(`${k} -> ${v}`)
    }
}