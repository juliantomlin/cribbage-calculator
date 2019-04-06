var counter = function (arr) {
  var points = 0
  for (var i = 0; i < arr.length; i++){
    for (var k = (i + 1); k < arr.length; k++){
      if (arr[i] + arr[k] === 15){
        points += 2;
      }
      else if (arr[i] + arr[k] < 15){
        for (var m = (k+1); m < arr.length; m++){
          if (arr[i] + arr[k] + arr[m] === 15){
            points += 2;
          }
          else if (arr[i] + arr[k] + arr[m] < 15){
            for (var p = (m+1); p < arr.length; p++){
              if (arr[i] + arr[k] + arr[m] + arr[p] === 15){
                points += 2;
              }
              else if ((i === 0) && (arr[i] + arr[k] + arr[m] + arr[p] + arr[p+1] === 15)){
                points += 2;
              }
            }
          }
        }
      }
    }
  }
  return points
}

module.exports = counter