import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";
import { Product } from "../types";
// import { useCart } from "../context/CartContext";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  // const { addToCart } = useCart();

  useEffect(() => {
    // TODO: Cargar productos al montar el componente
  }, []);

  return (
    <div className="container">
      <h1>Nuestros Productos</h1>
      <div className="product-grid">
        {/* TODO: Mostramos un ProductCard por cada producto */}
      </div>
    </div>
  );
}