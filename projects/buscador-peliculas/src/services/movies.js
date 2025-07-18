export const searchMovies = async ({ search }) =>{
    if(search == '') return null;

    try {
        const respose = await fetch(`https://www.omdbapi.com/?apikey=c479d1d1&s=${search}`);
        const json = await respose.json();

        const movies = json.Search;
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    } catch (e) {
        throw new Error('Error searching movies: ' + e);
    }
}