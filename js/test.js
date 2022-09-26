// Inner object for asynchronous operation
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
const promise = new Promise((resolve, reject)=>{
  // some heavy work such as network, reading files
  console.log('Doing something...')
})