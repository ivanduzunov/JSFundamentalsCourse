function OddNumbersReversed(arr) {

    let result = arr
        .filter((e, i) => i % 2 != 0)
        .map(e => e * 2)
        .reverse()


    console.log(result.join(" "));
}