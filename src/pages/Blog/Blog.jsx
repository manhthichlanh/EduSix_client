/* eslint-disable react/no-unknown-property */
import { map } from "lodash";
import classNames from "classnames";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import "rc-slider/assets/index.css";
import Search from "../../components/commom/icons/Search";
import Input from "../../components/input/Input";
import ChecvronUp from "../../components/commom/icons/ChevronUp";
import Button from "../../components/button/Button";
import BlogCard from "../../components/Card/BlogCard";

const cate = [
  {
    id: 1,
    image: "images/05.png",
    cateName: "Marketing",
  },
  {
    id: 2,
    image: "images/01.png",
    cateName: "Lập trình",
  },
  {
    id: 3,
    image: "images/02.png",
    cateName: "Thiết kế đồ họa",
  },
  {
    id: 4,
    image: "images/06.png",
    cateName: "Ngôn ngữ",
  },
  {
    id: 5,
    image: "images/03.png",
    cateName: "Tài chính",
  },
  {
    id: 6,
    image: "images/04.png",
    cateName: "Photography",
  },
];
const blog = [
  {
    id: 1,
    cateId: 1,
    image: "/course.png",
    title: "thinking: faker",
    comment: 1,
    category: "Marketing",
  },
  {
    id: 2,
    cateId: 2,
    image: "/course.png",
    title: "doing: fu*ker",
    comment: 1,
    category: "Lập trình",
  },
  {
    id: 3,
    cateId: 3,
    image: "/course.png",
    title: "Marketing",
    comment: 6,
    category: "Thiết kế đồ họa",
  },
  {
    id: 4,
    cateId: 4,
    image: "/course.png",
    title: "Marketing",
    comment: 20,
    category: "Ngôn ngữ",
  },
  {
    id: 5,
    cateId: 5,
    image: "/course.png",
    title: "Marketing",
    comment: 10,
    category: "Tài chính",
  },
  {
    id: 6,
    cateId: 6,
    image: "/course.png",
    title: "Marketing",
    comment: 10,
    category: "Photography",
  },
];

export default function Blog() {
  const [checkedItems, setCheckedItems] = useState({});
  const handleCateChange = (categoryId) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [categoryId]: !prevCheckedItems[categoryId],
    }));
  };

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-12 gap-6 bg-[url('images/bg.png')] px-10 lg:px-20 md:px-16 sm:px-10  ">
          <div className="col-span-12 py-10 md:col-span-6 sm:col-span-12">
            <div className="pb-6 text-sm breadcrumbs">
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
            <p className="text-[32px] font-bold leading-10 pb-6">
              Tiến tới thành công với khóa học trực tuyến tại{" "}
              <span className="text-[#ff6636]">Edusix</span>{" "}
            </p>
            <p className="text-[#333333]">
              Khóa học của chúng tôi được thiết kế để phù hợp với mọi người, vì
              vậy dù bạn là người mới bắt đầu hay đã có kinh nghiệm, bạn đều có
              thể tìm thấy khóa học phù hợp với mình.
            </p>
          </div>
          <div className="col-span-2"></div>
          <div className="hidden col-span-4 md:block">
            <img src="/images/bg-course.png" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 pt-[100px] px-10 lg:px-20 md:px-16 sm:px-8">
          <div className="col-span-12 lg:col-span-6">
            <p className="text-[32px] font-semibold">
              Các khóa học tại <span className="text-[#f66636]">Edusix</span>
            </p>
          </div>
          <div className="flex col-span-12 gap-4 lg:col-span-6">
            <div className="w-full">
              <div className="relative">
                <Input
                  type={"text"}
                  placeholder={"Search..."}
                  className={
                    "text-[16px] leading-6 border w-full rounded-lg border-gray-200 py-3 px-3 hover:border-gray-300 focus:outline-none focus:border-[#ff6636] transition-colors "
                  }
                />
                <button className="absolute block w-8 h-8 my-auto text-center top-2 right-2">
                  <Search width={20} height={20} />
                </button>
              </div>
            </div>
            <div className="flex items-center w-full gap-4">
              <p className="whitespace-nowrap">Lọc theo</p>
              <select className="block w-full p-3 text-base text-gray-900 border border-gray-200 rounded-lg outline-none focus:border-[#FF6636]">
                <option defaultValue={""}>Mới nhất</option>
                <option value="">Từ thấp tới cao</option>
                <option value="">Từ cao tới thấp</option>
                <option value="">Từ A - Z</option>
                <option value="">Từ Z - A</option>
              </select>
            </div>
          </div>
        </div>
        <div className="h-[1px] mx-10 my-[30px] bg-[#E8E8E8]  lg:mx-20 md:mx-16 sm:mx-10"></div>
        <div className="grid grid-cols-12 gap-6 px-10 lg:px-20 md:px-16 sm:px-10">
          <div className="h-full col-span-12 lg:col-span-3">
            <div className="grid grid-cols-12 lg:flex lg:flex-col gap-2.5 ">
              <div className="border border-[#E9EAF0] rounded-lg w-full col-span-12 md:col-span-4 h-fit">
                <Disclosure className="border ">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={classNames(
                          "flex items-center justify-between w-full p-5",
                          "text-black text-sm font-medium",
                          "focus:outline-none"
                        )}
                      >
                        <div className="flex">
                          <p className="uppercase font-medium text-[18px]">
                            Danh mục
                          </p>
                        </div>
                        <ChecvronUp
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5`}
                        />
                      </Disclosure.Button>
                      <div
                        className={`${
                          open ? "block" : "hidden"
                        } h-[1px] w-full bg-[#E9EAF0]`}
                      />
                      <Disclosure.Panel className="flex py-4 mx-4">
                        <div className=" flex flex-col gap-[10px]">
                          {cate.map((category) => (
                            <label
                              key={category.id}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="checkbox"
                                className="w-5 h-5 form-checkbox accent-[#FF6636]"
                                id={`category-${category.id}`}
                                checked={checkedItems[category.id] || false}
                                onChange={() => handleCateChange(category.id)}
                              />
                              <span
                                className={`text-sm font-medium ${
                                  checkedItems[category.id]
                                    ? "text-[#FF6636] font-medium"
                                    : "text-[#4E5566] font-normal"
                                }`}
                              >
                                {category.cateName}
                              </span>
                            </label>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 justify-between items-center flex flex-col">
            <div className="grid grid-cols-12 gap-6">
              {map(blog, (item) => (
                <div
                  className="col-span-12 lg:col-span-6 md:col-span-4"
                  key={item.id}
                >
                  <BlogCard
                    image={item.image}
                    category={item.category}
                    cateId={item.cateId}
                    title={item.title}
                    comment={item.comment}
                  />
                </div>
              ))}
            </div>
            <Button
              text="Xem thêm"
              Class={
                "text-[18px] leading-6 text-[#ff6636] font-medium mt-10 mb-[100px] bg-[#ffeee8] px-[42px] py-4 rounded-md"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
