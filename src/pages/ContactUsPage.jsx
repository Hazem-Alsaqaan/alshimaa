import { employeesData } from "../../staticData";
import SectionTitle from "../components/SectionTitle";
import TeamMember from "../components/TeamMember";
import facebook_icon from "../assets/pictures/facebook_2504903.png";
import whatsapp_icon from "../assets/pictures/whatsapp_2504957.png";
import mail_icon from "../assets/pictures/mail_2772369.png";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function ContactUsPage() {
  const employees = employeesData;
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
          content="إنتاج المحاصيل الزراعية, تصدير الفواكه, الزراعة العضوية, محاصيل طازجة, جودة الفواكه, مزارع محلية, شحن دولي, منتجات زراعية, فواكه طازجة, خضروات طازجة, استيراد وتصدير, الشيماء للمنتجات الزارعية, Agriculture products, fruit export, organic farming, fresh crops, fruit quality, local farms, international shipping, agricultural products, fresh fruits and vegetables, import and export"
        />
      </Helmet>
      <div className="min-h-screen bg-neutral-50 px-16 py-24 max-md:px-6 max-sm:px-2">
        <SectionTitle title={"Contact US"} />
        <div>
          <div className="p-5 bg-neutral-800">
            <div className="flex items-center justify-center gap-8">
              <a
                className="w-12 h-12 max-sm:w-8 max-sm:h-8"
                href="https://www.facebook.com/profile.php?id=100071444959013&locale=ar_AR"
                target="_blank"
                title="facebook"
              >
                {" "}
                <img src={facebook_icon} alt="" />
              </a>

              <a
                className="w-12 h-12 max-sm:w-8 max-sm:h-8"
                href=" https://wa.me/+201007400454"
                target="_blank"
                title="What'sApp"
              >
                <img src={whatsapp_icon} alt="" />
              </a>
              <a
                className="w-12 h-12 max-sm:w-8 max-sm:h-8"
                href="mailto:alshimaa_co.export@yahoo.com"
                target="_blank"
                title="send mail"
              >
                <img src={mail_icon} alt="" />
              </a>
            </div>
          </div>
          <div className="flex-1 py-14 px-2 bg-neutral-100 grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
            {employees.map((item) => (
              <TeamMember key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
