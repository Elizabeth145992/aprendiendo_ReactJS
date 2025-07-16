import "./App.css";
//import { useRef } from 'react';
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from './hooks/useSearch';

function App() {
  const { movies } = useMovies();
  const { search, setSearch, error } = useSearch();
  //const inputRef = useRef();

  //Usando el hook de Ref
  /*const handleSubmit = (event) =>{
    event.preventDefault();
    const inputValue = inputRef.current.value;
  }*/

  const handleSubmit = (event) => {
    //Esta línea sirve para poder recuperar varios valores de inputs en una sola variable
    //const fields = Object.fromEntries(new window.FormData(event.target));
    event.preventDefault();
  };

  const handleChange = (event) =>{
    const newSearch = event.target.value;
    if(newSearch.startsWith(' ')) return;
    setSearch(event.target.value);
  }

  return (
    <>
      <div>
        <header className="page">
          <h1>Buscador de películas</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              /*ref={inputRef}*/
              value={search}
              onChange={handleChange}
              name="query"
              type="text"
              placeholder="Busca tu pelicula favorita"
            />
            <button type="submit">Buscar</button>
          </form>
          {error && <p style={{ color:'red' }}>{error}</p>}
        </header>

        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  );
}

export default App;
