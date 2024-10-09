import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function ServicesPage() {
  const servicesData = [
    {
      id: "1",
      title: "Land Management",
      description:
        "Sustainable land management is the cornerstone of our success. We meticulously care for our fruit and vegetable cultivation land, focusing on maintaining soil health, using water efficiently, and minimizing environmental impact. Through our commitment to responsible land stewardship, we ensure not only the highest quality of products but also contribute to creating a greener, more products but also contribute to creating a greener, more sustainable planet while protecting the environment from pollution.",
      icon: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1728507497/Management_oapu8l.png",
    },
    {
      id: "2",
      title: "Production",
      description:
        "We demonstrate our dedication to excellence through every piece of fruit we produce. We utilize advanced agricultural practices and the latest technologies to ensure that each crop offers maximum flavor, nutritional value, and visual appeal. From carefully selecting seedlings to precise harvesting techniques, our focus on production quality remains unwavering, making every piece of our fruits and vegetables a testament to pride and professionalism.",
      icon: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1728507498/production_zooxbj.png",
    },
    {
      id: "3",
      title: "Packaging",
      description:
        "The art of packaging is a vital element that goes beyond mere physical protection of products. It is a strategic investment that enhances the consumer experience by providing attractive design and accurate information while contributing to environmental sustainability through modern innovations. The impact of packaging is evident in a company's ability to stand out in a crowded market evident in a company's ability to stand out in a crowded market where packaging becomes the face that expresses the product's identity and value. Therefore, good packaging is fundamental to the success of products in the market and increases customer satisfaction.",
      icon: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1728507498/packing_mfkgus.png",
    },
    {
      id: "4",
      title: "Shipping",
      description:
        "From our farms to your table, we ensure that our shipping process is meticulously organized to meet the highest standards of efficiency. arrive on time and in optimal condition. Through We recognize the importance of time and reliability in global food distribution, and our advanced logistical solutions ensure that your products our extensive network, we reach every corner of the globe to deliver the finest produce from our farms with utmost care. the finest produce from our farms with utmost care.",
      icon: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1728507498/Shipping_ick8bd.png",
    },
  ];
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
          content="إنتاج المحاصيل الزراعية, تصدير الفواكه, الزراعة العضوية, محاصيل طازجة, جودة الفواكه, مزارع محلية, شحن دولي, منتجات زراعية, فواكه طازجة, خضروات طازجة, استيراد وتصدير, Agriculture products, fruit export, organic farming, fresh crops, fruit quality, local farms, international shipping, agricultural products, fresh fruits and vegetables, import and export"
        />
      </Helmet>
      <div className="min-h-screen px-16 py-24 max-md:px-6 max-sm:px-2">
        <div id="services" className="flex flex-col items-center ">
          <SectionTitle title={"Services"} />
          <div className="flex flex-col gap-20">
            {servicesData.map((item) => (
              <ServiceCard key={item?.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
