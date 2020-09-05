const seedrandom = require('seedrandom');
const customList = require('../config/customList')

module.exports = function (arr) {
    let randomNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        seedrandom(element, {global: true});
        let rnumber = (Math.floor(Math.random() * ((customList.length-1) - 0 + 1)) + 0)
        while(randomNumbers.includes(rnumber)){
            element += 'a';
            seedrandom(element, {global: true});
            rnumber = (Math.floor(Math.random() * ((customList.length-1) - 0 + 1)) + 0)
        }

        randomNumbers.push(rnumber);
    }
    return randomNumbers;
}