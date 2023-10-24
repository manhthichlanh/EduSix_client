/* eslint-disable react/prop-types */
import classNames from "classnames";
import Plus from "./../commom/icons/Plus";
import PlayCircleFill from "../commom/icons/PlayCircleFill";
export default function Arcordition({
  title,
  content,
  lessons,
  isOpen,
  onClick,
}) {
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
        {" "}
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
        className="accordion-content"
        style={{
          display: isOpen ? "block" : "none",
          overflow: "hidden",
        }}
      >
        {content?.map((it, index) => (
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
                {it?.title}
              </p>
            </div>
            <span className="duration">{it?.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
