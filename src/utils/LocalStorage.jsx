import { useState, useEffect } from "react";

export function useStorage(key, initialValue, type = "local") {
  // Elegimos qué storage usar
  const storage =
    type === "session" ? window.sessionStorage : window.localStorage;

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error leyendo storage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      storage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error guardando en storage", error);
    }
  }, [key, storedValue, storage]);

  return [storedValue, setStoredValue];
}
