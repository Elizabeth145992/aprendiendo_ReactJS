import { useState } from 'react'
import './filters.css'
export function Filters({changeFilters}){
const [minPrice, setMinPrice] = useState(0);

const handleChangeMinPrice = (event) =>{
    setMinPrice(event.target.value);
    changeFilters(prevState => ({
        ...prevState,
        minPrice: event.target.value
    }))
}

const handleChangeCategory = (event) =>{
    changeFilters(prevState => ({
        ...prevState,
        category: event.target.value
    }))
}
    return(
        <>
        <section className='filters'>
            <div>
                <label htmlFor="price">Precio a partir de: </label>
                <input 
                type="range"
                id="price"
                min={0}
                max={1000}
                onChange={handleChangeMinPrice}
                ></input>
                <span>${minPrice}</span>
            </div>
            <div>
                <label>Categría</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value={'all'}>Todas</option>
                    <option value={'laptops'}>Potátiles</option>
                    <option value={'smartphones'}>Celulares</option>
                </select>
            </div>
        </section>
        </>
    )
}