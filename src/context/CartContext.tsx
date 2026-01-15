import { createContext, useContext, useState, type ReactNode } from "react";
import type { CartItem, Product } from "../types";

interface CartContextType {
  cart:CartItem[],
  addToCart : (product: Product) => void,
  removeFromCart : (id: string) => void,
  cleanCart : () => void,
  total:number
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const cartCopy = [...cart];
    const cartItemFound = cartCopy.find(cartItem => cartItem.product.id == product.id);
    if(cartItemFound){
      cartItemFound.quantity++;
    }else{
      cartCopy.push({product,quantity:1});
    }
    
    setCart(cartCopy);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(cartItem => cartItem.product.id != id));
  };

  const cleanCart = () => {
    setCart([]);
  }

  // TODO: Calcular el total real
  const total = cart.reduce(((carry,cartItem) => carry + cartItem.product.price*cartItem.quantity),0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      cleanCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};