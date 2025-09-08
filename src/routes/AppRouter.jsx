import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FavoritesPage from "../pages/FavoritesPage";
import AdminPage from "../pages/AdminPage";
import Error404Page from "../pages/Error404Page";
import CartPage from "../pages/CartPage";
import RecuperarPassword from "../pages/RecuperarPassword";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route
        path="/favoritos"
        element={<FavoritesPage></FavoritesPage>}
      ></Route>
      <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
      <Route path="/recuperar" element={<RecuperarPassword></RecuperarPassword>}></Route> 
      <Route path="/cart" element={<CartPage></CartPage>}></Route>
      <Route path="*" element={<Error404Page></Error404Page>}></Route>
    </Routes>
  );
};

export default AppRouter;
