import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart';



export function Footer () {
    const {filters} = useFilters();
    const {cart} = useCart();
    return (
        <footer className="footer">
            {/* {JSON.stringify(filters, null, 2)}
            {JSON.stringify(cart, null, 2)} */}
            <h4><span>Nuestros servicio online</span></h4>
            <h5>Dezhops</h5> 
        </footer>
    )
}