function ProductsByTowns(input) {
    let result = new Map()

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(/->/g)
        let priceQuantityTokens = tokens[2].split(/ : /g)

        let townName = tokens[0].trim()
        let productName = tokens[1].trim()
        let quantity = Number(priceQuantityTokens[0])
        let price = Number(priceQuantityTokens[1])

        if (!result.has(townName)) {
            result.set(townName, new Map())
            result.get(townName).set(productName, price * quantity)
        } else {
            if (!result.get(townName).has(productName)) {
                result.get(townName).set(productName, price * quantity)
            } else {
                let currProfit = result.get(townName).get(productName)
                result.get(townName).set(productName, currProfit + price * quantity)
            }
        }
    }

    for (let [key, value] of result) {
        console.log(`Town - ${key}`)
        for (let [innerKey, innerValue] of value) {
            console.log("$$$" + `${innerKey} : ${innerValue}`)
        }
    }

}