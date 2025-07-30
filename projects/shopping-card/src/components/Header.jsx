import { Filters } from './Filters.jsx'

export function Header({changeFilters}){
    return(
        <>
        <header>
            <h1> React Shop 🛒
                <Filters changeFilters={changeFilters} />
            </h1>
        </header>
        </>
    )
}