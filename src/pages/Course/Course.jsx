/* eslint-disable react/no-unknown-property */
import { map } from "lodash";
import classNames from "classnames";
import "rc-slider/assets/index.css";
import Search from "../../components/commom/icons/Search";
import Input from "../../components/input/Input";
import Card from "../../components/Card/Card";
import { Disclosure } from "@headlessui/react";
import Slider from "rc-slider";
import ChecvronUp from "../../components/commom/icons/ChevronUp";
import { useState } from "react";
import StarFill from "../../components/commom/icons/StarFill";
import Button from "../../components/button/Button";
import { useQuery } from "react-query";
import { apiServer } from "../../utils/http";
// import { useEffect } from "react";

// let someVariable = 1000;
// console.log(someVariable?.toLocaleString());

// const data = [
//   {
//     image: "/course.png",
//     category: "Marketing",
//     cateId: 1,
//     price: 299000,
//     name: "Khóa học Thiết kế đồ họa cơ bản",
//     rating: 4.5,
//     joiner: 150,
//   },
//   {
//     image: "/course.png",
//     category: "Lập trình",
//     cateId: 2,
//     price: 499000,
//     name: "Khóa học Lập trình web JavaScript",
//     rating: 4.8,
//     joiner: 200,
//   },
//   {
//     image: "/course.png",
//     category: "Thiết kế đồ họa",
//     cateId: 3,
//     price: 0,
//     name: "Khóa học Quản lý doanh nghiệp",
//     rating: 4.2,
//     joiner: 120,
//   },
//   {
//     image: "/course.png",
//     category: "Ngôn ngữ",
//     cateId: 4,
//     price: 799000,
//     name: "Khóa học Quản lý doanh nghiệp",
//     rating: 4.2,
//     joiner: 120,
//   },
//   {
//     image: "/course.png",
//     category: "Tài chính",
//     cateId: 5,
//     price: 799000,
//     name: "Khóa học Quản lý doanh nghiệp",
//     rating: 4.2,
//     joiner: 120,
//   },
//   {
//     image: "/course.png",
//     category: "Photography",
//     cateId: 6,
//     price: 0,
//     name: "Khóa học Quản lý doanh nghiệp",
//     rating: 4.2,
//     joiner: 120,
//   },
// ];

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

const PriceSlider = () => {
  const [range, setRange] = useState([0, 100]);

  const handleSliderChange = (newRange) => {
    setRange(newRange);
  };

  return (
    <div className="flex flex-col gap-6">
      <Slider
        range
        // className="pt-6"
        min={0}
        max={1000}
        step={10}
        value={range}
        onChange={handleSliderChange}
        dot
        dotStyle={{
          borderColor: "#ffffff",
          backgroundColor: "#FF6636",
          width: "8px",
          height: "8px",
        }}
        trackStyle={{
          backgroundColor: "#FF6636",
          height: "6px",
        }}
        railStyle={{
          backgroundColor: "#FFDDD1",
          height: "6px",
        }}
        handleStyle={{
          borderColor: "white",
          backgroundColor: "#FF6636",
        }}
      />
      <div className="flex gap-4">
        <label className="relative flex items-center w-full gap-2">
          <span className="absolute flex items-center mx-3 mb-1">
            <div className="w-5 h-5 fill-slate-300">$</div>
          </span>
          <Input
            type="number"
            className={"w-full outline-none border border-[#E9EAF0] py-3 pl-6"}
            name="min"
            placeholder={"min:"}
            id=""
            value={range[0]}
            onChange={(e) => {
              setRange([parseInt(e.target.value), range[1]]);
            }}
          ></Input>
        </label>
        <label className="relative flex items-center w-full">
          <span className="absolute flex items-center mx-3 mb-1">
            <div className="w-5 h-5 fill-slate-300">$</div>
          </span>
          <Input
            type="number"
            name="max"
            className={"w-full outline-none border border-[#E9EAF0] py-3 pl-6"}
            placeholder={"max:"}
            id=""
            value={range[1]}
            onChange={(e) => {
              setRange([range[0], parseInt(e.target.value)]);
            }}
          ></Input>
        </label>
      </div>
    </div>
  );
};

