function BuildOrbit(input) {

    let matrix = [];

    let matrixRowsCount = Number(input[0])
    let matrixColsCount = Number(input[1])

    for (let i = 0; i < matrixRowsCount; i++) {
        matrix[i] = []
        for (let j = 0; j < matrixColsCount; j++) {
            matrix[i][j] = 0
        }
    }

    let initialRow = Number(input[2])
    let initialCol = Number(input[3])

    matrix[initialRow][initialCol] = 1

    for (let i = 0; i < input[0]; i++) {
        for (let j = 0; j < input[1]; j++) {
            matrix[i][j] =
                Math.max(Math.abs(initialRow - i), Math.abs(initialCol - j)) + 1
        }
    }

    matrix.forEach(a => console.log(a.join(" ")))
}

BuildOrbit([5, 5, 2, 2])

