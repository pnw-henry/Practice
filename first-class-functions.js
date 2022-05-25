const plants = ['monstera', 'pothos', 'philodendron'];

function loopElements(array){
    for (element of array){
        let returnValue = capElement(element);
        console.log(returnValue);
    }
}

const capElement = function(element){
    element.toUpperCase();
    console.log(element);
    return element;
}

loopElements(plants);