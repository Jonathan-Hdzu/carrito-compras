import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {

  //Acá obtengo la data que me interesa que es brindada por el context. Mi contexto se llama FiltersContext en filters, que es el componente donde he creado el contexto
  const { filters, setFilters } = useContext(FiltersContext);


  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return { filters, filterProducts, setFilters };
}
