import { createContext, useContext, useState, ReactNode } from "react";
import { Product, CartItem } from "../types";

interface CartContextType {
  // TODO: Define el tipo del contexto
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    // TODO: Implementar lógica
    // 1. Verificar si el producto ya está en el carrito
    // 2. Si está, incrementar quantity
    // 3. Si no está, añadirlo con quantity: 1
    console.log("Añadir al carrito:", product);
  };

  const removeFromCart = (id: string) => {
    // TODO: Implementar lógica para eliminar producto
  };

  // TODO: Calcular el total real
  const total = 0;

  return (
    // TODO: Proveer el contexto con los valores necesarios
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};