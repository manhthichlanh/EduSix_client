<<<<<<< HEAD
// import Card from "../../components/Card/Card";
=======
import classNames from "classnames";
import Card from "../../components/Card/Card";
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
      <ArcordionItem></ArcordionItem>
      <CourseSlide></CourseSlide>
      {/* <Card></Card> */}
    </>
  );
}
