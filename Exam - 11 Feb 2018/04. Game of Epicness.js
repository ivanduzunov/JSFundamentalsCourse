function Solve(kingdomsAndGeneralsArr, battleMatrix) {
    //87/100
    let kingdoms = new Map()

    for (let obj of kingdomsAndGeneralsArr) {
        let kingdom = obj.kingdom
        let general = obj.general
        let army = Number(obj.army)

        if (!kingdoms.has(kingdom)) {
            kingdoms.set(kingdom, new Map())
        }
        if (!kingdoms.get(kingdom).has(general)) {
            kingdoms.get(kingdom).set(general, {army: army, wins: 0, losses: 0})
        } else {
            kingdoms.get(kingdom).get(general).army += army
        }
    }

    for (let battle of battleMatrix) {
        let [firstKingdom, firstGeneral, secondKingdom, secondGeneral] = battle

        let firstArmy = kingdoms.get(firstKingdom).get(firstGeneral).army
        let secondArmy = kingdoms.get(secondKingdom).get(secondGeneral).army

        if (firstKingdom === secondKingdom) {
            continue
        }

        if (firstArmy > secondArmy) {
            let firstCurrArmy = kingdoms.get(firstKingdom).get(firstGeneral).army
            kingdoms.get(firstKingdom).get(firstGeneral).army = Math.floor(firstCurrArmy + (firstCurrArmy * 0.1))
            kingdoms.get(firstKingdom).get(firstGeneral).wins += 1
            let secondCurrArmy = kingdoms.get(secondKingdom).get(secondGeneral).army
            kingdoms.get(secondKingdom).get(secondGeneral).army = Math.floor(secondCurrArmy - secondCurrArmy * 0.1)
            kingdoms.get(secondKingdom).get(secondGeneral).losses += 1
        } else if (firstArmy < secondArmy) {
            let firstCurrArmy = kingdoms.get(firstKingdom).get(firstGeneral).army
            kingdoms.get(firstKingdom).get(firstGeneral).army = Math.floor(firstCurrArmy - (firstCurrArmy * 0.1))
            kingdoms.get(firstKingdom).get(firstGeneral).losses += 1
            let secondCurrArmy = kingdoms.get(secondKingdom).get(secondGeneral).army
            kingdoms.get(secondKingdom).get(secondGeneral).army = Math.floor(secondCurrArmy + secondCurrArmy * 0.1)
            kingdoms.get(secondKingdom).get(secondGeneral).wins += 1
        }
    }

    let kingdomsKeysSorted = [...kingdoms.keys()].sort((a, b) => {
        let aKingdomTotalWins = 0
        let bKingdomTotalWins = 0
        for (let [k, v] of kingdoms.get(a)) {
            aKingdomTotalWins += v.wins
        }
        for (let [k, v] of kingdoms.get(b)) {
            bKingdomTotalWins += v.wins
        }

        if (aKingdomTotalWins > bKingdomTotalWins) {
            return -1;
        }
        else if (aKingdomTotalWins < bKingdomTotalWins) {
            return 1;
        } else {
            let aKingdomTotalLosses = 0
            let bKingdomTotalLosses = 0
            for (let [k, v] of kingdoms.get(a)) {
                aKingdomTotalWins += v.losses
            }
            for (let [k, v] of kingdoms.get(b)) {
                bKingdomTotalWins += v.losses
            }

            if (aKingdomTotalLosses < bKingdomTotalLosses) {
                return -1;
            }
            else if (aKingdomTotalLosses > bKingdomTotalLosses) {
                return 1;
            } else {
                return a.localeCompare(b);
            }
        }
    });

    let generalsKeysSorted = [...kingdoms.get(kingdomsKeysSorted[0]).keys()].sort((a, b) => {
        if (kingdoms.get(kingdomsKeysSorted[0]).get(a).army > kingdoms.get(kingdomsKeysSorted[0]).get(b).army) return -1;
        if (kingdoms.get(kingdomsKeysSorted[0]).get(a).army < kingdoms.get(kingdomsKeysSorted[0]).get(b).army) return 1;
    });

    console.log(`Winner: ${kingdomsKeysSorted[0]}`)

    for (let key of generalsKeysSorted) {
        console.log(`/\\general: ${key}`)
        console.log(`---army: ${kingdoms.get(kingdomsKeysSorted[0]).get(key).army}`)
        console.log(`---wins: ${kingdoms.get(kingdomsKeysSorted[0]).get(key).wins}`)
        console.log(`---losses: ${kingdoms.get(kingdomsKeysSorted[0]).get(key).losses}`)
    }
}