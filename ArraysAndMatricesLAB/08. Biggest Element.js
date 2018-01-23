function BiggestNumber(matrix) {

    let currBiggestNumber = 0
    matrix.forEach(
        r => r.forEach(
            c => currBiggestNumber = Math.max(currBiggestNumber, c)));
    return currBiggestNumber;
}
