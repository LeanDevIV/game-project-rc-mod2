import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FavoritesPage from "../pages/FavoritesPage";
import AdminPage from "../pages/AdminPage";
import Error404Page from "../pages/Error404Page";
import CartPage from "../pages/CartPage";
import RecuperarPassword from "../components/RecuperarPassword";
import DetalleJuego from "../components/DetalleJuego";
import AboutUs from "../pages/AboutUs";
import ContactPage from "../pages/ContactPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/Acerca" element={<AboutUs />}></Route>
      <Route path="/favoritos" element={<FavoritesPage />}></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="/recuperar" element={<RecuperarPassword />}></Route>
      <Route path="/Carrito" element={<CartPage />}></Route>
      <Route path="/juego/:id" element={<DetalleJuego />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};

export default AppRouter;
