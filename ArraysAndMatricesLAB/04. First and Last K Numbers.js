function Slice(arr){

    let count = Number(arr.shift())

    console.log(arr.slice(0, count))
    console.log(arr.slice(arr.length-count))
}