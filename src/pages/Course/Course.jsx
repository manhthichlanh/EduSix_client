/* eslint-disable react/no-unknown-property */
import { filter, map, sortBy } from "lodash";
import classNames from "classnames";
import "rc-slider/assets/index.css";
import Search from "../../components/commom/icons/Search";
import Input from "../../components/input/Input";
import Card from "../../components/Card/Card";
import { Disclosure } from "@headlessui/react";
import Slider from "rc-slider";
import ChecvronUp from "../../components/commom/icons/ChevronUp";
import { useState, useRef } from "react";
import StarFill from "../../components/commom/icons/StarFill";
import Button from "../../components/button/Button";
import { useQuery } from "react-query";
import { apiServer } from "../../utils/http";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { convertViToEn } from "../../utils/helper";

const PriceSlider = ({ range, setRange }) => {

  const [focusedInput, setFocusedInput] = useState(null);
  const inputRefs = {
    min: useRef(null),
    max: useRef(null),
  };

  const handleSliderChange = (newRange) => {
    setRange(newRange);
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  const handleInputChange = (inputName, value) => {
    // Allow only digits
    const newValue = value.replace(/\D/g, '');

    // Parse the value; if empty, set to null
    const intValue = newValue === '' ? null : parseInt(newValue);

    setRange((prevRange) => {
      const newRange = [...prevRange];
      newRange[inputName === 'min' ? 0 : 1] = intValue;
      return newRange;
    });
  };

  // Use a setTimeout to restore focus after state is updated
  const restoreFocus = () => {
    if (focusedInput && inputRefs[focusedInput]?.current) {
      setTimeout(() => {
        inputRefs[focusedInput]?.current.focus();
      }, 0);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Slider
        range
        min={0}
        max={5000000}
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
          <input
            ref={inputRefs.min}
            type="number"
            className={"w-full outline-none border border-[#E9EAF0] py-3 pl-6"}
            name="min"
            placeholder={"min:"}
            id=""

            value={range[0]}
            onChange={(e) => handleInputChange('min', e.target.value)}
            onFocus={() => handleInputFocus('min')}
            onBlur={handleInputBlur}
            autoFocus={focusedInput === 'min'}
            onKeyDown={restoreFocus}
          />
        </label>
        <label className="relative flex items-center w-full">
          <span className="absolute flex items-center mx-3 mb-1">
            <div className="w-5 h-5 fill-slate-300">$</div>
          </span>
          <input
            ref={inputRefs.max}
            type="number"
            name="max"
            className={"w-full outline-none border border-[#E9EAF0] py-3 pl-6"}
            placeholder={"max:"}
            id=""
            value={range[1]}
            onChange={(e) => handleInputChange('max', e.target.value)}
            onFocus={() => handleInputFocus('max')}
            onBlur={handleInputBlur}
            autoFocus={focusedInput === 'max'}
            onKeyDown={restoreFocus}
          />
        </label>
      </div>
    </div>
  );
};

export default function Course() {
  const [checkboxes, setCheckboxes] = useState([true, true]); // Show all by default
  const checkboxLabels = ["Có phí", "Miễn phí"];
  // const [searchQuery, setSearchQuery] = useState("");
  const [range, setRange] = useState([0, 5000000]);
  const [selectedCategories, setSelectedCategories] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedRatings, setSelectedRatings] = useState([false, false, false, false, false]);
  const [loadMore, setLoadMore] = useState(6);
  const [selectedSorting, setSelectedSorting] = useState("");
  const handleSortingChange = (e) => {
    setSelectedSorting(e.target.value);
  };
  const handlePriceChange = (index) => {
    setCheckboxes((prevState) =>
      prevState.map((value, i) => (i === index ? !value : value))
    );
  };





  const handleLoadMore = () => {
    setLoadMore((prevLoadMore) => prevLoadMore + 6);
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

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const filteredCourses = sortBy(
    filter(courseData, (course) => {
      const searchMatches = convertViToEn(course.name).includes(
        convertViToEn(searchQuery)
      );
      return searchMatches;
    }),
    (course) => {
      switch (selectedFilter) {
        case "1":
          return course.course_price;
        case "2":
          return -course.course_price;
        case "3":
          return course.name.toLowerCase();
        case "4":
          return -course.name.toLowerCase().charCodeAt(0);
        case "5":
          return -new Date(course.create_at).getTime();
        case "6":
          return new Date().getTime() - new Date(course.create_at).getTime();
        default:
          return undefined;
      }
    }
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const {
    data: courseData,
    isLoading,
    isError,
  } = useQuery("courseData", getCourseData);

  // category
  const getCategoryData = async () => {
    try {
      const response = await apiServer.get("/category");
      return response.data;
    } catch (error) {
      throw new Error("Error fetching course data");
    }
  };

  const {
    data: categoryData,
    cateisLoading,
    cateisError,
  } = useQuery("categoryData", getCategoryData);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };


  const handleCateChange = (categoryId) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [categoryId]: !prevCheckedItems[categoryId],
    }));
    setSelectedCategories((prevSelectedCategories) => ({
      ...prevSelectedCategories,
      [categoryId]: !prevSelectedCategories[categoryId],
    }));
  };
  const filteredAndSortedCourses = courseData
    ? courseData
      .filter((course) => course.course_price >= range[0] && course.course_price <= range[1])
      .filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((course) => {
        const meetsPriceCriteria =
          (checkboxes[0] && course.course_price > 0) ||
          (checkboxes[1] && course.course_price === 0);
        return meetsPriceCriteria;
      })
      .filter((course) => {
        const meetsCategoryCriteria =
          Object.keys(selectedCategories).length === 0 ||
          selectedCategories[course.category_id];
        return meetsCategoryCriteria;
      })
      .filter((course) => {
        const meetsRatingCriteria =
          checkRating.every((isChecked, index) =>
            isChecked ? course.rating === 5 - index : true
          );
        return meetsRatingCriteria;
      })
      .sort((a, b) => {
        switch (selectedSorting) {
          case "mn":
            return b.course_id - a.course_id;
          case "asc":
            return a.course_price - b.course_price;
          case "desc":
            return b.course_price - a.course_price;
          case "az":
            return a.name.localeCompare(b.name);
          case "za":
            return b.name.localeCompare(a.name);
          default:
            return 0; // Default sorting or no sorting
        }
      })
    : [];



    const remainingCourses = filteredAndSortedCourses.length - loadMore;



  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-12 gap-6 bg-[url('images/bg.png')] px-10 lg:px-20 md:px-16 sm:px-10  ">
          <div className="col-span-12 py-10 md:col-span-6 sm:col-span-12">
            <div className="pb-6 text-sm breadcrumbs">
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Documents</Link>
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
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <button className="absolute block w-8 h-8 my-auto text-center top-2 right-2">
                  <Search width={20} height={20} />
                </button>
              </div>
            </div>
            <div className="flex items-center w-full gap-4">
              <p className="whitespace-nowrap">Lọc theo</p>
              <select
                className="block w-full p-3 text-base text-gray-900 border border-gray-200 rounded-lg outline-none focus:border-[#FF6636]"
                value={selectedSorting}
                onChange={handleSortingChange}
              >
                <option value="">Tất cả</option>
                <option value="mn">Mới nhất</option>
                <option value="asc">Từ thấp tới cao</option>
                <option value="desc">Từ cao tới thấp</option>
                <option value="az">Từ A - Z</option>
                <option value="za">Từ Z - A</option>
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
                          className={`${open ? "rotate-180 transform" : ""
                            } h-5 w-5`}
                        />
                      </Disclosure.Button>
                      <div
                        className={`${open ? "block" : "hidden"
                          } h-[1px] w-full bg-[#E9EAF0]`}
                      />
                      <Disclosure.Panel className="flex flex-col gap-6 py-4 mx-4">
                        <PriceSlider range={range} setRange={setRange} />

                        <div className="flex flex-col gap-[10px]">
                          {checkboxLabels.map((label, index) => (
                            <div key={index} className="flex items-center justify-between">
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
                                    className={`ml-2 text-sm font-medium ${checkboxes[index]
                                        ? "text-[#FF6636] font-medium"
                                        : "text-[#4E5566] font-normal"
                                      }`}
                                  >
                                    {label}
                                  </span>
                                </label>
                              </div>
                              <div
                                className={`text-xs font-medium ${checkboxes[index]
                                    ? "text-[#4E5566] font-medium"
                                    : "text-[#8C94A3] font-normal"
                                  }`}
                              >
                                {filteredAndSortedCourses.filter((course) => {
                                  const meetsPriceCriteria =
                                    (index === 0 && course.course_price > 0) ||
                                    (index === 1 && course.course_price === 0);
                                  return meetsPriceCriteria;
                                }).length}
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
                          className={`${open ? "rotate-180 transform" : ""
                            } h-5 w-5`}
                        />
                      </Disclosure.Button>
                      <div
                        className={`${open ? "block" : "hidden"
                          } h-[1px] w-full bg-[#E9EAF0]`}
                      />
                      <Disclosure.Panel className="flex py-4 mx-4">
                        <div className=" flex flex-col gap-[10px]">
                          {map(categoryData, (category) => (
                            <label
                              key={category.category_id}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="checkbox"
                                className="w-5 h-5 form-checkbox accent-[#FF6636]"
                                id={`category-${category.category_id}`}
                                checked={
                                  checkedItems[category.category_id] || false
                                }
                                onChange={() =>
                                  handleCateChange(category.category_id)
                                }
                              />
                              <span
                                className={`text-sm font-medium ${checkedItems[category.id]
                                  ? "text-[#FF6636] font-medium"
                                  : "text-[#4E5566] font-normal"
                                  }`}
                              >
                                {category.cate_name}
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
                          className={`${open ? "rotate-180 transform" : ""
                            } h-5 w-5`}
                        />
                      </Disclosure.Button>
                      <div
                        className={`${open ? "block" : "hidden"
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
                                  className={`text-sm font-medium ${checkRating[index]
                                    ? "text-[#FF6636] font-medium"
                                    : "text-[#4E5566] font-normal"
                                    }`}
                                >
                                  {label}
                                </span>
                              </div>
                              <p
                                className={`text-xs font-medium ${checkRating[index]
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
          <div className="flex flex-col items-center justify-between col-span-12 lg:col-span-9">
            <div className="grid grid-cols-12 gap-6">
              {map(filteredAndSortedCourses.slice(0, loadMore), (item) => (
                <div className="col-span-12 lg:col-span-4 md:col-span-6" key={item?.course_id}>
                  <Card
                    course_id={item.course_id}
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

            {loadMore < filteredAndSortedCourses.length && (
              <Button
                text={`Xem thêm (${remainingCourses} kết quả)`}
                Class={
                  "text-[15px] leading-6 text-[#ff6636] font-medium mt-10 mb-[100px] bg-[#ffeee8] px-[42px] py-4 rounded-md"
                }
                onClick={handleLoadMore}
                disabled={remainingCourses <= 0} // Disable the button when there are no more courses
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
