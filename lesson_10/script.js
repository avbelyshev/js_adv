const url = 'https://api.giphy.com/v1/gifs/search';
const api_key = "jyisLyURbXXzotVGICgDvh0z4QTwI0oK";

const root = document.getElementById('root');
const gifs = document.getElementById('gifs');
const searcher = new GifsSearch(url, api_key);

gifs.addEventListener('input', searcher.debounce(function (event) {
    searcher.search(event.target.value).then(result => {
        searcher.renderGifs(root, result);
    });
}, 500))
