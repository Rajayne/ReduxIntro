function addToArrImpure(arr, val) {
  arr.push(val);
  return arr;
}

function addToArrPure(arr, val) {
  return [...arr, val];
}