export default function Course() {
  const [checkboxes, setCheckboxes] = useState([false, false]);
  const checkboxLabels = ["Có phí", "Miễn phí"];
  const handlePriceChange = (index) => {
    setCheckboxes((prevState) =>
      prevState.map((value, i) => (i === index ? !value : value))
    );
  };

  const [checkedItems, setCheckedItems] = useState({});
  const handleCateChange = (categoryId) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [categoryId]: !prevCheckedItems[categoryId],
    }));
  };

  const [checkRating, setCheckRating] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const checkboxRatingLabels = ["5 sao", "4 sao", "3 sao", "2 sao", "1 sao"];

  const handleRatingChange = (index) => {
    setCheckRating((prevState) =>
      prevState.map((value, i) => (i === index ? !value : value))
    );
  };

  // course
  const getCourseData = async () => {
    try {
      const response = await apiServer.get("/course");
      return response.data;
    } catch (error) {
      throw new Error("Error fetching course data");
    }
  };

  const {
    data: courseData,
    isLoading,
    isError,
  } = useQuery("courseData", getCourseData);

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
                <Disclosure className="">
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
                            Giá
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
                      <Disclosure.Panel className="flex flex-col gap-6 py-4 mx-4">
                        <PriceSlider></PriceSlider>

                        <div className=" flex flex-col gap-[10px]">
                          {checkboxLabels.map((label, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={`checkbox-${index}`}
                                  value=""
                                  className="w-[18px] h-[18px] border-gray-300 rounded accent-[#FF6636]"
                                  checked={checkboxes[index]}
                                  onChange={() => handlePriceChange(index)}
                                />
                                <label htmlFor={`checkbox-${index}`}>
                                  <span
                                    id=""
                                    className={`ml-2 text-sm font-medium ${
                                      checkboxes[index]
                                        ? "text-[#FF6636] font-medium"
                                        : "text-[#4E5566] font-normal"
                                    }`}
                                  >
                                    {label}
                                  </span>
                                </label>
                              </div>
                              <div
                                className={`text-xs font-medium ${
                                  checkboxes[index]
                                    ? "text-[#4E5566] font-medium"
                                    : "text-[#8C94A3] font-normal"
                                }`}
                              >
                                12345
                              </div>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>

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

              <div className="border border-[#E9EAF0] rounded-lg w-full col-span-12 md:col-span-4 h-fit">
                <Disclosure className="border">
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
                            Rating
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
                      <Disclosure.Panel className="flex flex-col gap-[10px] pt-4 mx-4">
                        <div className=" flex flex-col gap-[10px] pb-11">
                          {map(checkboxRatingLabels, (label, index) => (
                            <label
                              key={index}
                              className="flex items-center justify-between space-x-2"
                            >
                              <div className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  className="w-5 h-5 accent-[#FF6636] form-checkbox"
                                  checked={checkRating[index]}
                                  id={`checkbox-${index}`}
                                  onChange={() => handleRatingChange(index)}
                                />
                                <StarFill width={20} height={20}></StarFill>
                                <span
                                  className={`text-sm font-medium ${
                                    checkRating[index]
                                      ? "text-[#FF6636] font-medium"
                                      : "text-[#4E5566] font-normal"
                                  }`}
                                >
                                  {label}
                                </span>
                              </div>
                              <p
                                className={`text-xs font-medium ${
                                  checkRating[index]
                                    ? "text-[#4E5566] font-medium"
                                    : "text-[#8C94A3] font-normal"
                                }`}
                              >
                                12345
                              </p>
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
              {map(courseData, (item) => (
                <div
                  className="col-span-12 lg:col-span-4 md:col-span-6"
                  key={item?.course_id}
                >
                  <Card
                    thumbnail={item.thumbnail}
                    category={item.cate_name}
                    cateId={item.category_id}
                    price={item.course_price}
                    name={item.name}
                    rating={item.rating}
                    joiner={item.joiner}
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
