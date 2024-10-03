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

function App() {
  return (
    <div className="bg-neutral-50">
      <NavBar />
      <Routes>
        <Route path={"*"} element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/products/:id" element={<DetailsProduct />} />
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
