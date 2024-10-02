import SectionTitle from "../components/SectionTitle";
function AboutPage() {
  return (
    <div className="min-h-screen px-16 py-24 bg-green-50 max-md:px-6">
      <SectionTitle title={"About us"} />
      <div className="flex items-center">
        <div className="flex gap-1 max-md:flex-col">
          <div className="flex-1">
            <div className="text-green-950  font-OpenSansSemiBold text-2xl leading-10 max-lg:text-xl max-md:text-base">
              Our origins can be traced back to{" "}
              <span className="font-OpenSansBold">1991</span> when Engineer-{" "}
              <span className="font-OpenSansBold">ABD ELLAHA ELMESAREA</span>{" "}
              established an{" "}
              <span className="font-OpenSansBold">Egyptian </span>trading
              company known as
              <span className="font-OpenSansBold"> Al-Shimaa</span> for Import
              and Export. Founded{" "}
              <span className="font-OpenSansBold">33 years</span> ago, the
              company has thrived through sustainability and a commitment to .
              to winning alongside stakeholders. Today, it has emerged as an
              international trading company specializing in the export of
              <span className="font-OpenSansBold"> agricultural products</span>,
              <p className="font-OpenSansBold">which include:</p>
              <p>
                <span className="text-green-500 font-OpenSansBold">
                  Root vegetables
                </span>{" "}
                (such as potatoes, carrots, and sweet potatoes)
              </p>
              <p>
                <span className="text-green-500 font-OpenSansBold">
                  Fruiting vegetables
                </span>{" "}
                (such as onions and garlic)
              </p>
              <p>
                <span className="text-green-500 font-OpenSansBold">
                  Citrus fruits
                </span>{" "}
                (such as oranges, mandarins, and lemons)
              </p>
              <p>
                <span className="text-green-500 font-OpenSansBold">
                  Tropical fruits including
                </span>{" "}
                mangoes
              </p>
            </div>
          </div>
          <div className="  flex items-center justify-center">
            <div className="w-52 h-52 rounded-full bg-green-50 border-8 border-solid border-green-900 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1727582344/alshimaa/005_dt5lke.jpg"
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
