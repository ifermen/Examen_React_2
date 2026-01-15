import { useCart } from "../context/CartContext";
import { createOrder } from "../services/productService";

export default function Cart() {
  // TODO: Consumir el contexto
  const {cart,total,removeFromCart,cleanCart} = useCart();
  
  const handleCheckout = async () => {
    createOrder({orderLines:cart,total}).then(() => {
      cleanCart();
      alert("Compra realizado con exito");
    })
    // TODO: Llamar al servicio createOrder y limpiar carrito
  };

  if (cart.length === 0) return <div className="container"><h2>El carrito está vacío 😢</h2></div>;

  return (
    <div className="container">
      <h2>Tu Carrito</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: Renderizar items del carrito */}
          {cart.map(cartItem => (
            <tr>
              <td>{cartItem.product.name}</td>
              <td>{cartItem.product.price}€</td>
              <td>{cartItem.quantity}</td>
              <td>{cartItem.product.price * cartItem.quantity}€</td>
              <td>
                <button onClick={() => removeFromCart(cartItem.product.id)}>Borrar</button>
              </td>
            </tr>
          ))}
          {/* <tr>
            <td colSpan={5}>No hay items todavía...</td>
          </tr> */}
        </tbody>
      </table>

      <div className="total">Total: {total} €</div>
      <button className="btn-checkout" onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
}