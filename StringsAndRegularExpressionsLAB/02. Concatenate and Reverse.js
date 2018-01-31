function ConcatAndReverse(arr) {
    console.log(arr.join('')
        .split('')
        .reverse().join(''))
}

ConcatAndReverse(['race', 'car']);