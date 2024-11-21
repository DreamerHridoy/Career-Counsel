import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    "https://ps.w.org/ml-slider/assets/banner-772x250.png?rev=2907610",
    "https://elspl.in/wp-content/uploads/Website-Slider-ELSPL-7.png",
    "https://cdn.smartslider3.com/wp-content/uploads/2019/02/homepagesliders.png",
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto my-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
