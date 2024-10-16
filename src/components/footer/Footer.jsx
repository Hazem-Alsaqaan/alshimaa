import logo_picture from "../../assets/pictures/logo2.jpg";
import facebook_icon from "../../assets/pictures/facebook_2504903.png";
import whatsapp_icon from "../../assets/pictures/whatsapp_2504957.png";
import mail_icon from "../../assets/pictures/mail_2772369.png";

function Footer() {
  return (
    <>
      <div className={`bg-emerald-950`}>
        <div
          className={`w-full py-10 container mx-auto px-4  min-h-[500px] bg-emerald-950 grid grid-cols-2  max-sm:grid-cols-1`}
        >
          <div className={`col-span-1 flex justify-center items-center`}>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  src={logo_picture}
                  alt="LOGO"
                  className="w-36 h-36 rounded-full"
                />
                <h1 className="text-white font-OpenSansExtraBold text-4xl alshimaa-logo-title">
                  Alshimaa
                </h1>
              </div>
              <h6 className="text-slate-200 text-xs my-8 text-center">
                WE ALWAYS STRIVE TO SERVE YOU
              </h6>
              <div className="px-10 py-4 bg-neutral-800 rounded-lg">
                <a
                  className="text-green-300 hover:text-neutral-200 duration-100 block mb-5 max-[420px]:text-sm"
                  href="mailto:alshimaa_co.export@yahoo.com"
                  target="_blank"
                  title="send mail"
                >
                  Alshimaa_co.export@yahoo.com
                </a>
                <div className="flex items-center justify-center gap-6">
                  <a
                    className="w-12 h-12"
                    href="https://www.facebook.com/profile.php?id=100071444959013&locale=ar_AR"
                    target="_blank"
                    title="facebook"
                  >
                    {" "}
                    <img src={facebook_icon} alt="" />
                  </a>

                  <a
                    className="w-12 h-12"
                    href=" https://wa.me/+201007400454"
                    target="_blank"
                    title="What'sApp"
                  >
                    <img src={whatsapp_icon} alt="" />
                  </a>
                  <a
                    className="w-12 h-12"
                    href="mailto:alshimaa_co.export@yahoo.com"
                    target="_blank"
                    title="send mail"
                  >
                    <img src={mail_icon} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center rounded-lg m-4 overflow-hidden">
              <iframe
                className="w-96 h-96 max-sm:w-60 max-sm:h-60 rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.7584809631326!2d30.441534384861296!3d31.032977981533513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f66baff3232ba9%3A0xfba5a8a4e6a440c8!2z2KfZhNi02YrZhdin2KEg2YTZhNmF2YbYqtis2KfYqiDYp9mE2LLYsdin2LnZitip!5e0!3m2!1sar!2seg!4v1729093487822!5m2!1sar!2seg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
