const shuffleString = (str) => {
    var arr = str.split("");
    n = arr.length;
  
    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr.join("");
  };
  
  module.exports = shuffleString;
  