import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./../Card/Card";
import { Navigation } from "swiper/modules";
import classNames from "classnames";
import Button from "../button/Button";
import ChevronRight from "./../commom/icons/ChevronRight";

// eslint-disable-next-line react/prop-types
export default function CourseSlide({ prefixAction }) {
  const data = [
    {
      image: "/course.png",
      category: "Marketing",
      cateId: 1,
      price: 299000,
      name: "Khóa học Thiết kế đồ họa cơ bản",
      rating: 4.5,
      joiner: 150,
    },
    {
      image: "/course.png",
      category: "Lập trình",
      cateId: 2,
      price: 499000,
      name: "Khóa học Lập trình web JavaScript",
      rating: 4.8,
      joiner: 200,
    },
    {
      image: "/course.png",
      category: "Thiết kế đồ họa",
      cateId: 3,
      price: 0,
      name: "Khóa học Quản lý doanh nghiệp",
      rating: 4.2,
      joiner: 120,
    },
    {
      image: "/course.png",
      category: "Ngôn ngữ",
      cateId: 4,
      price: 799000,
      name: "Khóa học Quản lý doanh nghiệp",
      rating: 4.2,
      joiner: 120,
    },
    {
      image: "/course.png",
      category: "Tài chính",
      cateId: 5,
      price: 799000,
      name: "Khóa học Quản lý doanh nghiệp",
      rating: 4.2,
      joiner: 120,
    },
    {
      image: "/course.png",
      category: "Photography",
      cateId: 6,
      price: 0,
      name: "Khóa học Quản lý doanh nghiệp",
      rating: 4.2,
      joiner: 120,
    },
  ];

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
        {data.map((course, index) => (
          <SwiperSlide key={index}>
            <Card {...course} />
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
