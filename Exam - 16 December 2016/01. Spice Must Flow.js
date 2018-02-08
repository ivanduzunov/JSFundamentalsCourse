function Spice(input) {
    let yieldPerDay = Number(input)
    let totalCollectedSpice = 0
    let days = 0

    while (yieldPerDay >= 100) {
        days += 1
        let dayTotalCollected = yieldPerDay
        dayTotalCollected -= 26
        totalCollectedSpice += dayTotalCollected
        yieldPerDay -= 10
    }
    totalCollectedSpice -= 26

    if (totalCollectedSpice < 0) {
        totalCollectedSpice = 0
    }
    console.log(`${days}\n${totalCollectedSpice}`)
}