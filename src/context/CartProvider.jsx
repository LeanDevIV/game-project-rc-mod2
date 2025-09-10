import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    setCart((prev) => {
      // Si ya existe (PREV), actualiza cantidad
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Si no existe (PREV), lo agrega con cantidad 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };
  const cartCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };
  // Total en dinero
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
