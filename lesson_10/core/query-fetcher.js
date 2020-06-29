class QueryFetcher {
    constructor() {
        this.cache = {};
    }

    getResult(url) {
        if (this.cache[url]) {
            return;
        }
        return fetch(url).then(result => {
            if (result.ok) {
                return result.json();
            }
            throw new Error('Error happened');
        })
    }

    async resultProcessing(url) {
        if (this.cache[url]) {
            return this.cache[url];
        }

        try {
            const result = await this.getResult(url);
            this.cache[url] = result.data;
            return result.data;
        } catch (err) {
            console.error('Something happened:', err);
        }
    }

    debounce(func, timeOut) {
        let lastCall = null;
        let lastCallTimer = null;
        return function (args) {
            let previousCall = lastCall;
            lastCall = Date.now();
            if (previousCall && ((lastCall - previousCall) <= timeOut)) {
                clearTimeout(lastCallTimer);
            }
            lastCallTimer = setTimeout(() => func(args), timeOut);
        }
    }
}
