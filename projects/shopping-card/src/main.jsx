import { FiltersProvider } from './context/FiltersContext.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
