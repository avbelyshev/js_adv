var promise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        reject(1);
    }, 1000);
});

promise.then(console.log);
promise.catch((err) => {
    console.log('Rejected', err);
});
