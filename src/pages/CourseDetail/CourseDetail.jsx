import { useState, useEffect } from "react";
import DetailCart from "../../components/Card/DetailCard";
import Vecter from "../../components/commom/icons/Vector";
import Button from "../../components/button/Button";
import Arcordition from "../../components/Dropdown/Arcordion";
import CourseSlide from "../../components/Swiper/CourseSlide";
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
export default function CourseDetail() {
  //   const [active, setActive] = useState([]);
  const [isBoxCro, setIsBoxCro] = useState(true);

  const handleScroll = () => {
    const element = document.getElementById("box-list-course");
    const triggerPosition = element.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (triggerPosition <= viewportHeight) {
      setIsBoxCro(false);
    } else {
      setIsBoxCro(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="px-20">
        <div className="relative grid justify-between gap-6 lg:grid-cols-12">
          <div className="relative lg:col-span-8 md:col-span-12 ">
            <div className="py-5 text-sm breadcrumbs">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Documents</a>
                </li>
                <li>Add Document</li>
              </ul>
            </div>
            <div className="">
              <img
                className="w-full h-[420px] rounded-xl"
                src="/course.png"
                alt=""
              />
              <div className="absolute inline-flex items-end z-10 mt-[-50px] pl-20">
                <img
                  className="w-[100px] h-[100px] border-8 border-white rounded-lg"
                  src="/course.png"
                  alt=""
                />
                <div className="flex items-baseline pl-5 ">
                  <p className="text-[20px] font-semibold pr-2 ">Edusix</p>
                  <Vecter width={16} height={16} fill="#1B74E4"></Vecter>
                </div>
              </div>
            </div>
            <div className="py-20">
              <p className="font-semibold text-[36px] pb-2">Lập trình cơ bản</p>
              <p className="font-medium text-[16px] text-[#8d8d8d]">
                Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới
                bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được
                các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng
                vững chắc để chinh phục con đường trở thành một lập trình viên.
              </p>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-between">
                <Arcordition />
              </div>
            </div>
          </div>
          <div
            id="box"
            className={`${
              isBoxCro
                ? "pt-[60px] fixed right-20 bottom-[-20]"
                : "pt-[60px] absolute right-0 bottom-0 "
            }`}
          >
            <DetailCart></DetailCart>
          </div>
        </div>
        <div
          id="box-list-course"
          className="my-20 border-t border-gray-300 lg:col-span-4 md:col-span-12"
        >
          <div className="flex items-end justify-between py-10 ">
            <p className="font-semibold text-[32px]">Các khóa học liên quan</p>
            <Button
              text="Xem thêm"
              Class={
                "text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6"
              }
            ></Button>
          </div>
          <div className="">
            <CourseSlide data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
