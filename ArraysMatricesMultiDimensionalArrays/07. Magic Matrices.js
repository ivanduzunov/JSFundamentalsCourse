function IsMagical(input) {
    let initialRowSum = 0;
    for (let j = 0; j < input[0].length; j++) {
        initialRowSum += input[0][j]
    }

    for (let i = 1; i < input.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < input[i].length; j++) {
            rowSum += input[i][j]
        }
        if (rowSum != initialRowSum) {
            return false
        }
    }

    for (let row = 1; row < input[0].length; row++) {
        let colSum = 0
        for (let col = 0; col < input.length; col++) {
            colSum += input[row][col];
        }
        if (colSum != initialRowSum) {
            return false
        }
    }
    return true
}