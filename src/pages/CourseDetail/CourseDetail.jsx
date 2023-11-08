import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { apiServer } from "../../utils/http";
import CourseSlide from "../../components/Swiper/CourseSlide";
import ArcordionItem from "../../components/Dropdown/Arcordion";
import DetailCard from "../../components/Card/DetailCard";
import Vector from "../../components/commom/icons/Vector";
import Button from "../../components/button/Button";

export default function CourseDetail() {
  const { state } = useLocation();
  const course_id = state.course_id;
  const [isBoxCro, setIsBoxCro] = useState(true);

  const { data: courseDetails, isError, isLoading } = useQuery(
    ['courseDetails', course_id],
    () => apiServer.get(`/course/${course_id}`),
    {
      enabled: !!course_id,
    }
  );

 
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
  const { data: allCourses, isError: coursesError, isLoading: coursesLoading } = useQuery(
    "allCourses",
    () => apiServer.get("/course").then(response => response.data)
  );
 
  if (coursesLoading) {
    return <div>Loading all courses...</div>;
  }

  if (coursesError) {
    return <div>Error fetching all courses.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching course details.</div>;
  }
 
  const { name, content, thumbnail, course_price, category_id } = courseDetails.data;

  
  const courseData = allCourses.filter(course => course.category_id === category_id);
  return (
    <>
      <div className="px-20">
        <div className="relative grid justify-between gap-6 lg:grid-cols-12">
          <div className="relative lg:col-span-8 md:col-span-12">
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
                src={`http://14.225.198.206:8080/course/thumbnail/${thumbnail}`}
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
                  <Vector width={16} height={16} fill="#1B74E4"></Vector>
                </div>
              </div>
            </div>
            <div className="py-20">
              <p className="font-semibold text-[36px] pb-2">{name}</p>
              <div
                className="font-medium text-[16px] text-[#8d8d8d]"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <ArcordionItem course_id={course_id} />
              </div>
            </div>
          </div>
          <div
            id="box"
            className={`${isBoxCro
              ? "pt-[60px] fixed col-span-4 right-20 bottom-[-20]"
              : "pt-[60px] absolute col-span-4 right-0 bottom-0 "
              }`}
          >
            <DetailCard course_id={course_id} isFree={true}></DetailCard>
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
            <CourseSlide prefixAction={"courseData"} data={ courseData } />
          </div>
        </div>
      </div>
    </>
  );
}
