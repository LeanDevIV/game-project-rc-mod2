import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import "sweetalert2/dist/sweetalert2.min.css";
import FormRegister from "./components/auth/FormRegister";
import FormLogin from "./components/auth/FormLogin";

const App = () => {
  return(
  <>
    <Header></Header>
    <FormLogin></FormLogin>
    <br /><br />
    <hr />
    <br /><br />
    <FormRegister></FormRegister>
    <AppRouter></AppRouter>;
    <Footer></Footer>
  </>);
};

export default App;
