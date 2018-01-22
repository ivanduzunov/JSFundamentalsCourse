function IsPalindrome(input) {

    let reversedInput = input.split("").reverse().join("")
    
    if (input === reversedInput.toString()) {
        console.log("true")
    } else {
        console.log("false")
    }
}