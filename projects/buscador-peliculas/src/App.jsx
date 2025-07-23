import { useCallback, useState } from "react";
import "./App.css";
//import { useRef } from 'react';
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';

function App() {
  //const { movies } = useMovies();
  const { search, setSearch, error } = useSearch();
  const [sort, setSort] = useState(false);
  const { movies, getMovies, loading, errorMovies } = useMovies({search, sort});
  
  const debouncedGetMovies = useCallback(
    debounce(search =>{
    getMovies({search})
  }, 300)
  ,[getMovies])
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
    getMovies({ search });
  };

  const handleChange = (event) =>{
    const newSearch = event.target.value;
    
    if(newSearch.startsWith(' ')) return;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  }

  const handleSort = () => {
    setSort(!sort);
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
            <input type="checkbox" onChange={handleSort} checked={sort} />
          </form>
          {error && <p style={{ color:'red' }}>{error}</p>}
        </header>

        <main>
          {loading ? <p>Cargando...</p>: null}
          {errorMovies ? <p style={'color:red;'}>{errorMovies}</p>: null}
          <Movies movies={movies} />
        </main>
      </div>
    </>
  );
}

export default App;
