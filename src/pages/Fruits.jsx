import { useEffect } from "react";
import { fruitsData } from "../../staticData";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
function Fruits() {
  const products = fruitsData;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen px-16 py-24 max-md:px-6 max-sm:px-2 bg-neutral-50 ">
      <SectionTitle title={"Fruits"} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Fruits;
