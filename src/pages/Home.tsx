import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const { addToCart } = useCart();

  useEffect(() => {
    getProducts().then(returnedProducts => setProducts(returnedProducts));
  }, []);

  return (
    <div className="container">
      <h1>Nuestros Productos</h1>
      <div className="product-grid">
        {/* TODO: Mostramos un ProductCard por cada producto */}
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAdd={addToCart}></ProductCard>
        ))}
      </div>
    </div>
  );
}