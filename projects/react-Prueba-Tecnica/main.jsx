import { createRoot } from 'react-dom/client';
import { App } from '/src/App.jsx';

//Se debe de renombrar el archivo main.js a main.jsx
//Esto se debe a que el plugin instalado de vite no es capaz de compilar los archivos .js
const root = createRoot(document.getElementById('app'));

root.render(<App/>);