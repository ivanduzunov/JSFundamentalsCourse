function LetterOccurances(input, letter){

    let counter = 0;
    let inputArr = input.split("");

    inputArr.forEach(function(element) {
        if (element ===    letter) {
          counter += 1;
        }
    });

    console.log(counter);
}

//LetterOccurances('hello', 'l');