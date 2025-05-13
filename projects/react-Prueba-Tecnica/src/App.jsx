import { useEffect, useState } from "react";
import './App.css';

const cat_endpoint_random_cat = 'https://catfact.ninja/fact';
export function App(){
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();


    useEffect(()=>{
        fetch(cat_endpoint_random_cat)
        .then(res => res.json())
        .then(data => {
            setFact(data.fact);
        });
        //Si se usa para peticiones asincronas con el fetch
        /*async function getRandomFact() {
            const res = await fetch(cat_endpoint_random_cat);
            const json = await res.json();
            setFact(json);
        }
        getRandomFact();*/
    }, [])

    useEffect(()=>{
        if(!fact) return;
        const threeWoords = fact.split(' ').slice(0,3).join(' ');

        fetch(`https://cataas.com/cat/says/${threeWoords}?
                size=500&color=red&json=true`)
                .then(res => res.json())
                .then(response => {
                    const {url} = response;
                    setImageUrl(url);
                })
    }, [fact])

    return(
    <>
    <main>
        <h1>React</h1>
       {fact && <p>{fact}</p>}
       {imageUrl && <img src={imageUrl} 
       alt={`Image extracted using the first word for ${fact}`} />}
    </main>
    </> 
    )
}