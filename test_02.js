// const arr = [3, 17, 75, 80, 202];

const f = arr => {
  return arr.map(value => {
    return value * 2;
  });
};

let result = f([3, 17, 75, 80, 202]);
console.log(result);
