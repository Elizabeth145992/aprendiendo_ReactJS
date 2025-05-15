import { useEffect, useState } from "react";
import { getRandomFact } from "./services/facts";
import { useCatImage } from "./hooks/useCatImage";
import './App.css';

export function App(){
    const [fact, setFact] = useState();
    const { imageUrl } = useCatImage({ fact });

    useEffect(()=>{
        getRandomFact().then(setFact);

        /*
        Se pueden pasar las fucniones como parametros
        getRandomFact().then(newFact => {
            setFact(newFact);
        });*/

        //Si se usa para peticiones asincronas con el fetch
        /*async function getRandomFact() {
            const res = await fetch(cat_endpoint_random_cat);
            const json = await res.json();
            setFact(json);
        }
        getRandomFact();*/
    }, [])

    const handleClick = async () => {
       const newFact = await getRandomFact();
       setFact(newFact);
    }

    return(
    <>
    <main>
        <h1>React</h1>
        <button onClick={handleClick}>Get new fact</button>
       {fact && <p>{fact}</p>}
       {imageUrl && <img src={imageUrl} 
       alt={`Image extracted using the first word for ${fact}`} />}
    </main>
    </> 
    )
}