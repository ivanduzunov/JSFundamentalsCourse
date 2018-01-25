function Sort(input) {

    let result = input.sort(function(a, b){
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    for (let i = 0; i < result.length; i++) {
        console.log(result[i])
    }
}