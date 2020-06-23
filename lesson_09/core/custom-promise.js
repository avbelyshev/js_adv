class CustomPromise {
    constructor(callback) {
        this.__success__ = [];
        this.__error__ = [];
        this._callback = callback;
        this._status = 'pending';
        this._value = null;

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

    static resolve(value) {
        return new CustomPromise((resolve, reject) => {
            resolve(value);
        });
    }

    static reject(value) {
        return new CustomPromise((resolve, reject) => {
            reject(value);
        });
    }

    _resolve(value) {
        this.__success__.forEach( cb => cb(value) );
        if (this._status === 'pending') {
            this._status = 'fulfilled';
            this._value = value;
        }
    }

    _reject(value) {
        this.__error__.forEach( cb => cb(value) );
        if (this._status === 'pending') {
            this._status = 'rejected';
            this._value = value;
        }
    }
}
