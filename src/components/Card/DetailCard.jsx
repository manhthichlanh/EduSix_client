import { useEffect, useState } from "react";
import PlayCircleFill from "../commom/icons/PlayCircleFill";
import { useQuery } from "react-query";
import { apiServer, serverEndpoint } from "../../utils/http";
import { isEmpty } from "lodash";
import BatteryEmpty from "./../commom/icons/BatteryEmpty";
import Award from "./../commom/icons/Award";
import Monitor from "../commom/icons/Monitor";
import Button from "../button/Button";
import VideoPlay from "../commom/icons/VideoPlay";
import { useNavigate } from "react-router-dom";
import { useUser } from '../../utils/UserAPI';
import ToastMessage from "../../utils/alert";


function DetailCard({ course_id }) {
  const navigate = useNavigate();
  const { user } = useUser();
  const users = user?.userDetails || {};
  const user_id = users.user_id;

  const [active, setActive] = useState(null);
  const [isUserEnrolled, setIsUserEnrolled] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [enrollmentAttempted, setEnrollmentAttempted] = useState(false);
  useEffect(() => {
    const checkPurchaseStatus = async () => {
      try {
        if (user_id && course_id) {
          const response = await apiServer.get(`/order/check-purchase/${user_id}/${course_id}`);
          setHasPurchased(response.data.hasPurchased);

          // If the user has purchased the course and enrollment hasn't been attempted, enroll them
          if (response.data.hasPurchased && !enrollmentAttempted) {
          
            setEnrollmentAttempted(true);
            // Set the flag to true after the first attempt
          }
        }
      } catch (error) {
        console.error("Error checking purchase status", error);
      }
    };

    checkPurchaseStatus();
  }, [user_id, course_id, enrollmentAttempted]);
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
  
  const handlePurchase = async () => {
    if (!user_id) {
      ToastMessage("Vui lòng đăng nhập để thực hiện mua khóa học").warn();
      navigate("/login");
      return;
    }
  
    if (isFree) {
      // For free courses, directly proceed with enrollment
      await handleEnrollment();
    } else {
      try {
        if (user_id && course_id) {
        // Check purchase status for paid courses
        const response = await apiServer.get(`/order/check-purchase/${user_id}/${course_id}`);
        setHasPurchased(response.data.hasPurchased);
  
        // If the user has purchased the course and enrollment hasn't been attempted, enroll them
        if (response.data.hasPurchased && !enrollmentAttempted) {
          setEnrollmentAttempted(true);
          await handleEnrollment(); // Proceed with enrollment
          return;
        }
      }
        // If the course is not free, navigate to the payment page
        navigate("/payment", {
          state: {
            courseId: CourseDoc.course_id,
            courseName: CourseDoc.name,
            coursePrice: CourseDoc.course_price,
            courseThumbnail: thumbnailUrl
          }
        });
      } catch (error) {
        console.error("Error checking purchase status", error);
      }
    }
  };
  
  
  const handleEnrollment = async () => {
    if (!user_id) {
      ToastMessage("Vui lòng đăng nhập để đăng ký khóa học").warn();
      navigate("/login");
      return;
    }
  
    try {
      const progressResponse = await apiServer.get(`/admin-query/getAllProgress?user_id=${user_id}&course_id=${course_id}`);
  
      if (hasPurchased) {
        ToastMessage("Chào mừng bạn vào khóa học trả phí của chúng tôi").success();
        setIsUserEnrolled(true);
        setEnrollmentAttempted(true);
        navigateToCourse();
        return;
      }
  
      // If there is progress data, the user has already started the course
      if (progressResponse.data && progressResponse.data.s_doc.length > 0) {
        ToastMessage("Chào mừng bạn vào khóa học miễn phí của chúng tôi").success();
        setIsUserEnrolled(true);
        setEnrollmentAttempted(true);
        navigateToCourse();
        return;
      }
  
      // Proceed with enrollment
      const enrollmentResponse = await apiServer.post("/admin-query/enrollmentCourse", {
        user_id: user_id,
        course_id: course_id,
      });
  
      ToastMessage("Đăng ký khóa học thành công").success();
      setIsUserEnrolled(true);
      setEnrollmentAttempted(true);
  
      return enrollmentResponse.data.message;
  
    } catch (error) {
      // Handle errors
      if (error.response?.data?.message === "Cannot read properties of null (reading 'enrollment_id')") {
        // Immediately proceed with the enrollment API call
        const enrollmentResponse = await apiServer.post("/admin-query/enrollmentCourse", {
          user_id: user_id,
          course_id: course_id,
        });
  
        ToastMessage("Đăng ký khóa học thành công").success();
        setIsUserEnrolled(true);
        setEnrollmentAttempted(true); // Set the flag to true after the first attempt
        navigateToCourse();
        return enrollmentResponse.data.message;
      } else {
        console.error('Error during enrollment:', error.response?.data || error.message);
        navigateToCourse();
      }
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
  const thumbnailUrl = CourseDoc.thumbnail ? `${serverEndpoint}course/thumbnail/${CourseDoc.thumbnail}` : 'đường_dẫn_hình_ảnh_mặc_định';
  // console.log(thumbnailUrl);
  // console.log(CourseDoc);
  // console.log(CourseDoc.thumbnail);
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
                : "bg-[#e8f0ff] text-[#36a1ff] font-medium"
            }`}
            text={isUserEnrolled ? "Vào khóa học" : enrollmentData?.isUserEnrollmentCourse ? "Vào khóa học" : "Đăng kí"}
          />
        ) : (
          <Button
          onClick={async () => {
            if (isUserEnrolled) {
              navigateToCourse();
            } else {
              if (hasPurchased) {
                await handleEnrollment();
              } else {
                await handlePurchase();
              }
            }
          }}
          Class={`w-full rounded-lg p-3 mt-4 text-lg ${
            isFree
              ? "bg-[#FFEEE8] text-[#FF6636] font-medium"
              : "bg-[#e8f0ff] text-[#36a1ff] font-medium"
          }`}
          text={isUserEnrolled ? "Vào khóa học" : (hasPurchased ? "Vào khóa học" : "Mua ngay")}
        />
        
        )}
      </div>

    </div>
  );
}

export default DetailCard;
