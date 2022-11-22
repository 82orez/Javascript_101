const sleep = (wait) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('hello');
      reject(new Error('error'));
    }, wait);
  });
}