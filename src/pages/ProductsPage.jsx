import { Link } from "react-router-dom";
import vegetablesPicture from "../assets/pictures/vegetables.png";
import fruitsPicture from "../assets/pictures/fruits.png";
import SectionTitle from "../components/SectionTitle";
function ProductsPage() {
  return (
    <div className="min-h-screen px-16 py-24 max-md:px-6 bg-green-50 max-sm:px-2">
      <SectionTitle title={"Our Products"} />
      <div className="flex items-center justify-center flex-wrap">
        <Link
          to={"/vegetables"}
          className="w-96 h-64 p-3 m-3 rounded-2xl border-2 border-solid  border-white overflow-hidden bg-green-700  flex items-center justify-between text-3xl cursor-pointer hover:bg-green-800 duration-150"
        >
          <div>
            <p className="text-4xl font-OpenSansExtraBold text-yellow-100 max-sm:text-2xl">
              Vegetables
            </p>
            <span className="text-green-300 capitalize text-sm mt-4">{`Let's Go...`}</span>
          </div>
          <img
            className="w-44 h-44 max-sm:w-36 max-sm:h-36"
            src={vegetablesPicture}
            alt="vegetables"
          />
        </Link>
        <Link
          to={"/fruits"}
          className="w-96 h-64 p-3 m-3 rounded-2xl border-2 border-solid border-white overflow-hidden bg-yellow-200 flex items-center justify-between text-3xl cursor-pointer hover:bg-yellow-300 duration-150"
        >
          <div>
            <p className="text-4xl font-OpenSansExtraBold text-green-700 max-sm:text-2xl">
              Fruits
            </p>
            <span className="text-yellow-700 capitalize text-sm mt-4">{`Let's Go...`}</span>
          </div>
          <img
            className="w-44 h-44 max-sm:w-36 max-sm:h-36"
            src={fruitsPicture}
            alt="fruits"
          />
        </Link>
      </div>
    </div>
  );
}

export default ProductsPage;
