import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import "sweetalert2/dist/sweetalert2.min.css";
import bg from "./assets/bg.jpg";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserProvider";
import { CartProvider } from "./context/CartProvider";
import { DEFAULT_ADMIN_USER } from "./constants/admin";
import { FavoritesProvider } from "./context/FavoritesContext";
const App = () => {
  useEffect(() => {
    const storedUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if (storedUsuarios.length === 0) {
      localStorage.setItem("usuarios", JSON.stringify([DEFAULT_ADMIN_USER]));
    }
  }, []);

  return (
    <UserProvider>
      <FavoritesProvider>
        <CartProvider>
          <div className="main-wrapper">
            <main
              className="flex-grow-1 bg-black text-white"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
              }}
            >
              {/* Props en header y Approuter para autentificar login/out */}
              <Header></Header>
              <AppRouter></AppRouter>
            </main>
            <Footer></Footer>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </CartProvider>
      </FavoritesProvider>
    </UserProvider>
  );
};

export default App;
