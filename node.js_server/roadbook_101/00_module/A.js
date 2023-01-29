// * 방법 1. 한 파일에 하나만 exports
// const A = 'A from A.js';
// 00_module.exports = A;

// * 방법 2-1. 한 파일에 여러개 exports
// exports.A = 'A from A.js';
// exports.B = function() {
//     console.log('This is B in A.js')
//   }

// * 방법 2-2. 한 파일에 여러개 exports
module.exports = {
  A: 'A from A.js',
  B: function () {
    console.log('This is B in A.js');
    console.log('Hello');
    console.log('World');
  },
  C: [1, 2, 3],
  D: function (a, b) {
    return a + b;
  },
};
