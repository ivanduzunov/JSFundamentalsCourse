function ExtractData(input) {
    let towns = []
    let sum = 0

    for (let i = 0; i < input.length; i++) {
        let pairSplitted = input[i].split('|').filter(a => a!== '')
        towns.push(pairSplitted[0].trim())
        let num = pairSplitted[1].trim()
        sum += Number(num)
    }

    console.log(towns.join(", "))
    console.log(sum)
}