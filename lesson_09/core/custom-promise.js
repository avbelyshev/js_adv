class CustomPromise {
    constructor(callback) {
        this.__success__ = [];
        this.__error__ = [];
        this._callback = callback;

        setTimeout( () => {
            callback(this._resolve.bind(this), this._reject.bind(this));
        }, 0)
    }

    then(successCb, rejectCb) {
        if (successCb) {
            this.__success__.push(successCb);
        }
        if (rejectCb) {
            this.__error__.push(rejectCb);
        }
    }

    catch(rejectCb) {
        this.then(null, rejectCb);
    }

    _resolve(result) {
        this.__success__.forEach( cb => cb(result) );
    }

    _reject(err) {
        this.__error__.forEach( cb => cb(err) );
    }
}
