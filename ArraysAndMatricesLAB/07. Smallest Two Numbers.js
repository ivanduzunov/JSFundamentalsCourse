function SmallestNums(arr) {
    let result = arr
        .sort((a, b) => (a > b))
        .slice(0, 2)

    console.log(result.join(" "));
}
