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
                return `
                    <div class="card">
                    <div class="img">
                        <img src="${imgPath + movie.poster_path}">
                    </div>
                    <div class=" desc ">
                        <div class="title">
                            ${movie.title}
                        </div>
                        <div class="middle ">
                            <div class="rating ">
                                <img src="./images/rating.png" alt="${movie.title}">
                                <p>${movie.vote_average}</p>
                            </div>
                            <div class="reviews ">
                                <p>${movie.vote_count} reviews</p>
                            </div>
                        </div>
                        <div class="released">
                            <p>released date - ${movie.release_date}</p>
                        </div>

                    </div>
                </div>
                `
            });
        }


        main.innerHTML = getList()
    })
}

listMovie(apiLink);