import { vegetablesData } from "../../staticData.js";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
function Vegetables() {
  const products = vegetablesData;
  return (
    <div className="min-h-screen px-16 py-24 max-md:px-6 max-sm:px-2 bg-neutral-50 ">
      <SectionTitle title={"Vegetables"} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Vegetables;
