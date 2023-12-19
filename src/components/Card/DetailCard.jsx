import React, { useEffect, useState } from "react";
import PlayCircleFill from "../commom/icons/PlayCircleFill";
import { useQuery } from "react-query";
import { apiServer } from "../../utils/http";
import { isEmpty } from "lodash";
import BatteryEmpty from "./../commom/icons/BatteryEmpty";
import Award from "./../commom/icons/Award";
import Monitor from "../commom/icons/Monitor";
import Button from "../button/Button";
import VideoPlay from "../commom/icons/VideoPlay";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../../utils/UserAPI';
import ToastMessage from "../../utils/alert";

function DetailCard({ course_id }) {
  const navigate = useNavigate();
  const { user } = useUser();
  const users = user?.userDetails || {};
  const user_id = users.user_id;

  const [active, setActive] = useState(null);
  const [isUserEnrolled, setIsUserEnrolled] = useState(false);

  const { data: courseData, isLoading, isError } = useQuery(
    ["courseData", course_id],
    () => apiServer.get(`/admin-query/getAllLessonQuizzVideo/${course_id}`),
    { enabled: !!course_id }
  );

  const { data: enrollmentData } = useQuery(
    ["enrollmentData", course_id, user_id],
    async () => {
      if (!user_id) {
        return { message: { isUserEnrollmentCourse: false } };
      }

      const response = await apiServer.get("/admin-query/isUserEnrollCourse", {
        params: {
          user_id,
          course_id,
        },
      });
      return response.data.message;
    },
    {
      enabled: !!user_id,
    }
  );

  useEffect(() => {
    if (courseData && courseData.data.success && SectionDoc.length > 0) {
      const firstLessonId = SectionDoc[0].lessons[0]?.lesson_id;
      setActive(firstLessonId);
    }
  }, [courseData]);

  const navigateToCourse = () => {
    if (user_id && active !== null) {
      navigate(`/course-video?courseId=${course_id}&lessonId=${active}`);
      
    } else {
      console.error("User not logged in or active lesson not set. Redirecting to login page...");
      // Add logic to redirect to the login page if needed
    }
  };

  const handleEnrollment = async () => {
    if (!user_id) {
      ToastMessage("Vui lòng đăng nhập để đăng ký khóa học").warn();
      navigate("/login");
      return;
    }

    try {
      const response = await apiServer.post("/admin-query/enrollmentCourse", {
        user_id: user_id,
        course_id: course_id,
      });
    
      ToastMessage("Đăng kí khóa học thành công").success();
      setIsUserEnrolled(true);
      return response.data.message;
    } catch (error) {
      setIsUserEnrolled(true);
      navigateToCourse();
      // console.error("Error during enrollment:", error.response.data);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching course data.</div>;
  }

  const { SectionDoc, CourseDoc } = courseData.data;
  if (!SectionDoc || isEmpty(SectionDoc) || SectionDoc.every(section => isEmpty(section.lessons))) {
    return <div>Bài học chưa được tải lên.</div>;
  }


  function calculateTotalDuration(sections) {
    let totalDurationInSeconds = 0;

    if (sections) {
      sections.forEach((section) => {
        section.lessons.forEach((lesson) => {
          if (lesson.duration) {
            totalDurationInSeconds += lesson.duration;
          }
        });
      });
    }

    return totalDurationInSeconds;
  }

  function formatDuration(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours} giờ ${minutes} phút ${seconds} giây`;
  }

  const totalDurationInSeconds = calculateTotalDuration(SectionDoc);
  const formattedTotalDuration = formatDuration(totalDurationInSeconds);
  const isFree = CourseDoc.course_price === 0;

  return (
    <div className={`rounded-lg w-full ${window.innerWidth <= 1023 ? "max-w-[100%]" : "max-w-[430px]"} shadow-xl px-8 py-6 select-none bg-white`}>
      <div className="flex flex-col items-center gap-3">
        <p className="text-xl font-bold text-black">Gói</p>
        <div className="flex items-center gap-2">
          <p className="text-[#F05123] font-medium text-[32px]">
            {isFree ? "Miễn phí" : CourseDoc.course_price?.toLocaleString("vi-VN") + "đ"}
          </p>
        </div>
      </div>
      <span className="block w-full h-px my-4 bg-gray-200" />
      <div className="flex flex-col gap-5">
        <p className="text-lg font-semibold text-black text-opacity-90">
          Khóa này bao gồm
        </p>
        <div className="flex items-center gap-2">
          <PlayCircleFill width={20} height={20} fill="#F05123" />
          <p className="text-[#8D8D8D]">
            Thời lượng{" "}
            <span className="font-medium text-black">{formattedTotalDuration}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <VideoPlay width={20} height={20}></VideoPlay>
          <p className="text-[#8D8D8D]">
            Tổng số{" "}
            {courseData.data.Course_Info
              ? <span className="font-medium text-black">{courseData.data.Course_Info.LessonCount} </span>
              : "Không có dữ liệu"}
            bài học
          </p>
        </div>
        <div className="flex items-center gap-2">
          <BatteryEmpty width={20} height={20}></BatteryEmpty>
          <p className="text-[#8D8D8D]">Học mọi lúc, mọi nơi</p>
        </div>
        <div className="flex items-center gap-2">
          <Award width={20} height={20}></Award>
          <p className="text-[#8D8D8D]">Giấy chứng nhận</p>
        </div>
        <div className="flex items-center gap-2">
          <Monitor width={20} height={20}></Monitor>
          <p className="text-[#8D8D8D]">Truy cập được trên nhiều thiết bị</p>
        </div>
      </div>
      <div>
      {isFree ? (
          <Button
            onClick={isUserEnrolled ? navigateToCourse : handleEnrollment}
            Class={`w-full rounded-lg p-3 mt-4 text-lg ${
              isFree
                ? "bg-[#FFEEE8] text-[#FF6636] font-medium"
                : "bg-[your-button-color] text-[your-text-color]"
            }`}
            text={isUserEnrolled ? "Vào khóa học" : enrollmentData?.isUserEnrollmentCourse ? "Vào khóa học" : "Đăng kí"}
          />
        ) : (
          <Button
            onClick={isUserEnrolled ? navigateToCourse : handleEnrollment}
            Class={`w-full rounded-lg p-3 mt-4 text-lg ${
              isFree
                ? "bg-[#FFEEE8] text-[#FF6636] font-medium"
                : "bg-[your-button-color] text-[your-text-color]"
            }`}
            text={isUserEnrolled ? "Vào khóa học" : enrollmentData?.isUserEnrollmentCourse ? "Vào khóa học" : "Mua ngay"}
          />
        )}
      </div>

    </div>
  );
}

export default DetailCard;
