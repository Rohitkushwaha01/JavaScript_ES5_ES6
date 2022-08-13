
function cutFruit(fruit){
    return fruit * 4;
}

function fruitProccessor(apples, oranges){
    const applesPieces = cutFruit(apples);
    const orangesPieces = cutFruit(oranges);

    const juice = `Juice with ${applesPieces} apples and ${orangesPieces} oranges`;
    return juice;
}

const appleAndOrangeJucie = fruitProccessor(2,4);
console.log(appleAndOrangeJucie);