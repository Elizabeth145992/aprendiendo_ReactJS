import { Filters } from './Filters.jsx'

export function Header(){
    return(
        <>
        <header>
            <h1> React Shop 🛒
                <Filters />
            </h1>
        </header>
        </>
    )
}