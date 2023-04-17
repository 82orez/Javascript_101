const flattened = [1, [2, 3], [4, 5, [6, 7, 8]]];

function spread(arr) {
  let result = [];

  for (const el of arr) {
    if (!Array.isArray(el)) {
      result.push(el);
    } else {
      result = [...result, ...el];
    }
  }
  return result;
}

console.log(spread(flattened));
console.log((spread(spread(flattened))));
