import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import "sweetalert2/dist/sweetalert2.min.css";
import AuthModal from "./mod/AuthModal";
import { Toaster } from "react-hot-toast";
import AdminTable from "./components/AdminTable";

const App = () => {
  return (
    <>
      <Header></Header>
      <AuthModal></AuthModal>
      <AdminTable></AdminTable>
      <AppRouter></AppRouter>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
