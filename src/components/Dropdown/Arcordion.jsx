/* eslint-disable react/prop-types */
import { useState } from "react";
import classNames from "classnames";
import Plus from "../commom/icons/Plus";
import PlayCircleFill from "../commom/icons/PlayCircleFill";
import { includes, isEmpty, cloneDeep } from "lodash";

function calculateTotalDuration(course) {
  let totalDurationInSeconds = 0;

  course.map((item) => {
    item.content.map((lesson) => {
      if (lesson.duration) {
        const durationParts = lesson.duration.split(":");
        if (durationParts.length === 2) {
          const minutes = parseInt(durationParts[0], 10);
          const seconds = parseInt(durationParts[1], 10);
          totalDurationInSeconds += minutes * 60 + seconds;
        }
      }
    });
  });

  return totalDurationInSeconds;
}

function formatDuration(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours} giờ ${minutes} phút ${seconds} giây`;
}

function ArcordionItem() {
  const [active, setActive] = useState([]);
  const course = [
    {
      title: "1. Giới thiệu",
      content: [
        {
          title: "Em những lúc say anh hay thường nghĩ",
          duration: "20:50",
        },
        {
          title: "Day 1 Goals: what we will make by the end of the day",
          duration: "40:10",
        },
      ],
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

  const totalDurationInSeconds = calculateTotalDuration(course);
  const formattedTotalDuration = formatDuration(totalDurationInSeconds);

  const totalSection = course.reduce((total, item) => {
    return total + item.content.length;
  }, 0);
  return (
    <div className="w-full">
      <div className="w-full py-4">
        <p className="mb-2 text-xl font-bold text-black">Nội dung khóa học</p>
        <div className="flex items-center justify-between">
          <div
            className={classNames(
              "gap-2 flex flex-wrap items-center md:gap-4",
              "text-black font-medium text-opacity-80"
            )}
          >
            <p>{course.length} Chương</p>
            <div className="hidden w-1 h-1 mt-1 bg-black rounded-full sm:block"></div>
            <p>{totalSection} Bài học</p>
            <div className="hidden w-1 h-1 mt-1 bg-black rounded-full sm:block"></div>
            <p>Thời lượng {formattedTotalDuration}</p>
          </div>
          <button
            className="text-[#FF6636] font-normal whitespace-nowrap"
            onClick={() => {
              const newArrays = Array.from({ length: 1000 }, (_, i) => i);
              setActive(isEmpty(active) ? newArrays : []);
            }}
          >
            {isEmpty(active) ? "Mở tất cả" : "Đóng tất cả"}
          </button>
        </div>
        {course?.map((item, index) => (
          <Arcordion
            key={index}
            title={item.title}
            content={item.content}
            lessons={item.content.length}
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
        ))}
      </div>
    </div>
  );
}

function Arcordion({ title, content, lessons, isOpen, onClick }) {
  const isAccordionOpen = isOpen;
  return (
    <div className="w-full">
      <div
        className={classNames(
          "flex gap-2 items-center mt-2 py-3 px-5 rounded-md border border-[#EBEBEB] bg-[#F5F5F5]",
          "text-black font-medium text-opacity-80"
        )}
        onClick={onClick}
      >
        <Plus
          className={`h-5 w-5 transform ${
            isAccordionOpen ? "rotate-45" : ""
          } ease-in-out duration-300`}
        ></Plus>
        <div className="flex justify-between w-full">
          <p>{title}</p>
          <p>{lessons} bài học</p>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"}`}
        style={{
          overflow: "hidden",
        }}
      >
        {content?.map((item, index) => (
          <div
            className={classNames(
              "pl-8 pr-6 py-2 mt-1 border-b border-[#EBEBEB] flex justify-between",
              "text-black font-medium text-opacity-80"
            )}
            key={index}
          >
            <div className="flex items-center gap-2">
              <PlayCircleFill width={12} height={12} fill="#F05123" />
              <p className="text-sm font-medium text-black text-opacity-80">
                {item?.title}
              </p>
            </div>
            <span className="duration">{item?.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArcordionItem;
