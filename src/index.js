
exports.min = function min(array) {
  if (!array || array.length === 0) return 0;
  return Math.min(...array);
}

exports.max = function max(array) {
  if (!array || array.length === 0) return 0;
  return Math.max(...array);
}

exports.avg = function avg(array) {
  if (!array || array.length === 0) return 0;
  let count = array.reduce((sum, item) => sum = sum + item, 0);
  return count / array.length;
}
