import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { apiServer, serverEndpoint } from "../../utils/http";
import { filter, slice } from "lodash";
import ArcordionItem from "../../components/Dropdown/Arcordion";
import DetailCard from "../../components/Card/DetailCard";
import Vector from "../../components/commom/icons/Vector";
import Button from "../../components/button/Button";
import CourseSlide from "../../components/Swiper/CourseSlide";
// import { useUser } from '../../utils/UserAPI';
const getCourseData = async () => {
  try {
    const response1 = await apiServer.get("/course");
    const course = response1.data;
    return course;
  } catch (error) {
    throw new Error("Error fetching course data");
  }
};
export default function CourseDetail() {
  const location = useLocation();
  const course_id = new URLSearchParams(location.search).get("courseId");
  const [isBoxCro, setIsBoxCro] = useState(true);

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Listen for resize events
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll); // Clean up resize event listener
    };
  }, []);
  const handleScroll = () => {
    const element = document.getElementById("box-list-course");

    // Check if the element exists before trying to access its properties
    if (element) {
      const triggerPosition = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const isSmallScreen = window.innerWidth <= 1023;

      if (isSmallScreen && triggerPosition > 0) {
        setIsBoxCro(false);
      } else if (triggerPosition <= viewportHeight) {
        setIsBoxCro(false);
      }
      else {
        setIsBoxCro(true);
      }

    }
  };

  const { data: courseData } = useQuery("courseData", getCourseData);
  const {
    data: courseDetails,
    isError,
    isLoading,
  } = useQuery(
    ["courseDetails", course_id],
    () => apiServer.get(`/course/${course_id}`),
    {
      enabled: !!course_id,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching course details.</div>;
  }

  const { name, content, thumbnail, category_id } = courseDetails.data;

  const sortedBySameCateID = slice(
    filter(courseData, (course) => course.category_id === category_id),
    0,
    8
  );

  return (
    <>
      <div className="md:px-20 px-5">
        <div className="relative grid justify-between gap-6 lg:grid-cols-12">
          <div className="relative lg:col-span-8 col-span-12">
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
                className="w-full rounded-xl"
                src={`${serverEndpoint}course/thumbnail/${thumbnail}`}
                alt=""
              />
              <div className="absolute inline-flex items-end z-1 mt-[-50px] pl-10">
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
                ? "pt-[60px] fixed col-span-4 right-20 bottom-[-20] bg-white col-span-12"
                : `pt-[60px] ${window.innerWidth <= 1023 ? "relative" : "absolute"} col-span-12  right-0 bottom-0 bg-white`
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
          <div className="m-5">
            <CourseSlide prefixAction={"details"} data={sortedBySameCateID} />
          </div>
        </div>
      </div>
    </>
  );
}
