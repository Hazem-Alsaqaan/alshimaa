/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";

function ProductsSeassonsTable({ product }) {
  return (
    <div className="w-20 h-20 text-white font-OpenSansBold capitalize border-2 border-solid shadow-lg bg-yellow-500 border-white rounded-full flex flex-col items-center justify-center max-sm:w-16 max-sm:h-16">
      <p>{product.month}</p>
      {product.value === "frish" ? (
        <IoCheckmarkSharp className="text-3xl max-sm:text-xl" />
      ) : product.value === "none" ? (
        <FaXmark className="text-3xl max-sm:text-xl" />
      ) : (
        <FaDatabase className="text-3xl max-sm:text-xl" />
      )}
    </div>
  );
}

export default ProductsSeassonsTable;
