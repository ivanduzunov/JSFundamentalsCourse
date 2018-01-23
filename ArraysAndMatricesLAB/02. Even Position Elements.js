function EvenElements(elements) {
    var result = elements.filter(function (item) {
        return  elements.indexOf(item) % 2 === 0
    }).join(" ");

    return result
}

//console.log(EvenElements(['20', '30', '40']));