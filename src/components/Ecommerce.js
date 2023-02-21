import React, { useState, useRef } from 'react'
import Image from "next/image";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import ecom1 from "@/img/ecommerce/ecom1.png";
import ecom2 from "@/img/ecommerce/ecom2.png";
import ecom3 from "@/img/ecommerce/ecom3.png";
import ecom4 from "@/img/ecommerce/ecom4.png";
import ecom5 from "@/img/ecommerce/ecom5.png";
import arrowLeft from '@/img/icon_arrow-left.png'
import arrowRight from '@/img/icon_arrow-right.png'

export function Ecommerce() {
//   SwiperCore.use([Autoplay]);

const images = [ecom1, ecom2, ecom3, ecom4, ecom5]
  let scrl = useRef(null);
  const shiftN = 230;
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <>
      {/* <div id="template_horizontal-image-slider">
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
              <Image src={ecom1} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ecom2} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ecom3} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ecom4} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ecom5} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}

<div className="relative">
        <div className="my-4 mx-0 flex items-center justify-between">
          {/* <h1
            data-testid="title-pilihan-kitabisa"
            className="m-0 text-base text-gray-900 font-semibold"
          >
            Showcase
          </h1> */}
          {/* <a>
            <span
              data-testid="link-lihat-lainnya-pilihan-kitabisa"
              aria-hidden="true"
              className="m-0 text-sm text-blue-400"
            >
              Lihat Lainnya
            </span>
          </a> */}
        </div>
        <div className="relative">
          {scrollX !== 0 && (
            <div className="absolute top-[40%] left-0 ">
              <Image
                className="none absolute left-0 z-1 cursor-pointer"
                aria-hidden="true"
                src={arrowLeft}
                alt="arrow left"
                decoding="auto"
                fetchpriority="auto"
                onClick={() => slide(-shiftN)}
              />
            </div>
          )}
          {!scrolEnd && (
            <div className="absolute top-[40%] right-0">
              <Image
                data-testid="arrow-right-pilihan-kitabisa"
                className="none absolute top-[40%] right-0 z-1 cursor-pointer"
                aria-hidden="true"
                alt="arrow right"
                src={arrowRight}
                decoding="auto"
                fetchpriority="auto"
                onClick={() => slide(+shiftN)}
              />
            </div>
          )}

          {/*  */}
          <div
            className="mb-[1em] flex flex-row overflow-x-auto scroll-smooth"
            ref={scrl}
            onScroll={scrollCheck}
          >
            {/*  */}
            { images.map((q, idx) => (
                
                <div
                aria-hidden="true"
                key={idx}
                data-testid="cardlink-pilihan-kitabisa"
                className="text‑inherit mt-0 mr-[1em] mb-[1em] cursor-pointer no-underline"
              >
                <div className="w-[180px]">
                  <div
                    className="flex flex-col rounded-[4px]"
                    style={{
                      boxShadow: "rgba(152, 152, 152, 0.2) 0px 2px 8px 1px",
                      border: "0.5px solid rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <figure className="relative m-0 flex flex-1 items-center justify-center">
                      <Image
                        alt=""
                        srcSet={q}
                        src={q}
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        className="h-full w-full rounded-t object-cover"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </figure>
                    
                  </div>
                </div>
              </div>
            ))}
            
            {/*  */}
            
            
          </div>
        </div>
      </div>
    </>
  );
}
