import './App.css';
import results from './mocks/data.json';
import noResults from './mocks/no-results.json';

function App() {
  const movies = results.Search;
  const hasMovies = movies?.length > 0;

  return (
    <>
    <div>
      <header className='page'>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input type="text" placeholder='Busca tu pelicula favorita' />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        {
        hasMovies ?(
          <ul>
            {movies.map(movie => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ):
        (<p>No se encontaron películas</p>)
        }
      </main>
    </div>
    </>
  )
}

export default App
