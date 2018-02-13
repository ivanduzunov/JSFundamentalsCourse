function Solve(mapArr, commands) {
    100/100
    let matrix = []
    for (let i = 0; i < 5; i++) {
        let row = (mapArr[i].split(" "))
        matrix[i] = []
        for (let j = 0; j < 5; j++) {
            matrix[i][j] = Number(row[j])
        }
    }

    for (let command of commands) {
        let tokens = command.split(" ")
        switch (tokens[0]) {
            case "breeze":
                let row = Number(tokens[1])
                for (let i = 0; i < 5; i++) {
                    matrix[row][i] -= 15
                    if (matrix[row][i] < 0) {
                        matrix[row][i] = 0
                    }
                }
                break

            case "gale":
                let column = Number(tokens[1])
                for (let i = 0; i < 5; i++) {
                    matrix[i][column] -= 20
                    if (matrix[i][column] < 0) {
                        matrix[i][column] = 0
                    }
                }
                break

            case "smog":
                let value = Number(tokens[1])

                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        matrix[i][j] += value
                    }
                }
                break
        }
    }
    let polutedAreas = []
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (matrix[i][j] >= 50)
                polutedAreas.push(`[${i}-${j}]`)
        }
    }

    if (polutedAreas.length === 0) {
        console.log("No polluted areas")
    } else {
        console.log(`Polluted areas: ${polutedAreas.join(", ")}`)
    }
}