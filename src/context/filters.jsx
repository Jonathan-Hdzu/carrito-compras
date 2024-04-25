import { createContext, useState } from "react";
import PropTypes from 'prop-types'
//Crear el contexto
export const FiltersContext = createContext();

//Proveer el contexto

export function FiltersProvider ({children}) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return(
        <FiltersContext.Provider 
        value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
 FiltersProvider.propTypes = {
   children: PropTypes.any.isRequired,
 }
