import { useState, useEffect } from "react";
import { getImageCat } from "../services/facts";

//custom hook
export function useCatImage({ fact }){
    const [imageUrl, setImageUrl] = useState();
    useEffect(()=> {
        if(!fact) return;
        
        const threeWoords = fact.split(' ').slice(0, 3).join(' ');
        getImageCat(threeWoords).then(url => {
            setImageUrl(url);
        });
    }, [fact])

    return {imageUrl};
}