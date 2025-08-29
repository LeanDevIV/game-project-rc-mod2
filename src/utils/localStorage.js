import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // Estado inicial -> si hay en localStorage, usamos eso, sino el valor inicial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error leyendo localStorage", error);
      return initialValue;
    }
  });

  // Cada vez que cambie storedValue -> se guarda en localStorage
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error guardando en localStorage", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
