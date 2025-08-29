import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import "sweetalert2/dist/sweetalert2.min.css";
import AdminTable from "./components/AdminTable";

const App = () => {
  return(
  <>
    <Header></Header>
    <AdminTable></AdminTable>
    <AppRouter></AppRouter>;
    <Footer></Footer>
  </>);
};

export default App;
