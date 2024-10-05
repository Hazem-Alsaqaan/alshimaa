/* eslint-disable react/prop-types */

function PictureItem({ productPhoto, width, height }) {
  return <img className={`w-${width} h-${height}`} src={productPhoto} alt="" />;
}

export default PictureItem;
