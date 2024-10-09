import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../staticData";
import SectionTitle from "../components/SectionTitle";
import TableCalibration from "../components/TableCalibration";
import NotFoundPage from "./NotFoundPage";
import { Helmet } from "react-helmet-async";
import PictureItem from "../components/PictureItem";
import ProductsSeassonsTable from "../components/ProductsSeassonsTable";
import ExplainMarkers from "../components/ExplainMarkers";
import LoadingPages from "../components/LoadingPages";

function DetailsProduct() {
  const products = allProducts;
  const [singleItem, setSingleItem] = useState();
  const { id } = useParams();
  const notFoundParams = products.find((item) => item.id == id);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const getProduct = () => {
      products.map((item) => item.id == id && setSingleItem(item));
    };
    getProduct();
  }, [id, products]);
  if (!notFoundParams) {
    return <NotFoundPage />;
  }
  if (!singleItem) {
    return (
      // <div className="min-h-screen px-16 py-24 bg-neutral-50 max-md:px-6 max-sm:px-2 flex items-center justify-center">
      //   <h1 className="text-green-500 text-3xl font-OpenSansBold">
      //     loading...
      //   </h1>
      // </div>
      <LoadingPages />
    );
  }
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
          content="إنتاج المحاصيل الزراعية, تصدير الفواكه, الزراعة العضوية, محاصيل طازجة, جودة الفواكه, مزارع محلية, شحن دولي, منتجات زراعية, فواكه طازجة, خضروات طازجة, استيراد وتصدير, Agriculture products, fruit export, organic farming, fresh crops, fruit quality, local farms, international shipping, agricultural products, fresh fruits and vegetables, import and export"
        />
      </Helmet>
      <div className="min-h-screen px-16 py-24 bg-neutral-50 max-md:px-6 max-sm:px-2">
        <SectionTitle title={singleItem ? singleItem.product_name : ""} />
        <div className="relative px-4 flex justify-center gap-y-4 gap-x-1 h-full w-full max-lg:flex-col max-lg:items-center">
          <div className="bg-yellow-50 rounded-2xl py-10 px-3 overflow-hidden flex items-center justify-center z-0 border-2 border-solid max-w-80 border-white shadow-2xl">
            <PictureItem
              productPhoto={singleItem.url}
              width={"44"}
              height={"44"}
            />
          </div>
          <div className="flex-1 bg-yellow-50 py-10 px-3 z-10 rounded-2xl border-2 border-solid border-white shadow-2xl">
            <h1 className="text-2xl font-OpenSansExtraBold text-yellow-400  text-center mb-5">
              Specifications and Details
            </h1>
            <p className="py-2">{singleItem ? singleItem.description : ""}</p>
            <p className="py-2">
              <span className="font-OpenSansExtraBold capitalize">
                Product Name:{" "}
              </span>
              {singleItem.product_name}
            </p>
            <p className="py-2">
              <span className="font-OpenSansExtraBold capitalize">
                HS Code:{" "}
              </span>
              {singleItem.hs_code}
            </p>
            {singleItem.calibration && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  Calibration:{" "}
                </span>
                {singleItem.calibration}
              </p>
            )}
            <p className="py-2">
              <span className="font-OpenSansExtraBold capitalize">
                Packing:{" "}
              </span>
              {singleItem.packing ? singleItem.packing : ""}
            </p>
            {singleItem.unit_weight && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  Unit Weight:{" "}
                </span>
                {singleItem.unit_weight}
              </p>
            )}
            {singleItem.jumbo_bag && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  Jumbo Bags:{" "}
                </span>
                {singleItem.jumbo_bag}
              </p>
            )}

            {singleItem.mesh_bags && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  mesh_bags:{" "}
                </span>
                {singleItem.mesh_bags}
              </p>
            )}
            {singleItem.bamboo_bags && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  bamboo_bags:{" "}
                </span>
                {singleItem.bamboo_bags}
              </p>
            )}

            {singleItem.telescopic_cartons && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  telescopic cartons 15 kg:{" "}
                </span>
                {singleItem.telescopic_cartons}
              </p>
            )}
            {singleItem.telescopic_cartons_7 && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  telescopic cartons 7.5 kg:{" "}
                </span>
                {singleItem.telescopic_cartons_7}
              </p>
            )}
            {singleItem.open_top_cartons_7 && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  open top cartons 7.5 kg:{" "}
                </span>
                {singleItem.open_top_cartons_7}
              </p>
            )}
            {singleItem.open_top_cartons && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  open top cartons 15 kg:{" "}
                </span>
                {singleItem.open_top_cartons}
              </p>
            )}
            {singleItem.container_capacity && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  Container Capacity:{" "}
                </span>
                {singleItem.container_capacity}
              </p>
            )}
            {singleItem.pallets && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  pallets:{" "}
                </span>
                {singleItem.pallets}
              </p>
            )}
            {singleItem.carton_box && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  carton box:{" "}
                </span>
                {singleItem.carton_box}
              </p>
            )}
            {singleItem.plastic_boxes && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  plastic boxes:{" "}
                </span>
                {singleItem.plastic_boxes}
              </p>
            )}
            {singleItem.loose && (
              <p className="py-2">
                <span className="font-OpenSansExtraBold capitalize">
                  loose:{" "}
                </span>
                {singleItem.loose}
              </p>
            )}
          </div>
          {(singleItem.id === 10) |
          (singleItem.id === 11) |
          (singleItem.id === 12) |
          (singleItem.id === 13) ? (
            <TableCalibration />
          ) : (
            ""
          )}
        </div>
        <div className="bg-yellow-50 py-10 px-2 my-10 rounded-2xl border-2 border-solid border-white shadow-2xl">
          <ExplainMarkers />
          <div className="flex items-center justify-center gap-1 my-10 flex-wrap">
            {singleItem.seasons.map((product) => (
              <ProductsSeassonsTable key={product.month} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsProduct;
