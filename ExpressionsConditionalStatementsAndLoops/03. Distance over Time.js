function calcDistanceOverTime(arr) {

    let obj1 = arr[0];
    let obj2 = arr[1];
    let timeSeconds = arr[2];

    let first = (obj1 / 3600) * (timeSeconds * 1000);

    let second = (obj2 / 3600) * (timeSeconds * 1000);

    let difference = Math.abs(first - second);

    console.log(difference)
}

