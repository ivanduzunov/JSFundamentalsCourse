function PrintCatalogue(input) {

    let catalogue = new Map()

    for (let row of input) {
        let tokens = row.split(" : ")
        let productName = tokens[0]
        let productPrice = tokens[1]
        let startLetter = productName[0]

        if (!catalogue.has(startLetter)) {
            catalogue.set(startLetter, new Map())
        }

        catalogue.get(startLetter).set(productName, productPrice)
    }

    let sorted = Array.from(catalogue.entries()).sort()

    for (let [k, v] of sorted) {

        console.log(k)

        let innerSorted = Array.from(catalogue.get(k).entries()).sort()

        for (let [ik, iv] of innerSorted) {
            console.log(` ${ik}: ${iv}`)
        }
    }
}