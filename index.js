let inp1 = document.querySelector("input");
let cardMovies = document.querySelector("#cardMovies");
let button = document.querySelector("button");


async function asinProm() {

    try {

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjE5ODQ5NjMxYTRlMWZiYzVlMDIzYWUwMDc4ZDgzOSIsInN1YiI6IjY0NjdmNmIwMmJjZjY3MDEzODk0MzM2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dyQbf0TAGw-xO-uOrPoWL_okGTOkcJlklzGraLB8-d8'
            }
        };
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
        let data = await response.json();

        console.log(data.results, "data");

        cardMovies.innerHTML = data.results.map(el => {
            return `<div class="card" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${el.title}</h5>
                <p class="card-text">${el.year}</p>
            </div>
        </div>`
        })

        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

asinProm();