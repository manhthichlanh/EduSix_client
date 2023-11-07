import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import classNames from "classnames";
import Button from "../button/Button";
import ChevronRight from "./../commom/icons/ChevronRight";
import { map } from "lodash";
import CateCard from "../Card/CateCard";

// eslint-disable-next-line react/prop-types
export default function CateSlide({ prefixAction, data }) {
  return (
    <div className={`relative group ${prefixAction}`}>
      <Swiper
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        navigation={{
          prevEl: `.${prefixAction} > .${prefixAction}-prev`,
          nextEl: `.${prefixAction} > .${prefixAction}-next`,
        }}
      >
        {map(data, (item) => (
          <SwiperSlide key={item.id}>
            <CateCard image={item.logo_cate} cateName={item.cate_name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={classNames(
          "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 opacity-0 invisible transition duration-300 group-hover:opacity-100 group-hover:visible",
          `${prefixAction}-prev`
        )}
      >
        <Button
          Class="rounded-full p-4 bg-white shadow-md rotate-180 hover:drop-shadow-lg"
          Icon={function Icon() {
            return (
              <ChevronRight
                className="stroke-[#FD8E1F] fill-[#FD8E1F]"
                height={24}
                width={24}
              ></ChevronRight>
            );
          }}
        ></Button>
      </div>
      <div
        className={classNames(
          "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 opacity-0 invisible transition duration-300 group-hover:opacity-100 group-hover:visible",
          `${prefixAction}-next`
        )}
      >
        <Button
          Class="p-4 rounded-full shadow-md bg-white hover:drop-shadow-lg"
          Icon={function Icon() {
            return (
              <ChevronRight
                className="stroke-[#FD8E1F] fill-[#FD8E1F]"
                height={24}
                width={24}
              ></ChevronRight>
            );
          }}
        ></Button>
      </div>
    </div>
  );
}
