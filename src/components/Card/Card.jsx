/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import StarFill from "./../commom/icons/StarFill";

const categoryColors = {
  1: { backgroundColor: "#EFEFFD", color: "#5C59E8" },
  2: { backgroundColor: "#F0F1F3", color: "#667085" },
  3: { backgroundColor: "#FDF1E8", color: "#D3620F" },
  4: { backgroundColor: "#E7F4EE", color: "#15711F" },
  5: { backgroundColor: "#ECEFFF", color: "#4462FE" },
  6: { backgroundColor: "#FEEDEC", color: "#882929" },
};

const Card = (props) => {
  const { image, category, price, name, rating, joiner, cateId } = props;
  const colors = categoryColors[cateId] || {};

  return (
    <div className="rounded-lg w-full border border-[#e8e8e8] p-2 pb-3 select-none">
      {/* thumbnail */}
      <Link href="/" className="block w-full mb-4 overflow-hidden rounded">
        <img className="object-cover w-full h-full" src={image} alt="" />
      </Link>
      {/* meta */}
      <div className="flex items-center justify-between mb-2">
        <Link
          href="/"
          className="rounded py-1 px-3 text-xs font-semibold leading-[16px] tracking-[0.5%]"
          style={{
            backgroundColor: colors.backgroundColor,
            color: colors.color,
          }}
        >
          {category}
        </Link>
        <p className="text-base font-semibold text-[#FF6636]">
          {price === 0 ? "Miễn phí" : price.toLocaleString("vi-VN") + "đ"}
        </p>
      </div>
      {/* name */}
      <h4 className="capitalize text-normal font-medium text-[#1D2026] overflow-hidden">
        <Link
          href="/"
          className="transition hover:text-primary-500 line-clamp-2"
        >
          {name}
        </Link>
      </h4>
      <span className="block w-full h-px my-2 bg-gray-200" />
      <div className="flex items-center justify-between">
        {/* rating */}
        <div className="flex items-center gap-1">
          <StarFill
            className=" stroke-[#FD8E1F] fill-[#FD8E1F]"
            height={16}
            width={16}
          />
          <span className="font-medium text-normal leading-20 tracking-[1%] text-slate-500">
            {rating}
          </span>
        </div>
        {/* students */}
        <p className="text-sm font-medium text-black leading-20">
          {joiner}&nbsp;
          <span className="text-gray-300">học sinh</span>
        </p>
      </div>
    </div>
  );
};
export default Card;
