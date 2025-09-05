import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = sessionStorage.getItem("usuario");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
