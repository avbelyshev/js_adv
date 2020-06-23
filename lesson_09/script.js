var promise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        reject(1);
    }, 1000);
});

promise.then((result) => {
    console.log('Resolved', result);
});
promise.catch((err) => {
    console.log('Rejected', err);
});
promise.catch((err) => {
    console.log('Rejected2', err);
});

console.log(promise);

var promise2 = CustomPromise.resolve(1);
console.log(promise2);
