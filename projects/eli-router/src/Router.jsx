import { useEffect, useState } from 'react';
import { EVENTS } from './const';
import { match } from 'path-to-regexp';

export function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404 - Not Found</h1>}) {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener(EVENTS.NAVIGATION, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.NAVIGATION, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};
  
  const Page = routes.find(({ path }) => {
    if (path === currentPage) return true;
     
    // Se utilizó la librería path-to-regexp para hacer match de rutas dinámicas
    // https://www.npmjs.com/package/path-to-regexp
    // Ejemplo: /search/:query -> /search/javaScript
    // match('/search/:query', { decode: decodeURIComponent }) -> función
    // match('/search/:query', { decode: decodeURIComponent })('/search/javaScript') -> {path: '/search/javaScript', index: 0, params: {query: 'javaScript'}}
    // Si no hay match regresa null
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPage);
    if (!matched) return false;

    //guardamos los parámetros de la ruta dinámica
    // Y que se han extraído con patgh-to-regexp
    //por ejemplo: si la ruta es /search/:query
    //y la URL actual es /search/javaScript
    //entonces matched.params.query será 'javaScript'
    routeParams = matched.params; // {query: 'javaScript'} -> seasrch/javaScript
    return true;
  })?.component;

  return Page 
  ? <Page routeParams={routeParams} /> 
  : <DefaultComponent routeParams={routeParams} />;
}