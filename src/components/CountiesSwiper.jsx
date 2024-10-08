// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Russia from "../assets/pictures/Russia.png";
import Bosnia from "../assets/pictures/BosniaAndHerzegovina.png";
import Croatia from "../assets/pictures/Croatia.png";
import Romania from "../assets/pictures/Romania.png";
import Greece from "../assets/pictures/Greece.png";
import Italy from "../assets/pictures/Italy.png";
import Germany from "../assets/pictures/Germany.png";
import Lebanon from "../assets/pictures/Lebanon.png";
import SaudiArabia from "../assets/pictures/SaudiArabia.png";
import Moldova from "../assets/pictures/Moldova.png";
import Montenegro from "../assets/pictures/Montenegro.png";
import France from "../assets/pictures/France.png";
import "swiper/swiper-bundle.css";
import { EffectCoverflow } from "swiper/modules";

export default function CountriesSwiper() {
  const countries = [
    {
      title: "Russia",
      photo: Russia,
    },
    {
      title: "Bosnia",
      photo: Bosnia,
    },
    {
      title: "Croatia",
      photo: Croatia,
    },
    {
      title: "Romania",
      photo: Romania,
    },
    {
      title: "Greece",
      photo: Greece,
    },
    {
      title: "Italy",
      photo: Italy,
    },
    {
      title: "Germany",
      photo: Germany,
    },
    {
      title: "Lebanon",
      photo: Lebanon,
    },
    {
      title: "SaudiArabia",
      photo: SaudiArabia,
    },
    {
      title: "Moldova",
      photo: Moldova,
    },
    {
      title: "Montenegro",
      photo: Montenegro,
    },
    {
      title: "France",
      photo: France,
    },
  ];
  return (
    <div className="py-10">
      <h1 className="text-center capitalize">
        the countries we have previously exported to
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {countries.map((country) => (
          <SwiperSlide key={country.title}>
            <img src={country.photo} alt={country.title} />
            <p className="absolute bottom-1 left-1 text-neutral-100 text-xs [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              {country.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
