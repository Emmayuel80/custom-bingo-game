const assert = require('assert')
const generateCard = require('../server/services/generateCard')


describe('#Divide String test', () => {
    it('Should throw an error if str is not a string', () => {
        assert.throws(() =>{require('../server/services/divideString')(12312)}, Error)
    })
    it('Should throw an error if the string length is less than 125', () => {
        assert.throws(() => {require('../server/services/divideString')('lksdajflkdsa')}, Error)
    })
    it('Should return an array with length of 25', () => {
        let arr = require('../server/services/divideString')('w8ZtkN0bp33ECYnm3YVXhjCmcHGiBe1FsoZByhaGPddcyPPN8EHMypyorwKtMAFfPlBItn27f6o1OLuWoVPaIy0J2oE4TYVUK1eoh0mzlsL95Si3UKPJhGySx24o8');
        assert.strictEqual(arr.length, 25)
    })
    it('Should return an array in which its elements are strings with a length of 5', () => {
        let arr = require('../server/services/divideString')('w8ZtkN0bp33ECYnm3YVXhjCmcHGiBe1FsoZByhaGPddcyPPN8EHMypyorwKtMAFfPlBItn27f6o1OLuWoVPaIy0J2oE4TYVUK1eoh0mzlsL95Si3UKPJhGySx24o8');
        assert.strictEqual(arr[0].length, 5)
    })
})

describe('#Card generation Tests', () => {
  it('Should return an array with length equal to 25', () => {
    const card = generateCard('w8ZtkN0bp33ECYnm3YVXhjCmcHGiBe1FsoZByhaGPddcyPPN8EHMypyorwKtMAFfPlBItn27f6o1OLuWoVPaIy0J2oE4TYVUK1eoh0mzlsL95Si3UKPJhGySx24o8')
    assert.equal(card.length, 25)
  })
})
