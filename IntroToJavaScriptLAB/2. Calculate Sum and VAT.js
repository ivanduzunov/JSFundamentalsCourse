function sumNumbers(input){

    let sum = 0;

    input.forEach(function(element) {
       sum += element;
    });

    let vat = sum * 0.2;

    let total = sum + vat;

    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + total)
}

///sumNumbers([1.20, 2.60, 3.50]);