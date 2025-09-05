import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import "sweetalert2/dist/sweetalert2.min.css";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserProvider";

const App = () => {
  return (
    <UserProvider>
      <div className="main-wrapper">
        <main className="flex-grow-1">
          {/* Props en header y Approuter para autentificar login/out */}
          <Header></Header>
          <AppRouter></AppRouter>
        </main>
        <Footer></Footer>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </UserProvider>
  );
};

export default App;
