import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/header";
import CadastroProduto from "../pages/cadastroProduto";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="cadastro-produto"
          element={
            <>
              <Header />
              <CadastroProduto />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
