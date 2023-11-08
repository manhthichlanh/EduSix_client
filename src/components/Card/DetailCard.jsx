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
import { Link, useNavigate  } from "react-router-dom";
function DetailCard({ course_id  }) {
  const navigate = useNavigate();
  const [active, setActive] = useState([]);
  const { data: courseData, isLoading, isError } = useQuery(
    ["courseData", course_id],
    () => apiServer.get(`/admin-query/getAllLessonQuizzVideo/${course_id}`),
    {
      enabled: !!course_id,
    }
  );

  useEffect(() => {
    if (courseData && courseData.data.success) {
      // Access the data from the response
      const { Course_Info, CourseDoc, SectionDoc, success } = courseData.data;
      const { sectionCount, LessonCount, TotalTime } = Course_Info;

      // Do something with the data...
      console.log('Section Count:', sectionCount);
      console.log('Lesson Count:', LessonCount);
      console.log('Total Time:', TotalTime);
      console.log('Course Doc:', CourseDoc);
      console.log('Section Doc:', SectionDoc);
    }
  }, [courseData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching course data.</div>;
  }

  if (!courseData || !courseData.data.Course_Info || !courseData.data.SectionDoc) {
    return <div>Error: Course data is not available.</div>;
  }

  const { Course_Info, SectionDoc, CourseDoc  } = courseData.data;

  if (isEmpty(SectionDoc)) {
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
    <div className="rounded-lg w-full max-w-[430px] shadow-xl px-8 py-6 select-none">
      <div className="flex flex-col items-center gap-3">
        <p className="text-xl font-bold text-black">Gói</p>
        <div className="flex items-center gap-2">
        <p className="text-[#F05123] font-medium text-[32px]">
            {isFree ? "Miễn phí" : CourseDoc.course_price.toLocaleString("vi-VN") + "đ"}
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
        <Link to={`/course-video?courseId=${course_id}`}>
          <Button
            Class="w-full rounded-lg bg-[#FFEEE8] p-3 mt-4 text-[#FF6636] font-medium text-lg"
            text="Tham gia khóa học"
          />
        </Link>
      ) : (
        <Button
          Class="w-full rounded-lg bg-[#FFEEE8] p-3 mt-4 text-[#FF6636] font-medium text-lg"
          text="Mua ngay"
        />
      )}
      </div>
    </div>
  );
}

export default DetailCard;
