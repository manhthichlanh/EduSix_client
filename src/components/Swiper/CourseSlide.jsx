/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./../Card/Card";
import { Navigation } from "swiper/modules";
import classNames from "classnames";
import Button from "../button/Button";
import ChevronRight from "./../commom/icons/ChevronRight";
import { map } from "lodash";

export default function CourseSlide({ prefixAction, data }) {
  return (
    <div className={`z-10 relative group ${prefixAction}`}>
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
              course_id={item.course_id}
              thumbnail={item.thumbnail}
              category={item.cate_name}
              cateId={item.category_id}
              price={item.course_price}
              name={item.name}
              rating={5}
              joiner={456}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={classNames(
          " bg-whiteabsolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 opacity-0 invisible transition duration-300 group-hover:opacity-100 group-hover:visible",
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
