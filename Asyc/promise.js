// state: pending , resolve(fulfilled), reject

// 1. Producer
const promise = new Promise((resolve, reject) => {
    console.log("doing something");
    setTimeout(() => {
        // resolve('TG');
        reject(new Error("No network"));
    }, 2000);
});

// 2. Consumers: then(resolve), catch(reject), finally(always)
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Work done!");
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("chicken"), 1000);
    });

const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${hen} -> egg`);
        }, 1000);
    });

const cook = (egg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${egg} -> fry`);
        }, 1000);
    });
};
getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal));
