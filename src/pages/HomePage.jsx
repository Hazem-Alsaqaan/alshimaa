import { Helmet } from "react-helmet-async";
import SwiperHomePage from "../components/SwiperHomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ProductsPage from "./ProductsPage";
import ContactUsPage from "./ContactUsPage";

function HomePage() {
  return (
    <>
      <div className="min-h-screen pt-16">
        <Helmet>
          <title>Alshimaa</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Helmet>
        <SwiperHomePage />
      </div>
      <AboutPage />
      <ServicesPage />
      <ProductsPage />
      <ContactUsPage />
    </>
  );
}

export default HomePage;
