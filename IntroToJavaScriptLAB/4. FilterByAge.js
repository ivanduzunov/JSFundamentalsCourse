function FilterByAge(minimumAge, firstPersonName, firstPersonAge, secondPersonName, secondPersonAge){

    var dict = [];


        if (firstPersonAge >=   minimumAge) {
            dict.push({
                key:   firstPersonName,
                value: firstPersonAge
            });
        }

        if (secondPersonAge >=   minimumAge) {
            dict.push({
                key:   secondPersonName,
                value: secondPersonAge
            });
        }

         for (var i=0;i<dict.length;i++) {
            console.log("{ name: "+ "'" + dict[i].key + "'" + ", age: "+  dict[i].value  + " }");
        }


}

//FilterByAge(12, 'Ivan', 15, 'Asen', 9);