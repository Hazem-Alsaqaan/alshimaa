import { Helmet } from "react-helmet-async";
import SwiperHomePage from "../components/SwiperHomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ProductsPage from "./ProductsPage";
import ContactUsPage from "./ContactUsPage";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="min-h-screen pt-16">
        <Helmet>
          <title>Alshimaa</title>

          <meta
            name="description"
            content="نحن متخصصون في إنتاج وتصدير المحاصيل الزراعية والفواكه الطازجة بجودة عالية. We specialize in the production and export of high-quality fresh agricultural products and fruits."
          />
          <meta
            name="keywords"
            content="إنتاج المحاصيل الزراعية, تصدير الفواكه, الزراعة العضوية, محاصيل طازجة, جودة الفواكه, مزارع محلية, شحن دولي, منتجات زراعية, فواكه طازجة, خضروات طازجة, استيراد وتصدير, Agriculture products, fruit export, organic farming, fresh crops, fruit quality, local farms, international shipping, agricultural products, fresh fruits and vegetables, import and export"
          />
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
