import { useEffect } from "react";
import { fruitsData } from "../../staticData";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { Helmet } from "react-helmet-async";

function Fruits() {
  const products = fruitsData;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Alshimaa</title>
        <meta
          name="description"
          content="نحن متخصصون في إنتاج وتصدير المحاصيل الزراعية والفواكه الطازجة بجودة عالية. We specialize in the production and export of high-quality fresh agricultural products and fruits."
        />
        <meta
          name="keywords"
          content="إنتاج المحاصيل الزراعية, تصدير الفواكه, الزراعة العضوية, محاصيل طازجة, جودة الفواكه, مزارع محلية, شحن دولي, منتجات زراعية, فواكه طازجة, خضروات طازجة, استيراد وتصدير, الشيماء للمنتجات الزارعية, Agriculture products, fruit export, organic farming, fresh crops, fruit quality, local farms, international shipping, agricultural products, fresh fruits and vegetables, import and export"
        />
      </Helmet>
      <div className="min-h-screen px-16 py-24 max-md:px-6 max-sm:px-2 bg-neutral-50 ">
        <SectionTitle title={"Fruits"} />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Fruits;
