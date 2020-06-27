class GifsSearch {
    constructor(url, api_key) {
        this.url = url;
        this.api_key = api_key;
        this.cache = {};
    }

    getResult(query) {
        if (this.cache[query]) {
            return;
        }
        return fetch(`${this.url}?q=${query}&api_key=${this.api_key}`).then(result => {
            if (result.ok) {
                return result.json();
            }
            throw new Error('Error happened');
        })
    }

    async search(query) {
        if (this.cache[query]) {
            return this.cache[query];
        }

        try {
            const result = await this.getResult(query);
            this.cache[query] = result.data;
            return result.data;
        } catch (err) {
            console.error('Something happened:', err);
        }
    }

    renderGifs(root, data) {
        root.innerHTML = '';

        for (let key in data) {
            const gif = new Image();
            gif.src = data[key].images.fixed_height_small_still.url;
            root.append(gif);
        }
    };

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
