import React, { useState, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { Quote } from "@/components/Quote";
import { Flutter } from "@/components/Flutter";
import { Allbird } from "@/components/Allbird";
import { Ecommerce } from "@/components/Ecommerce";
import { Dispatch } from "@/components/Dispatch";
import { News } from "@/components/News";
import { Marketplace } from "@/components/Marketplace";


const index = () => {
  const marketplaceLink = 'https://github.com/larazan/laravel_marketplace'
  const allbirdsLink = ''
  const ecommLink = 'https://github.com/larazan/larashop'
  const quotaLink = 'https://github.com/larazan/whatAwords_client'
  const dispatchLink = 'https://react-dispatch.vercel.app/'
  const leafletLink = 'https://react-leaflet-eight.vercel.app/'
  const foodLink = 'https://github.com/larazan/flutter_food'

  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Tailwind CSS - Rapidly build modern websites without ever leaving your HTML."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Tailwind CSS - Rapidly build modern websites without ever leaving your HTML."
        />
        <title>Portofolio</title>
      </Head>

      <main className="my-0 mx-auto min-h-screen  overflow-x-hidden bg-gray-100">
        <div class="bg-white h-14 border-b">
          <div
            data-testid="back-button"
            class="relative z-[99] m-auto flex h-full  items-center p-0 px-4"
          >
            <Link href={"/"} className="relative w-1/4 ">
              <div
                id="plain-header"
                role="button"
                aria-label="header back button"
                tabindex="0"
                class="w-6 rounded-full flex flex-shrink-0 cursor-pointer text-[16px] hover:bg-slate-100"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  class="w-5"
                >
                  <path
                    d="M12.86 5.076a1.216 1.216 0 1 0-1.72-1.72L3.356 11.14a1.216 1.216 0 0 0 0 1.72l7.784 7.784a1.216 1.216 0 0 0 1.72-1.72l-5.708-5.708h12.632a1.216 1.216 0 1 0 0-2.432H7.152l5.708-5.708Z"
                    fill="#3A3A3A"
                  ></path>
                </svg>
              </div>
            </Link>
            <div class="flex-1 mx-auto w-2/4 overflow-hidden text-center whitespace-nowrap">
              <span class="text-base font-bold uppercase">Portofolio</span>
            </div>
            <div className="w-1/4"></div>
          </div>
        </div>
        <div className="flex min-h-screen">
          <div className="flex flex-row w-full">
            <div className="flex flex-1 flex-col items-center justify-center md:px-10 relative">
              <div className="flex flex-1 flex-col w-full md:max-w-2xl bg-white pb-18">
                {/*  */}
                <div class="mt-8 px-4 pb-4">
                  <div
                    data-testid="budget-plan"
                    class="flex w-full justify-between border-mercury text-left"
                  >
                    <div class="jsx-2626428841">
                      <h4
                        data-testid="latest-news-section-title"
                        class="m-0 text-lg text-gray-900 font-bold"
                      >
                        Quotas
                      </h4>
                      <div className="flex justify-center items-center space-x-3">
                        {/* <span class="inline-block text-xs">2022</span> */}
                        <div class="my-3.2 last:pb-1.5">
                          <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                              MongoDB
                            </li>
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                               Express
                            </li>
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                               React
                            </li>
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                            Node
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a target="_blank" href={quotaLink} rel="noopener noreferrer">
                      <div className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div class="break-words bg-opacity pb-6">
                    {/* <div class="">
                      <div class="">
                        <div class="text-base">
                          <p class="align-justify">
                            Kasih sayang dan suasana kehangatan keluarga mungkin
                            sering kita rasakan, namun hal itu tentu sangat
                            berbeda bagi anak-anak yatim dhuafa, mereka yang
                            sejak lahir terpaksa harus kehilangan sosok orangtua
                            membuat mereka tidak pernah merasakan bagaimana
                            kasih sayang dan suasana kehangatan ketika berada di
                            rumah
                          </p>
                        </div>
                      </div>
                    </div> */}

                    <Quote />
                   
                  </div>
                  <hr class="px-4 my-0 border-b-0.5 bg-[#fafafa]"></hr>
                </div>
                {/*  */}
                <div class="mt-8 px-4 pb-4">
                  <div
                    data-testid="budget-plan"
                    class="flex w-full justify-between border-mercury text-left"
                  >
                    <div class="jsx-2626428841">
                      <h4
                        data-testid="latest-news-section-title"
                        class="m-0 text-lg text-gray-900 font-bold"
                      >
                        Food Delivery UI UX
                      </h4>
                      <div className="flex ">
                        {/* <span class="inline-block text-xs">2022</span> */}
                        <div class="my-3.2 last:pb-1.5">
                          <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                              Flutter
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a target="_blank" href={foodLink} rel="noopener noreferrer">
                      <div className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div class="break-words bg-opacity pb-6">
                    {/* <div class="">
                      <div class="">
                        <div class="text-base">
                          <p class="align-justify">
                            Kasih sayang dan suasana kehangatan keluarga mungkin
                            sering kita rasakan, namun hal itu tentu sangat
                            berbeda bagi anak-anak yatim dhuafa, mereka yang
                            sejak lahir terpaksa harus kehilangan sosok orangtua
                            membuat mereka tidak pernah merasakan bagaimana
                            kasih sayang dan suasana kehangatan ketika berada di
                            rumah
                          </p>
                        </div>
                      </div>
                    </div> */}

                   
                    <Flutter />
                   
                  </div>
                  <hr class="px-4 my-0 border-b-0.5 bg-[#fafafa]"></hr>
                </div>
                {/*  */}
                <div class="mt-8 px-4 pb-4">
                  <div
                    data-testid="budget-plan"
                    class="flex w-full justify-between border-mercury text-left"
                  >
                    <div class="jsx-2626428841">
                      <h4
                        data-testid="latest-news-section-title"
                        class="m-0 text-lg text-gray-900 font-bold"
                      >
                        Allbirds UI Clone
                      </h4>
                      <div className="flex justify-center items-center space-x-3">
                        {/* <span class="inline-block text-xs">2022</span> */}
                        <div class="my-3.2 last:pb-1.5">
                          <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                              React
                            </li>
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                               TailwindCss
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                    <Link href={""}>
                      <div className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                  <div class="break-words bg-opacity pb-6">
                    {/* <div class="">
                      <div class="">
                        <div class="text-base">
                          <p class="align-justify">
                            Kasih sayang dan suasana kehangatan keluarga mungkin
                            sering kita rasakan, namun hal itu tentu sangat
                            berbeda bagi anak-anak yatim dhuafa, mereka yang
                            sejak lahir terpaksa harus kehilangan sosok orangtua
                            membuat mereka tidak pernah merasakan bagaimana
                            kasih sayang dan suasana kehangatan ketika berada di
                            rumah
                          </p>
                        </div>
                      </div>
                    </div> */}

                   
                    <Allbird />
                  </div>
                  <hr class="px-4 my-0 border-b-0.5 bg-[#fafafa]"></hr>
                </div>
                {/*  */}
                <div class="mt-8 px-4 pb-4">
                  <div
                    data-testid="budget-plan"
                    class="flex w-full justify-between border-mercury text-left"
                  >
                    <div class="jsx-2626428841">
                      <h4
                        data-testid="latest-news-section-title"
                        class="m-0 text-lg text-gray-900 font-bold"
                      >
                        Ecommerce
                      </h4>
                      <div className="flex justify-center items-center space-x-3">
                        {/* <span class="inline-block text-xs">2022</span> */}
                        <div class="my-3.2 last:pb-1.5">
                          <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                              Laravel
                            </li>
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                               Mysql
                            </li>
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                               Bootstrap
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a target="_blank" href={ecommLink} rel="noopener noreferrer">
                      <div className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div class="break-words bg-opacity pb-6">
                    {/* <div class="">
                      <div class="">
                        <div class="text-base">
                          <p class="align-justify">
                            Kasih sayang dan suasana kehangatan keluarga mungkin
                            sering kita rasakan, namun hal itu tentu sangat
                            berbeda bagi anak-anak yatim dhuafa, mereka yang
                            sejak lahir terpaksa harus kehilangan sosok orangtua
                            membuat mereka tidak pernah merasakan bagaimana
                            kasih sayang dan suasana kehangatan ketika berada di
                            rumah
                          </p>
                        </div>
                      </div>
                    </div> */}

                    <Ecommerce />
                  </div>
                  <hr class="px-4 my-0 border-b-0.5 bg-[#fafafa]"></hr>
                </div>
                {/*  */}
                <div class="mt-8 px-4 pb-4">
                  <div
                    data-testid="budget-plan"
                    class="flex w-full justify-between border-mercury text-left"
                  >
                    <div class="jsx-2626428841">
                      <h4
                        data-testid="latest-news-section-title"
                        class="m-0 text-lg text-gray-900 font-bold"
                      >
                        Asian Movie DB UI UX
                      </h4>
                      <div className="flex justify-center items-center space-x-3">
                        {/* <span class="inline-block text-xs">2022</span> */}
                        <div class="my-3.2 last:pb-1.5">
                          <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                              React
                            </li>
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                               TailwindCss
                            </li>
                            {/* <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                               Bootstrap
                            </li> */}
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a target="_blank" href={dispatchLink} rel="noopener noreferrer">
                      <div className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div class="break-words bg-opacity pb-6">
                    {/* <div class="">
                      <div class="">
                        <div class="text-base">
                          <p class="align-justify">
                            Kasih sayang dan suasana kehangatan keluarga mungkin
                            sering kita rasakan, namun hal itu tentu sangat
                            berbeda bagi anak-anak yatim dhuafa, mereka yang
                            sejak lahir terpaksa harus kehilangan sosok orangtua
                            membuat mereka tidak pernah merasakan bagaimana
                            kasih sayang dan suasana kehangatan ketika berada di
                            rumah
                          </p>
                        </div>
                      </div>
                    </div> */}

                    <Dispatch />
                  </div>
                  <hr class="px-4 my-0 border-b-0.5 bg-[#fafafa]"></hr>
                </div>
                {/*  */}
                <div class="mt-8 px-4 pb-4">
                  <div
                    data-testid="budget-plan"
                    class="flex w-full justify-between border-mercury text-left"
                  >
                    <div class="jsx-2626428841">
                      <h4
                        data-testid="latest-news-section-title"
                        class="m-0 text-lg text-gray-900 font-bold"
                      >
                        Map News UI UX
                      </h4>
                      <div className="flex justify-center items-center space-x-3">
                        {/* <span class="inline-block text-xs">2022</span> */}
                        <div class="my-3.2 last:pb-1.5">
                          <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                              React
                            </li>
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                               TailwindCss
                            </li>
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                               Leaflet
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a target="_blank" href={leafletLink} rel="noopener noreferrer">
                      <div className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div class="break-words bg-opacity pb-6">
                    {/* <div class="">
                      <div class="">
                        <div class="text-base">
                          <p class="align-justify">
                            Kasih sayang dan suasana kehangatan keluarga mungkin
                            sering kita rasakan, namun hal itu tentu sangat
                            berbeda bagi anak-anak yatim dhuafa, mereka yang
                            sejak lahir terpaksa harus kehilangan sosok orangtua
                            membuat mereka tidak pernah merasakan bagaimana
                            kasih sayang dan suasana kehangatan ketika berada di
                            rumah
                          </p>
                        </div>
                      </div>
                    </div> */}

                    <News />
                  </div>
                  <hr class="px-4 my-0 border-b-0.5 bg-[#fafafa]"></hr>
                </div>
                {/*  */}
                <div class="mt-8 px-4 pb-4">
                  <div
                    data-testid="budget-plan"
                    class="flex w-full justify-between border-mercury text-left"
                  >
                    <div class="jsx-2626428841">
                      <h4
                        data-testid="latest-news-section-title"
                        class="m-0 text-lg text-gray-900 font-bold"
                      >
                        Marketplace
                      </h4>
                      <div className="flex justify-center items-center space-x-3">
                        {/* <span class="inline-block text-xs">2022</span> */}
                        <div class="my-3.2 last:pb-1.5">
                          <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                              Laravel
                            </li>
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                               Mysql
                            </li>
                            <li class="px-2.5 mr-1.6 mb-1.6 text-sm font-semibold text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                               Bootstrap
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a target="_blank" href={marketplaceLink} rel="noopener noreferrer">
                      <div className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div class="break-words bg-opacity pb-6">
                    {/* <div class="">
                      <div class="">
                        <div class="text-base">
                          <p class="align-justify">
                            Kasih sayang dan suasana kehangatan keluarga mungkin
                            sering kita rasakan, namun hal itu tentu sangat
                            berbeda bagi anak-anak yatim dhuafa, mereka yang
                            sejak lahir terpaksa harus kehilangan sosok orangtua
                            membuat mereka tidak pernah merasakan bagaimana
                            kasih sayang dan suasana kehangatan ketika berada di
                            rumah
                          </p>
                        </div>
                      </div>
                    </div> */}

                    <Marketplace />
                  </div>
                  <hr class="px-4 my-0 border-b-0.5 bg-[#fafafa]"></hr>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
