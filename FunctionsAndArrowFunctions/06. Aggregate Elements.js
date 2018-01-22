function aggregateElements(elements) {

    function aggregate(arr, initVal, func) {

        let val = initVal; //0

        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }

        console.log(val);
    }

    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);
}

