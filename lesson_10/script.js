const base_url = 'https://api.giphy.com/v1/gifs/search';
const api_key = "jyisLyURbXXzotVGICgDvh0z4QTwI0oK";

const root = document.getElementById('root');
const gifs = document.getElementById('gifs');
const fetcher = new QueryFetcher();

function renderGifs(root, data) {
    root.innerHTML = '';

    for (let key in data) {
        const gif = new Image();
        gif.src = data[key].images.fixed_height_small_still.url;
        root.append(gif);
    }
}

gifs.addEventListener('input', fetcher.debounce(function (event) {
    const url = `${base_url}?q=${event.target.value}&api_key=${api_key}`;
    fetcher.resultProcessing(url).then(result => {
        renderGifs(root, result);
    });
}, 500))
