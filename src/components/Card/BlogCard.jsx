/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ArrowRight from "../commom/icons/ArrowRight";

const categoryColors = {
  1: { color: "#5C59E8" },
  2: { color: "#667085" },
  3: { color: "#D3620F" },
  4: { color: "#15711F" },
  5: { color: "#4462FE" },
  6: { color: "#882929" },
};

export default function BlogCard(props) {
  const { id, cateId, comment, image, title, category } = props;
  return (
    <div className="w-full">
      <div div className="" key={id}>
        <Link
          href="/"
          className="block w-full mb-3 overflow-hidden rounded-lg aspect-video"
        >
          <img src={image} alt="" className="object-cover w-full h-full" />
        </Link>
        <div className="flex items-center justify-start gap-2 leading-24">
          <p
            className="font-medium text-medium"
            style={{
              color: categoryColors[cateId].color,
            }}
          >
            {category}
          </p>
          <div className="w-1 h-1 rounded-full mt-1 bg-[#808080]"></div>
          <div className="text-[#808080] font-medium">{comment} Bình luận</div>
        </div>
        <h5 className="overflow-hidden text-lg font-medium capitalize text-dark-500 leading-24">
          <Link
            href="/"
            className="transition hover:text-primary-500 line-clamp-2 text-[#1D2026] text-xl"
          >
            {title}
          </Link>
        </h5>
        <Link
          href="/"
          className="flex items-center gap-2 mt-4 text-sm font-medium leading-24 text-[#1F1D0D]"
        >
          Đọc tiếp
          <span className="flex items-center justify-center w-6 h-6 text-white rounded-full bg-primary-500">
            <ArrowRight></ArrowRight>
          </span>
        </Link>
      </div>
    </div>
  );
}
