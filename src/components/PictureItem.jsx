/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import LoadingItem from "./LoadingItem";

function PictureItem({ productPhoto, width, height }) {
  const [loadPhoto, setLoadPhoto] = useState(false);
  useEffect(() => {
    setLoadPhoto(true);
    if (productPhoto) {
      setLoadPhoto(false);
    }
  }, [productPhoto]);
  if (loadPhoto) {
    return <LoadingItem />;
  }
  return (
    <img
      className={`w-${width} h-${height}`}
      src={productPhoto}
      alt="alshimaa للمنتجات والمحاصيل الزراعية والفاكهة"
    />
  );
}

export default PictureItem;
