const messNames = [];

function writeCards(names, cards) {
    for  (let i = 0; i <  names.length; i++)  {
        messNames.push(`Thank you, ${names[i]}, for the wonderful ${cards} gift!`);
    }
    return messNames;
}
function countDown(number) {
    while (number <= 11, number >=0) {
        console.log(number--);
    }
    return number;
}