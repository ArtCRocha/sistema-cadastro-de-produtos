import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/header";
import CadastroProduto from "../pages/cadastroProduto";
import DetailsProduct from "../pages/detailsProduct";
import Produtos from "../pages/produtos";

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
        <Route
          path="detalhes/:id"
          element={
            <>
              <Header />
              <DetailsProduct />
            </>
          }
        />
        <Route
          path="produtos"
          element={
            <>
              <Header />
              <Produtos />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
