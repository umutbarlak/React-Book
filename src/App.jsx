import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import NovelList from "./pages/NovelList";
import StoryList from "./pages/StoryList";

function App() {
  return (
    <BrowserRouter>
      <div className=" d-flex flex-column justify-content-between  min-vh-100 ">
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductPage />} />
          <Route path="/ürün/:id" element={<ProductDetail />} />

          <Route path="/kategori" element={<CategoryPage />}>
            <Route path="hikaye" element={<StoryList />} />
            <Route path="roman" element={<NovelList />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
