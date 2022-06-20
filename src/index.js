
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if(matrix == null) return result;
  else if(matrix.length == 0) return result;
  matrix.map((element, i) => {
    if(i % 2) return element.reverse(); else return element;
  });
  matrix.forEach(element => {
    element.forEach(el => {
      result.push(el)
    });
  });
  return result;
}
