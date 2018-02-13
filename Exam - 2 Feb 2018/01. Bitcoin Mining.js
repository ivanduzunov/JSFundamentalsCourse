function Solve(goldArr) {
    //100/100
    let boughtBitcoins = 0
    let dayOfTheFirstPurchasedBitcoin = 0
    let cashAmmount = 0

    for (let i = 1; i <= goldArr.length; i++) {
        let goldAmmount = Number(goldArr[i - 1])

        if (i % 3 === 0) {
            goldAmmount -= goldAmmount * 0.3
        }

        cashAmmount += goldAmmount * 67.51

        if (cashAmmount >= 11949.16) {
            let bitcoins = Math.floor(cashAmmount / 11949.16)
            if (boughtBitcoins === 0) {
                dayOfTheFirstPurchasedBitcoin = i
            }
            boughtBitcoins += bitcoins
            cashAmmount -= bitcoins * 11949.16
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`)

    if (boughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurchasedBitcoin}`)
    }

    console.log(`Left money: ${(cashAmmount).toFixed(2)} lv.`)

}

Solve(['100', '200', '300'])