function PrintCities(arr) {
    let towns = {}

    for (let i = 0; i < arr.length; i += 2) {
        let townName = arr[i]
        let income = Number(arr[i + 1])

        if (towns[townName] == null) {
            towns[townName] = 0
        }

        towns[townName] += income
    }

    let result = JSON.stringify(towns)

    console.log(result)
}