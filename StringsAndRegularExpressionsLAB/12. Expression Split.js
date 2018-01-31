function Split(input) {
    let splitted = input.split(/[\s.();,]+/);

    for (let i = 0; i < splitted.length; i++) {
        console.log(splitted[i]);
    }
}