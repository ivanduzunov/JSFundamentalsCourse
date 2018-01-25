function DiagonalAttack(input) {
    let matrix = []

    for (let i = 0; i < input.length; i++) {
        matrix[i] = input[i].split(' ').map(Number)
    }

    let firstSum = 0
    let col = 0
    for (let i = 0; i < matrix.length; i++) {
        firstSum += matrix[i][col]
        col++
    }

    let secondSum = 0
    col = matrix[0].length - 1

    for (let i = matrix.length - 1; i >= 0; i--) {
        secondSum += matrix[i][col]
        col--
    }


    if (firstSum === secondSum) {
        let col = 0
        let reverseCol = matrix[0].length - 1

        for (let i = matrix.length - 1; i >= 0; i--) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (j != reverseCol && j != col) {
                    matrix[i][j] = firstSum
                }
            }
            col++
            reverseCol--
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "))
    }
}

DiagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)