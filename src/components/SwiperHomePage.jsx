import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderImages } from "../../staticData";
// Import Swiper styles
import "swiper/swiper-bundle.css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperHomePage() {
  const sliderImagesArray = sliderImages;
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="bg-emerald-900">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <div className="absolute top-0 left-0 h-full w-full z-10 bg-black/30 flex items-center justify-center px-16 max-md:px-6">
          <h1 className=" text-green-400 text-8xl font-OpenSansExtraBold max-md:text-6xl max-sm:text-4xl cursor-context-menu">
            Since 1991
          </h1>
        </div>
        {sliderImagesArray.map((picture) => (
          <SwiperSlide key={picture.id}>
            <img src={picture.url} alt={"alshimaa للمنتجات الزراعية"} />

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 0 0" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
