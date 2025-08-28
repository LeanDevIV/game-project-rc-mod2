import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import "sweetalert2/dist/sweetalert2.min.css";
import AuthModal from "./mod/AuthModal";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header></Header>
      <AuthModal></AuthModal>
      <AppRouter></AppRouter>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
