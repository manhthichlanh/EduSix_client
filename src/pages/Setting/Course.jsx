import classNames from "classnames";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Search from "../../components/commom/icons/Search";
import { filter, map, sortBy } from "lodash";
import { useState } from "react";
import { convertViToEn } from "../../utils/helper";
// import { convertViToEn } from ".";
const statusItems = [
  {
    id: 1,
    title: "Chưa hoàn thành",
  },
  {
    id: 2,
    title: "Hoàn thành",
  },
];
const filterItems = [
  {
    id: 1,
    title: "Từ A đến Z",
  },
  {
    id: 2,
    title: "Từ Z đến A",
  },
];
const courses = [
  {
    id: 1,
    courseName: "B",
    lessonName: "Cách bán được 1 tỷ gói mè",
    progress: 100,
  },
  { id: 2, courseName: "A", lessonName: "Nếu ngày ấy", progress: 10 },
  {
    id: 3,
    courseName: "C",
    lessonName: "Anh là ai?",
    progress: 50,
  },
];
function AccountCourse() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredCourses = sortBy(
    filter(courses, (course) => {
      const searchMatches =
        convertViToEn(course.courseName).includes(convertViToEn(searchQuery)) ||
        convertViToEn(course.lessonName).includes(convertViToEn(searchQuery));
      const statusMatches =
        selectedStatus === ""
          ? true
          : selectedStatus === "1"
          ? course.progress < 100
          : course.progress === 100;
      return searchMatches && statusMatches;
    }),
    (course) => {
      switch (selectedFilter) {
        case "1":
          return course.courseName.toLowerCase();
        case "2":
          return -course.courseName.toLowerCase().charCodeAt(0);
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
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 py-6">
        <div className="w-full col-span-4">
          <div className="relative">
            <Input
              type={"text"}
              placeholder={"Search..."}
              className={
                "text-[16px] leading-6 border w-full rounded-lg border-gray-200 py-3 px-3 hover:border-gray-300 focus:outline-none focus:border-[#ff6636] transition-colors "
              }
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button className="absolute block w-8 h-8 my-auto text-center top-2 right-2">
              <Search width={20} height={20} />
            </button>
          </div>
        </div>
        <div className="w-full col-span-4">
          <div className="flex items-center w-full gap-4">
            <p className="whitespace-nowrap text-base text-[#4E5566]">
              Trạng thái
            </p>
            <select
              className="block w-full p-3 text-base text-gray-900 border border-gray-200 rounded-lg outline-none focus:border-[#FF6636]"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              <option value="">Tất cả</option>
              {map(statusItems, (item) => (
                <option value={item.id} key={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full col-span-4">
          <div className="flex items-center w-full gap-4">
            <p className="whitespace-nowrap text-base text-[#4E5566]">
              Lọc theo
            </p>
            <select
              className="block w-full p-3 text-base text-gray-900 border border-gray-200 rounded-lg outline-none focus:border-[#FF6636]"
              value={selectedFilter}
              onChange={handleFilterChange}
            >
              <option value="">Tất cả</option>
              {map(filterItems, (item) => (
                <option value={item.id} key={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={classNames("grid grid-cols-12 gap-4")}>
        {map(filteredCourses, (item) => (
          <div className="col-span-12 border rounded-lg md:col-span-6 lg:col-span-4">
            <div className="p-2 rounded-lg ">
              <Link
                to="/"
                className="block w-full mb-2 overflow-hidden rounded"
              >
                <img
                  className="object-cover w-full h-fit"
                  src="../course.png"
                  alt=""
                />
              </Link>
              <div className="flex flex-col gap-3">
                <p className="text-[#6E7485] font-medium capitalize">
                  {item.courseName}
                </p>
                <p className="text-[#1D2026] font-medium capitalize">
                  {item.lessonName}
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#E8E8E8] my-4"></div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <Button
                    Class={classNames(
                      "p-2 rounded-md bg-[#FFEEE8] w-full",
                      "text-sm text-[#FF6636] font-medium"
                    )}
                    text="Học tiếp"
                  ></Button>
                </div>
                <div className="flex items-center justify-center w-full col-span-6 p-2">
                  <p className="text-[#23BD33] font-medium text-sm text-center">
                    {item.progress}% hoàn thành
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AccountCourse;
