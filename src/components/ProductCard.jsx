/* eslint-disable react/prop-types */
import React from "react";
import BoxBg from "../assets/pictures/logo33.png";
import { Link } from "react-router-dom";
const PictureItem = React.lazy(() => import("./PictureItem"));

function ProductCard({ item }) {
  return (
    <div className="bg-neutral-50 relative rounded-md border-2 border-solid border-white shadow-2xl">
      <img
        src={BoxBg}
        alt=""
        className="absolute -left-2 -top-2 w-12 h-12  opacity-90 "
      />
      <div className="flex overflow-hidden">
        <div className={`flex-1 flex flex-col justify-between py-3 pl-3 z-10`}>
          <h3 className="text-xl font-OpenSansBold text-green-600 pt-7">
            {item.product_name}
          </h3>

          <Link
            to={`/products/${item.id}`}
            className="bg-green-200 text-green-700 px-3 py-1 rounded-full flex items-center justify-center hover:text-green-900 duration-100"
          >
            <span>details...</span>
          </Link>
        </div>
        <div className="flex-1 bg-neutral-50 p-3 flex items-center justify-center rotate-45 shadow-xl">
          <PictureItem productPhoto={item.url} width={"36"} height={"36"} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
