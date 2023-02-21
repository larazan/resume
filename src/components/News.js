import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import leaflet1 from "@/img/leaflet/leaflet1.png";
import leaflet2 from "@/img/leaflet/leaflet2.png";
import leaflet3 from "@/img/leaflet/leaflet3.png";
import leaflet4 from "@/img/leaflet/leaflet4.png";
import leaflet5 from "@/img/leaflet/leaflet5.png";
import leaflet6 from "@/img/leaflet/leaflet6.png";
import leaflet7 from "@/img/leaflet/leaflet7.png";
import leaflet8 from "@/img/leaflet/leaflet8.png";
import leaflet9 from "@/img/leaflet/leaflet9.png";
import leaflet10 from "@/img/leaflet/leaflet10.png";

export function News() {
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
              <Image src={leaflet1} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={leaflet2} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={leaflet3} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={leaflet4} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={leaflet5} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={leaflet6} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={leaflet7} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={leaflet8} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={leaflet9} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={leaflet10} />
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </>
  );
}
