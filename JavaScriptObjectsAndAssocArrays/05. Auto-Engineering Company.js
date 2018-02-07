function CarCatalogie(input) {
    let catalogue = new Map()

    for (let row of input) {
        let [brand, model, producedQuantity] = row.split(" | ")

        if (!catalogue.has(brand)) {
            catalogue.set(brand, new Map())
        }
        if (!catalogue.get(brand).has(model)) {
            catalogue.get(brand).set(model, Number(producedQuantity))
        } else {
            let currProducedQuantity = catalogue.get(brand).get(model)
            catalogue.get(brand).set(model, Number(producedQuantity) + Number(currProducedQuantity))
        }
    }
    for (let [key, value] of catalogue) {
        console.log(key)
        for (let [innerKey, innerValue] of value) {
            console.log(`###${innerKey} -> ${innerValue}`)
        }
    }
}