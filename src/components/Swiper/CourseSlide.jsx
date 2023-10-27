import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./../Card/Card";
import { Navigation } from "swiper/modules";
import classNames from "classnames";
import Button from "../button/Button";
import ChevronRight from "./../commom/icons/ChevronRight";
import { map } from "lodash";

// eslint-disable-next-line react/prop-types
export default function CourseSlide({ prefixAction, data }) {
  return (
    <div className={`relative group ${prefixAction}`}>
      <Swiper
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation={{
          prevEl: `.${prefixAction} > .${prefixAction}-prev`,
          nextEl: `.${prefixAction} > .${prefixAction}-next`,
        }}
      >
        {map(data, (item, index) => (
          <SwiperSlide key={index}>
            <Card
              image={item.image}
              category={item.category}
              cateId={item.cateId}
              price={item.price}
              name={item.name}
              rating={item.rating}
              joiner={item.joiner}
            />
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
          Class="rounded-full p-4 bg-white drop-shadow-md rotate-180 hover:bg-orange-200"
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
          Class="w-16 h-16 px-0 py-0 flex items-center justify-center rounded-full shadow-md bg-white"
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
