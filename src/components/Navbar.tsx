import { Link, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const {cart} = useCart();
  // TODO: Obtener items del carrito para mostrar el contador real
  const cartCount = cart.length; 

  return (
    <>
      <nav>
        {/* TODO: Enlace a la página principal con el texto 'TechStore 🛒' */}
        <Link to={"/"}>TechStore 🛒</Link>
        <div>
          {/* Enlace al carrito con el texto 'Carrito <span>Aquí poner el número de productos en el carrito</span>'  */}
          <Link to={"/cart"}>Carrito <span>{cartCount}</span></Link>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
}