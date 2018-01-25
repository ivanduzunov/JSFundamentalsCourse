function GenerateSpiralMatrix(dimentions) {
    //unfinished
    let matrix = undefined

    for (let i = 0; i < Number(dimentions[0]); i++) {
        for (let j = 0; j < Number(dimentions[1]); j++) {
            matrix[i][j] = 0;
        }
    }

    let number = 1
    let rows = matrix.length
    let row = 0
    let col = matrix[0].length


    while(row <= rows){
        for (let i = 0; i < matrix[row].length; i++) {
            matrix[row][i] = number
            number++
        }
        for (let i = row + 1; i < rows; i++) {

        }
    }


}