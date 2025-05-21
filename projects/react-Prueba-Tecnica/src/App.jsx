import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";
import './App.css';

export function App(){
    const { fact, refreshFact } = useCatFact();
    const { imageUrl } = useCatImage({ fact });

    const handleClick = async () => {
       refreshFact();
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