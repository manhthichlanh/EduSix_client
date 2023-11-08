import { useState, useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import "./CourseVideo.scss";
import ChevronLeft from "../../components/commom/icons/ChevronLeft";
import ChevronRight from "../../components/commom/icons/ChevronRight";
import Check from "../../components/commom/icons/Check";
import Messages from "../../components/commom/icons/Messages";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/button/Button";
import { useQuery } from "react-query";
// import Footer from "../../Layout/Footer";
import styled from "styled-components";
import { apiServer } from "../../utils/http";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faXmark, // Add FontAwesome icons for hiding and showing the menu
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
// import CommentReply from './CommentReply';
const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;

  max-height: 1080px; // Chiều cao tối đa là 1080px

  > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;



const CourseVideo = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");
console.log(courseId);

  const [isAnHienSubMenu1, setIsAnHienSubMenu1] = useState(false);
  const [isAnHienSubMenu, setIsAnHienSubMenu] = useState(
    window.innerWidth > 1000
  );
// Sử dụng React Query để gọi API và lấy dữ liệu từ máy chủ
const { data: courseData, isLoading, isError } = useQuery(
  ["courseData", courseId],
  () => apiServer.get(`/admin-query/getAllLessonQuizzVideo/${courseId}`),
  {
    enabled: !!courseId, // Không thực hiện gọi API nếu courseId không tồn tại
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

const { Course_Info, SectionDoc, CourseDoc } = courseData.data;
  const benefit = [
    { content: "Biết cách cài đặt và tùy biến Windows Terminal" },
    { content: "Biết cách cài đặt và tùy biến Windows Terminal" },
    { content: "Biết cách cài đặt và tùy biến Windows Terminal" },
    { content: "Biết cách cài đặt và tùy biến Windows Terminal" },
    { content: "Biết cách cài đặt và tùy biến Windows Terminal" },
    { content: "Biết cách cài đặt và tùy biến Windows Terminal" },
    { content: "Biết cách cài đặt và tùy biến Windows Terminal" },
    { content: "Biết cách cài đặt và tùy biến Windows Terminal" },
  ];

  const comments = [
    {
      name: "Phạm Đạt",
      time: "1 giờ trước",
      content:
        "Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor.",
      avatarUrl:
        "https://vsm.vn/wp-content/uploads/2022/04/nhung-mau-anh-avatar-nam-lam-dai-dien-facebook-dep-nhat-1.png", // Replace with the actual URL to the user's avatar image
      replies: [
        {
          name: "User1",
          time: "30 phút trước",
          content: "Reply content 1",
          avatarUrl:
            "https://vsm.vn/wp-content/uploads/2022/04/nhung-mau-anh-avatar-nam-lam-dai-dien-facebook-dep-nhat-1.png", // Replace with the actual URL to the user's avatar image
        },
        {
          name: "User2",
          time: "15 phút trước",
          content: "Reply content 2",
          avatarUrl:
            "https://vsm.vn/wp-content/uploads/2022/04/nhung-mau-anh-avatar-nam-lam-dai-dien-facebook-dep-nhat-1.png", // Replace with the actual URL to the user's avatar image
        },
      ],
    },
    {
      name: "User3",
      time: "2 giờ trước",
      content: "Another top-level comment.",
      avatarUrl:
        "https://vsm.vn/wp-content/uploads/2022/04/nhung-mau-anh-avatar-nam-lam-dai-dien-facebook-dep-nhat-1.png", // Replace with the actual URL to the user's avatar image
      replies: [
        {
          name: "User4",
          time: "1 giờ trước",
          content: "Reply content 3",
          avatarUrl:
            "https://vsm.vn/wp-content/uploads/2022/04/nhung-mau-anh-avatar-nam-lam-dai-dien-facebook-dep-nhat-1.png", // Replace with the actual URL to the user's avatar image
        },
      ],
    },
  ];

  const toggleAnHienSubMenu = () => {
    setIsAnHienSubMenu(!isAnHienSubMenu);
  };
  const toggleAnHienSubMenu1 = () => {
    setIsAnHienSubMenu1(!isAnHienSubMenu1);
    setIsAnHienSubMenu(false);
  };
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsAnHienSubMenu(window.innerWidth > 1000);
  //   };

  //   // Add event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const handleScrollToOverview = () => {
    const element = document.getElementById("overview-section"); // Get the element by id
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleScrollToQuestion = () => {
    const element = document.getElementById("question-section"); // Get the element by id
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleScrollToComments = () => {
    const element = document.getElementById("comments-section"); // Get the element by id
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="CourseVideo">
        <div className="Header">
          <div className="directional">
            <div className="return">
              <NavLink to="#">
                <ChevronLeft
                  width={20}
                  height={20}
                  fill="#fff"
                  className="icon-link"
                />
                <p>Trở lại</p>
              </NavLink>
            </div>
            <div className="name_course">
              <p>Lập trình C++ cơ bản, nâng cao</p>
            </div>
          </div>
        </div>
        <div className="Content_CourseVideo">
          <div className="CourseVideo_Left">
            <div className="video">
              <VideoWrapper>
                <div>
                  <ReactPlayer
                    url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </div>
              </VideoWrapper>
            </div>
            <div className="scrollBar">
              <div className="mini_menu">
                <NavLink onClick={handleScrollToOverview}>
                  <p>Tổng quan</p>
                </NavLink>
                <NavLink onClick={handleScrollToQuestion}>
                  <p>Câu hỏi</p>
                </NavLink>
                <NavLink onClick={handleScrollToComments}>
                  <p>Bình luận</p>
                </NavLink>
                <NavLink>
                  <p>Đánh giá</p>
                </NavLink>
              </div>
              <div className="information">
                <div className="overview_CourseVideo" id="overview-section">
                  <h1>Lập trình C++ cơ bản, nâng cao</h1>
                  <p>
                    Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người
                    mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm
                    được các khái niệm căn cơ của lập trình, giúp các bạn có nền
                    tảng vững chắc để chinh phục con đường trở thành một lập
                    trình viên.
                  </p>
                </div>

                <div className="question_CourseVideo" id="question-section">
                  <h2>Bạn sẽ học được gì?</h2>
                  <div className="questionsmall">
                    {benefit.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="eachquestion">
                        <div className="icon_Check">
                          <div className="icon_Check_1">
                            <Check width={20} height={20} fill="#fff" />
                          </div>
                        </div>
                        <div className="content_question">
                          <p>{benefit.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="comment" id="comments-section">
                  <h2>Bình Luận</h2>
                  <div className="Content">
                    <div className="post_Comments">
                      <div className="avatar">
                        <img
                          src="https://vsm.vn/wp-content/uploads/2022/04/nhung-mau-anh-avatar-nam-lam-dai-dien-facebook-dep-nhat-1.png"
                          alt=""
                        />
                      </div>
                      <div className="input_comments">
                        <Messages
                          width={20}
                          height={20}
                          fill="#fff"
                          className="icon_Messages"
                        />
                        <input type="text" placeholder="Nhập bình luận..." />
                      </div>
                      <div className="Button_Comment">
                        <Button text="Bình luận" Class="Button"></Button>
                      </div>
                    </div>
                    <div className="commented_Content">
                      {comments.map((comment, commentIndex) => (
                        <div key={commentIndex} className="boxCommented">
                          <div className="commented">
                            <div className="avatar">
                              <img src={comment.avatarUrl} alt="" />
                            </div>
                            <div className="comment_Information">
                              <div className="User">
                                <div className="name">{comment.name}</div>
                                <div className="time">{comment.time}</div>
                              </div>
                              <div className="content">
                                <p>{comment.content}</p>
                              </div>
                              <div className="Reply">
                                <div className="Messages">
                                  <Messages
                                    width={20}
                                    height={20}
                                    fill="#fff"
                                  />
                                </div>
                                <div className="title">
                                  <p>Trả lời</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {comment.replies.map((reply, replyIndex) => (
                            <div
                              className="commented commentReply"
                              key={replyIndex}
                            >
                              <div className="avatar">
                                <img src={reply.avatarUrl} alt="" />
                              </div>
                              <div className="comment_Information">
                                <div className="User">
                                  <div className="name">{reply.name}</div>
                                  <div className="time">{reply.time}</div>
                                </div>
                                <div className="content">
                                  <p>{reply.content}</p>
                                </div>
                                <div className="Reply">
                                  <div className="Messages">
                                    <Messages
                                      width={20}
                                      height={20}
                                      fill="#fff"
                                    />
                                  </div>
                                  <div className="title">
                                    <p>Trả lời</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="see_More">
                    <Button text="Xem thêm" Class="Button"></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isAnHienSubMenu && (
            <>
              <div
                className="background_Black"
                onClick={toggleAnHienSubMenu1}
              ></div>
              <div className="CourseVideo_Right">
                <div className="menu_CourseVideo_Right">
                  <h2 className="text-lg font-semibold py-4">
                    Nội dung khóa học
                  </h2>
                  <div className="dropdownMenu">
                    <Dropdown SectionDoc={SectionDoc} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* <div className="footer">
                <Footer></Footer>
            </div> */}
      <div className="sub_menu">
        <div className="course_content">
          <button onClick={toggleAnHienSubMenu}>
            <FontAwesomeIcon icon={isAnHienSubMenu ? faXmark : faBars} />{" "}
            {/* Toggle visibility icon */}
          </button>
        </div>
        <div className="next_page">
          <NavLink to="#" className="button_next_page">
            <ChevronLeft
              width={20}
              height={20}
              fill="#656565"
              className="icon-link"
            />
            <Button text="Bài trước" Class="Button"></Button>
          </NavLink>

          <NavLink to="#" className="button_next_page">
            <Button text="Bài sau" Class="Button"></Button>
            <ChevronRight
              width={20}
              height={20}
              fill="#656565"
              className="icon-link"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default CourseVideo;
