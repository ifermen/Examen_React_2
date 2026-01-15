import { Product } from "../types";

interface Props {
  product: Product;
  onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} €</p>
      <button onClick={() => onAdd(product)}>Añadir al Carrito</button>
    </div>
  );
}