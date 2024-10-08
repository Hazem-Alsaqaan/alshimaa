/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GiFrozenOrb } from "react-icons/gi";

function ProductsSeassonsTable({ product }) {
  return (
    <div className="w-20 h-20 capitalize rounded-full bg-yellow-300  border-2 border-solid shadow-lg border-yellow-100 flex flex-col items-center justify-center gap-1 max-sm:w-16 max-sm:h-16">
      <p className="text-yellow-700 font-OpenSansExtraBold max-sm:text-sm">
        {product.month}
      </p>
      {product.value === "frish" ? (
        <IoCheckmarkSharp className="text-3xl max-sm:text-xl text-yellow-600" />
      ) : product.value === "none" ? (
        <FaXmark className="text-3xl max-sm:text-xl text-yellow-600" />
      ) : (
        <GiFrozenOrb className="text-3xl max-sm:text-xl text-yellow-600" />
      )}
    </div>
  );
}

export default ProductsSeassonsTable;
