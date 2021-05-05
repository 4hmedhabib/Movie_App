const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

const apiLink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const listMovie = (url) => {
    fetch(url).then(res => {
        return res.json();

    }).then((data) => {
        // main.innerHTML = getList()
        const getList = () => {
                return data.results.map(movie => {
                    console.log(movie);
                });
            }
            // data.results.forEach(movie => {
            //     const div = document.createElement('div')
            //     const img = document.createElement('img')
            //     const text = document.createElement('h2')
            //     text.innerHTML = movie.title;
            //     img.src = imgPath + movie.poster_path;

        //     div.appendChild(img)
        //     div.appendChild(text)
        //     main.appendChild(div)
        // });
        getList()
            // main.innerHTML = getList()
    })
}

listMovie(apiLink);