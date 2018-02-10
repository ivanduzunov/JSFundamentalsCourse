function Solve(portions, commands) {
    let mealsEaten = 0

    for (let command of commands) {
        let tokens = command.split(" ")

        if (command === "End" || portions.length === 0) {
            break
        }


        switch (tokens[0]) {

            case "Serve":
                if (portions.length === 0){
                    break
                }
                console.log(`${portions.pop()} served!`)
                break

            case "Eat":
                if (portions.length === 0){
                    break
                }
                console.log(`${portions.shift()} eaten`)
                mealsEaten++
                break

            case "Add":
                if (tokens.length != 2) {
                    break
                }
                portions.unshift(tokens[1])
                break

            case "Shift":
                if (tokens.length != 3 || portions.length ===0) {
                    break
                }

                let firstIndex = Number(tokens[1])
                let secondIndex = Number(tokens[2])
                if (firstIndex < 0 || secondIndex > portions.length - 1|| portions.length ===0) {
                    break
                }
                let firstMeal = portions[firstIndex]
                let secondMeal = portions[secondIndex]
                portions[secondIndex] = firstMeal
                portions[firstIndex] = secondMeal
                break

            case "Consume":
                if (tokens.length !== 3 || portions.length ===0) {
                    break
                }
                let fIndex = Number(tokens[1])
                let sIndex = Number(tokens[2])

                if (fIndex === sIndex){
                    portions.remove(fIndex)
                    mealsEaten++
                }else{
                    if (fIndex < 0 || sIndex > portions.length - 1) {
                        break
                    }
                    let portionsToEat = portions.splice(fIndex, sIndex - fIndex + 1)
                    mealsEaten += portionsToEat.length
                }

                console.log("Burp!")
                break

            case defaultStatus:
                break
        }
    }

    if (portions.length > 0) {
        console.log(`Meals left: ${portions.join(", ")} `)
    } else {
        console.log("The food is gone")
    }
    console.log(`Meals eaten: ${mealsEaten}`)

}

Solve(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End']
)