import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x:0, y:0});

  //Cambio de posiciones del cursor para seguir la bolita
  //Un UseEffect se puede ejecutar:
  //[] -> solo se ejecuta cuando se monta el componente
  // [dependencia, ...] -> se ejecuta cuando cambia la o las dependencias
  // undefined -> se ejecuta cada vez de que se renderiza el componente
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY} = event;
      setPosition({x: clientX, y: clientY});
    }

    if(enabled){
      window.addEventListener('pointermove', handleMove);
    }

    //Se ejecuta cuando el domponente se desmonta
    //Se ejecuta cuando cambian las dependencias, antes de ejecutar el efecto de neuvo
    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled])

  //cambiar estilo del cursor
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
    <main>
      <div style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={()=>setEnabled(!enabled)}>
        {enabled ? 'Desactivar ': 'Activar '} seguir puntero
      </button>
    </main>
    </>
  )
}

export default App
