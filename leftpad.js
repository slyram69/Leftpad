module.exports = leftPad;

function leftPad (str, len, ch){

  var paddedString = str;
  for(var i = 0; i < len; i++){
     paddedString += "0";
  }
  return str;
}
