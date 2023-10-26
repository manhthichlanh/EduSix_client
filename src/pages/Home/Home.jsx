<<<<<<< HEAD
// import Card from "../../components/Card/Card";
=======
import classNames from "classnames";
import Card from "../../components/Card/Card";
<<<<<<< HEAD
=======
// import Dropdown from "../../components/Dropdown";
// import Header from "../../components/header/Header";
>>>>>>> d3b202c119e8ce0d458103cba8a03623abcbbacf
import { includes, times, cloneDeep, isEmpty } from "lodash";
import { useState } from "react";
import Arcordition from "../../components/Dropdown/Arcordition";
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
const course = [
  {
    title: "1. Giới thiệu",
    content: [
      {
        title: "Em những lúc say anh hay thường nghĩ ",
        duration: "20:50",
      },
      {
        title: "Day 1 Goals: what we will make by the end of the day",
        duration: "40:10",
      },
    ],
    totalLesson: {},
  },
  {
    title: "2. Giới thiệu",
    content: [
      {
        title: "Giới thiệu khoá học",
        duration: "10:26",
      },
    ],
  },
  {
    title: "3. Giới thiệu",
    content: [
      {
        title: "Giới thiệu khoá học",
        duration: "01:12:12",
      },
    ],
  },
  {
    title: "4. Giới thiệu",
    content: [
      {
        title: "Giới thiệu khoá học",
        duration: "40:10",
      },
    ],
  },
];
course.map((item) => {
  item.lessons = item.content.length;
});
const totalSection = course.reduce((total, item) => {
  return total + item.content.length;
}, 0);
const section = course.length;
>>>>>>> 25b6712a5d6e73c2e36b7d5b6630d5d6b49c7a16

import ArcordionItem from "../../components/Dropdown/Arcordion";
import CourseSlide from "../../components/Swiper/CourseSlide";

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <ArcordionItem></ArcordionItem>
      <CourseSlide></CourseSlide>
      {/* <Card></Card> */}
=======
      <div className="w-full ">
        <div className="w-full py-4 ">
          <p className="mb-2 text-xl font-bold text-black">Nội dung khóa học</p>
          <div className="flex items-center justify-between">
            <div
              className={classNames(
                "gap-2 flex flex-wrap items-center md:gap-4",
                "text-black font-medium text-opacity-80"
              )}
            >
              <p>{section} Chương</p>
              <div className="hidden w-1 h-1 mt-1 bg-black rounded-full sm:block"></div>
              <p>{totalSection} Bài học</p>
              <div className="hidden w-1 h-1 mt-1 bg-black rounded-full sm:block "></div>
              <p>Thời lượng {formattedTotalDuration}</p>
            </div>
            <button
              className="text-[#FF6636] font-normal whitespace-nowrap"
              onClick={() => {
                const newArrays = times(1000, (i) => i);
                setActive(isEmpty(active) ? newArrays : []);
              }}
            >
              {isEmpty(active) ? "Mở tất cả" : "Đóng tất cả"}
            </button>
          </div>
        </div>
        {course?.map(({ title, content, lessons }, index) => {
          return (
            <Arcordition
              key={index}
              title={title}
              content={content}
              lessons={lessons}
              isOpen={includes(active, index)}
              onClick={() => {
                const currentIndex = active?.findIndex((it) => index === it);
                if (currentIndex !== -1) {
                  const newActive = cloneDeep(active);
                  newActive.splice(currentIndex, 1);
                  setActive(newActive);
                } else {
                  setActive([...active, index]);
                }
              }}
            />
          );
        })}
      </div>
      <div
        className={classNames(
          "grid grid-cols-1 gap-4 my-4",
          "sm:grid-cols-2 sm:gap-3",
          "lg:grid-cols-4 lg:gap-4"
        )}
      >
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
>>>>>>> d3b202c119e8ce0d458103cba8a03623abcbbacf
    </>
  );
}
