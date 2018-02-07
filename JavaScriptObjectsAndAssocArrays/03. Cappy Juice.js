function Bottles(input) {
    let totalJuice = new Map()
    let totalBottles = new Map()

    for (let row of input) {
        let tokens = row.split(" => ")
        let fruitName = tokens[0]
        let juiceQuantity = Number(tokens[1])

        if (!totalJuice.has(fruitName)) {
            totalJuice.set(fruitName, juiceQuantity)
        } else {
            let currJuice = totalJuice.get(fruitName)
            totalJuice.set(fruitName, currJuice + juiceQuantity)
        }

        if (totalJuice.get(fruitName) >= 1000) {
            let bottles = Math.floor(totalJuice.get(fruitName) / 1000)

            let currJuice = totalJuice.get(fruitName)
            totalJuice.set(fruitName, currJuice - (bottles * 1000))

            if (!totalBottles.has(fruitName)) {
                totalBottles.set(fruitName, bottles)
            } else {
                let currBottles = totalBottles.get(fruitName)
                totalBottles.set(fruitName, currBottles + bottles)
            }
        }
    }

    for (let [k, v] of totalBottles) {
        console.log(`${k} => ${v}`)
    }
}