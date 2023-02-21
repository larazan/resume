import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import marketplace1 from "@/img/marketplace/marketplace1.jpg";
import marketplace2 from "@/img/marketplace/marketplace2.jpg";
import marketplace3 from "@/img/marketplace/marketplace3.jpg";
import marketplace4 from "@/img/marketplace/marketplace4.jpg";
import marketplace5 from "@/img/marketplace/marketplace5.jpg";
import marketplace6 from "@/img/marketplace/marketplace6.jpg";
import marketplace7 from "@/img/marketplace/marketplace7.jpg";

export function Marketplace() {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <div id="template_horizontal-image-slider">
        <div className="default-banner-slider relative pt-[16px] mb-[1em] h-full">
          <Swiper
            modules={[Pagination, A11y]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Image src={marketplace1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={marketplace2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={marketplace3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={marketplace4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={marketplace5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={marketplace6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={marketplace7} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
