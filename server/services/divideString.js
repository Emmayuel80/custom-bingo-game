module.exports = function (str) {
    if (typeof str !== 'string'){
        throw new TypeError('The seed must be a string')
    }
    if(str.length < 125){
        throw new Error("The seed's length must be equal to 125");
    }
    let arr = []
    for (let i = 0; i < str.length; i += 5) {
      if(i+5 <= str.length){
          arr.push(str.substr(i, i + 5))
      }
    }
    return arr
}