import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import dispatch1 from "@/img/dispatch/dispatch1.png";
import dispatch2 from "@/img/dispatch/dispatch2.png";
import dispatch3 from "@/img/dispatch/dispatch3.png";
import dispatch4 from "@/img/dispatch/dispatch4.png";
import dispatch5 from "@/img/dispatch/dispatch5.png";
import dispatch6 from "@/img/dispatch/dispatch6.png";
import dispatch7 from "@/img/dispatch/dispatch7.png";
import dispatch8 from "@/img/dispatch/dispatch8.png";
import dispatch9 from "@/img/dispatch/dispatch9.png";
import dispatch10 from "@/img/dispatch/dispatch10.png";
import dispatch11 from "@/img/dispatch/dispatch11.png";
import dispatch12 from "@/img/dispatch/dispatch12.png";
import dispatch13 from "@/img/dispatch/dispatch13.png";

export function Dispatch() {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <div id="template_horizontal-image-slider">
        <div className="default-banner-slider relative pt-[16px] mb-[1em]  md:h-full">
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
              <Image src={dispatch1} className="w-20 md:w-full object-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dispatch2} className="object-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dispatch3} className="object-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dispatch4} className="object-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dispatch5} className="object-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dispatch6} className="object-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dispatch7} className="object-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dispatch8} className="object-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dispatch9} className="object-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dispatch10} className="object-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dispatch11} className="object-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dispatch12} className="object-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dispatch13} className="object-cover" alt="" />
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </>
  );
}
