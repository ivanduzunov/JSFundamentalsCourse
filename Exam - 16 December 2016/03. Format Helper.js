function Clean(arr) {
    let text = arr[0]
    let regEx = /[.,!?:;]{1}\+\s*/g
    let match = text.match(regEx)

}