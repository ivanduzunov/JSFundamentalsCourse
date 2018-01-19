function calcDistanceBetweenTwoPoints(arr) {
    "use strict";
    let x1 = arr[0];
    let y1 = arr[1];
    let z1 = arr[2];

    let x2 = arr[3];
    let y2 = arr[4];
    let z2 = arr[5];

    let distance = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2) +((z1 - z2)**2));
    console.log(distance)
}
