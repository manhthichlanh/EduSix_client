
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarFill from './../commom/icons/StarFill';
import { serverEndpoint, apiServer } from '../../utils/http';
function Card(props) {
  const {
    thumbnail,
    category,
    price,
    name,
    rating,
    joiner,
    cateId,
    course_id,
  } = props;

  // console.log(categoryData);
  const categoryColors = [
    { backgroundColor: "#EFEFFD", color: "#5C59E8" },
    { backgroundColor: "#FDF1E8", color: "#D3620F" },
    { backgroundColor: "#F0F1F3", color: "#667085" },
    { backgroundColor: "#E7F4EE", color: "#15711F" },
    { backgroundColor: "#ECEFFF", color: "#4462FE" },
    { backgroundColor: "#FEEDEC", color: "#882929" },
  ];
  
  const colors = categoryColors[cateId - 1] || {};

  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchCategoryName = async () => {
      try {
        const response = await apiServer.get(`/category/${cateId}`);
        setCategoryName(response.data.cate_name);
      } catch (error) {
        console.error('Error fetching category name:', error);
      }
    };

    fetchCategoryName();
  }, [cateId]);
  return (
    <Link
    to={`/course-detail?courseId=${course_id}`}
    className="block w-full mb-4 overflow-hidden rounded h-fit"
    state={{ course_id }}
  >
    <div className="rounded-lg w-full border border-[#e8e8e8] p-2 pb-3 select-none">
      {/* thumbnail */}
    
        <img
          className="object-cover w-full h-full"
          src={`${serverEndpoint}course/thumbnail/${thumbnail}`}
          alt={thumbnail}
        />
     
      {/* meta */}
      <div className="flex items-center justify-between mb-2">
        <div
          className="rounded py-1 px-3 text-xs font-semibold leading-[16px] tracking-[0.5%]"
          style={{
            backgroundColor: colors.backgroundColor,
            color: colors.color,
          }}
        >
          {categoryName}
        </div>
        <p className="text-base font-semibold text-[#FF6636]">
          {price === 0 ? "Miễn phí" : price?.toLocaleString("vi-VN") + "đ"}
        </p>
      </div>
      {/* name */}
      <h4 className="capitalize text-normal font-medium text-[#1D2026] overflow-hidden">
        <div className="transition hover:text-primary-500 line-clamp-2">
          {name}
        </div>
      </h4>
      <span className="block w-full h-px my-2 bg-gray-200" />
      <div className="flex items-center justify-between">
        {/* rating */}
        <div className="flex items-center gap-1">
          <StarFill
            className="stroke-[#FD8E1F] fill-[#FD8E1F]"
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
    </Link>
  );
}

export default Card;
