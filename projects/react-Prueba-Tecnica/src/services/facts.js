const cat_endpoint_random_cat = 'https://catfact.ninja/fact';

export const getRandomFact = async () =>{
    const res = await fetch(cat_endpoint_random_cat);
    const data = await res.json();
    const { fact } = data;
    return fact;
}

export const  getImageCat =  async (threeWoords) =>{
    const res = await fetch(`https://cataas.com/cat/says/${threeWoords}?size=500&color=red&json=true`);
    const data = await res.json();
    const { url } = data;
    return url;
}