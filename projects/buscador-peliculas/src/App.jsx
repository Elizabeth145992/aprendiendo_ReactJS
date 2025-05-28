import { useState } from 'react';
import "./App.css";
//import { useRef } from 'react';
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();
  const [ query, setQuery] = useState('');
  //const inputRef = useRef();

  //Usando el hook de Ref
  /*const handleSubmit = (event) =>{
    event.preventDefault();
    const inputValue = inputRef.current.value;
  }*/

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query);
  };

  const handleChange = (event) =>{
    setQuery(event.target.value);
  }
  

  return (
    <>
      <div>
        <header className="page">
          <h1>Buscador de películas</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              /*ref={inputRef}*/
              value={query}
              onChange={handleChange}
              name="query"
              type="text"
              placeholder="Busca tu pelicula favorita"
            />
            <button type="submit">Buscar</button>
          </form>
        </header>

        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  );
}

export default App;
