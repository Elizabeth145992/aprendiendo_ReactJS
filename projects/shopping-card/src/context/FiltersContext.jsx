import { createContext, useState } from "react";

//1. Crea el contexto. Este es el que tenemos que consumir
export const FiltersContext = createContext()

// 2. Crear el provider, para proveer el contexto
export function FiltersProvider({ children }){
    const [ filters, setFilters] = useState({
        category: "all",
        minPrice: 0
    });


    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}

