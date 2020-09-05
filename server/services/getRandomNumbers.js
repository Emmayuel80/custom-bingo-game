const seedrandom = require('seedrandom');
const customList = require('../config/customList')

module.exports = function (arr) {
    let randomNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        seedrandom(element, {global: true});
        randomNumbers.push(Math.floor(Math.random() * ((customList.length-1) - 0 + 1)) + 0);
    }
    return randomNumbers;
}