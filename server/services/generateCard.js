const customList = require('../config/customList')
const divideString = require('./divideString')
const getRandomNumbers = require('./getRandomNumbers')

module.exports = function (seed) {
    let card = [];
    let randomNumbers = getRandomNumbers(divideString(seed));
    for (let i = 0; i < randomNumbers.length; i++) {
        const element = randomNumbers[i];
        card.push(customList[element])
    }
    return card;
}


