import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/navBar/NavBar";
import { MdBackup } from "react-icons/md";
import { Route, Routes } from "react-router-dom";
import Vegetables from "./pages/Vegetables";
import Fruits from "./pages/Fruits";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import ContactUsPage from "./pages/ContactUsPage";
import DetailsProduct from "./pages/DetailsProduct";
import Footer from "./components/footer/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import LoadingPages from "./components/LoadingPages";

function App() {
  return (
    <div className="bg-neutral-50">
      <NavBar />
      <Routes>
        <Route path={"*"} element={<NotFoundPage />} />
        <Route
          path="/"
          element={
            <React.Suspense fallback={<LoadingPages />}>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<LoadingPages />}>
              <AboutPage />
            </React.Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <React.Suspense fallback={<LoadingPages />}>
              <ServicesPage />
            </React.Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <React.Suspense fallback={<LoadingPages />}>
              <ProductsPage />
            </React.Suspense>
          }
        />
        <Route
          path="/contact-us"
          element={
            <React.Suspense fallback={<LoadingPages />}>
              <ContactUsPage />
            </React.Suspense>
          }
        />
        <Route
          path="/vegetables"
          element={
            <React.Suspense fallback={<LoadingPages />}>
              <Vegetables />
            </React.Suspense>
          }
        />
        <Route
          path="/fruits"
          element={
            <React.Suspense fallback={<LoadingPages />}>
              <Fruits />
            </React.Suspense>
          }
        />
        <Route
          path="/products/:id"
          element={
            <React.Suspense fallback={<LoadingPages />}>
              <DetailsProduct />
            </React.Suspense>
          }
        />
      </Routes>
      <Footer />
      <span
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-10 right-4 z-40 cursor-pointer"
      >
        <MdBackup className="h-10 w-10 text-green-500 hover:text-green-600 duration-300" />
      </span>
    </div>
  );
}

export default App;
