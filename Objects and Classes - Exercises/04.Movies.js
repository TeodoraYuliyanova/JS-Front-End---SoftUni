function storeMovies(input) {

    let movieLibrary = [];

    for (let line of input) {

        function movieExists(name, movieLibrary) {
            return movieLibrary.filter(m => m.name === name).length > 0;
        }

        let words = line.split(" ");

        let movie = {};

        let name = '';
        let date = '';
        let director = '';

        if (words.includes("addMovie")) {
            name = words.slice(1).join(' ');

            if (!movieExists(name, movieLibrary)) {
                movie['name'] = name;
                movieLibrary.push(movie);
            }


        } else if (words.includes("directedBy")) {
            let index = words.indexOf("directedBy");

            name = words.slice(0, index).join(" ");
            director = words.slice(index + 1).join(' ');

            if (movieExists(name, movieLibrary)) {
                movieLibrary.filter(m => m.name === name)[0]['director'] = director;
            }


        } else if (words.includes("onDate")) {
            let index = words.indexOf("onDate");

            name = words.slice(0, index).join(' ');
            date = words.slice(index + 1).join(' ');


            if (movieExists(name,movieLibrary)) {
                movieLibrary.filter(m => m.name === name)[0]['date'] = date;
            }

        }
    }

       movieLibrary.filter(m => Object.entries(m).length === 3)
       .map(m => JSON.stringify(m))
       .forEach(m => console.log(m))
}

storeMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);