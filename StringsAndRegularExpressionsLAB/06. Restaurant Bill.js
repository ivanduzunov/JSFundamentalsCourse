function ExtractData(input) {
    let purchases = []
    let sum = 0

    for (let i = 0; i < input.length; i+= 2) {
        purchases.push(input[i])
        let num = input[i + 1]
        sum += Number(num)
    }

    console.log(`You purchased ${purchases.join(", ")} for a total sum of ${sum}`)
}