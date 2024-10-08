// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { EffectCoverflow } from "swiper/modules";
import { countriesData } from "../../staticData";

export default function CountriesSwiper() {
  const countries = countriesData;
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
