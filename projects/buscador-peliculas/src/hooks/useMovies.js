import { useState, useRef, useMemo, useCallback } from 'react';
import {searchMovies} from '../services/movies';

export function useMovies({ search, sort }){
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSeach = useRef(search);

  const getMovies = useCallback(async({ search }) =>{
      if(search === previousSeach.current) return;

      try {
        setLoading(true);
        setError(null);
        previousSeach.current =search;
        const newMovies = await searchMovies({search});
        setMovies(newMovies);
      } catch (e) {
        setError(e.message);
      }finally{
        setLoading(false);
      }
  }, [])

  const sortMovies = useMemo(() => { 
   return sort
   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
   : movies;
  }, [sort, movies])

  return { movies: sortMovies, getMovies, loading, errorMovies: error }
}
