function RemoveDecreasindNumbers(input) {
    let result = []
    result.push(input[0])
    let currBiggestNumber = input[0]

    for (let i = 1; i < input.length; i++) {
        if (currBiggestNumber > input[i]) {
           continue
        }else{
            result.push(input[i])
            currBiggestNumber = input[i]
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i])
    }
}