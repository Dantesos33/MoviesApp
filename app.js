const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'db9ee93c3cmshc971167ed624cccp1a82b2jsn54dbf73e0547',
        'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
    }
};

const search_btn = document.querySelector(".movies__search button");
const search_input = document.querySelector(".movies__search input");
const movie_grid = document.querySelector(".movies__grid");
let url ;

let getMovies = async (url) => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        data = result.titleResults.results;
        let movies = data.map((movie) => {
            console.log(movie);
            let list = document.createElement('div');
            list.innerHTML = `<div class="movies__col">
            <img class="movie__img" src="${movie.titlePosterImageModel.url
            }">
            <p class="movie__name">${movie.titleNameText}</p>
        </div>`;
        movie_grid.appendChild(list);
        });
    } catch (error) {
        console.error(error);
    }
}


const popularMovies = () => {
    url = `https://imdb146.p.rapidapi.com/v1/find/?query=avengers`;
    getMovies(url);
    url = `https://imdb146.p.rapidapi.com/v1/find/?query=batman`;
    getMovies(url);
    url = `https://imdb146.p.rapidapi.com/v1/find/?query=johnwick`;
    getMovies(url);
}

window.addEventListener("load",popularMovies());

search_btn.addEventListener("click", () => {
    movie_grid.innerHTML = "";
    if (search_input.value === "") {
        popularMovies();
    }
    else {
        url = `https://imdb146.p.rapidapi.com/v1/find/?query=${search_input.value}`;
        getMovies(url);
    }
});

