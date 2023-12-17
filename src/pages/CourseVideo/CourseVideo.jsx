import { useState, useEffect, useRef } from "react";
import { NavLink, useSearchParams, useNavigate } from "react-router-dom";
import "./CourseVideo.scss";
import ChevronLeft from "../../components/commom/icons/ChevronLeft";
import ChevronRight from "../../components/commom/icons/ChevronRight";
import Check from "../../components/commom/icons/Check";
import Messages from "../../components/commom/icons/Messages";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { useQuery } from "react-query";
// import Footer from "../../Layout/Footer";
import { useUser } from '../../utils/UserAPI';
import styled from "styled-components";
import { apiServer, serverEndpoint } from "../../utils/http";
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



// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }

//     if (delay !== null) {
//       const id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }

const CourseVideo = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");
  const lessonId = searchParams.get("lessonId");
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [selectedAnswersByQuestion, setSelectedAnswersByQuestion] = useState({});
  const { user, handleLogout } = useUser();
  const users = user?.userDetails || {};
  const user_id = users.user_id;
  // const saveProgressToLocalStorage = (lessonId) => {
  //   const savedProgress = localStorage.getItem('userProgress');

  //   let progressData;
  //   if (savedProgress) {
  //     progressData = JSON.parse(savedProgress);

  //     // Check if userId or courseId has changed
  //     if (progressData.userId !== user_id || progressData.courseId !== courseId) {
  //       // Create a new entry
  //       progressData = {
  //         userId: user_id,
  //         courseId: courseId,
  //         lessonId: lessonId,
  //       };
  //     } else {
  //       // Update lessonId in the existing entry
  //       progressData.lessonId = lessonId;
  //     }
  //   } else {
  //     // If no progress data exists, create a new entry
  //     progressData = {
  //       userId: user_id,
  //       courseId: courseId,
  //       lessonId: lessonId,
  //     };
  //   }

  //   localStorage.setItem('userProgress', JSON.stringify(progressData));
  // };

  // useEffect(() => {
  //   const savedProgress = localStorage.getItem('userProgress');
  //   if (savedProgress) {
  //     const progressData = JSON.parse(savedProgress);
  //     // Use progressData.userId, progressData.courseId, and progressData.lessonId as needed
  //   }
  // }, [user_id, courseId]); // Add user_id and courseId to the dependency array
  const videoURL = `${serverEndpoint}video/stream/${selectedVideo}`;
  // console.log(videoURL);
  // console.log(courseId);

  const [isAnHienSubMenu1, setIsAnHienSubMenu1] = useState(false);
  const [isAnHienSubMenu, setIsAnHienSubMenu] = useState(
    window.innerWidth > 1000
  );

  const toggleAnHienSubMenu = () => {
    setIsAnHienSubMenu(!isAnHienSubMenu);
  };
  const toggleAnHienSubMenu1 = () => {
    setIsAnHienSubMenu1(!isAnHienSubMenu1);
    setIsAnHienSubMenu(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsAnHienSubMenu(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateCompletedLessons = (lesson) => {
    setCompletedLessons((prevCompletedLessons) => {
      const newCompletedLessons = new Set(prevCompletedLessons);
      newCompletedLessons.add(lesson);
      return Array.from(newCompletedLessons);
    });
  };

  const { data: courseData, isLoading, isError } = useQuery(
    ["courseData", courseId],
    () => apiServer.get(`/admin-query/getAllLessonQuizzVideo/${+courseId}`),
    {
      enabled: !!courseId,
    }
  );
  const handleGoBack = () => {
    navigate(`/course-detail?courseId=${courseId}`);
  };

  const handleNextQuestion = () => {
    if (questionIndex < selectedQuiz.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  if (courseData && courseData.data.success) {
    const { SectionDoc } = courseData.data;

    SectionDoc.forEach((section) => {
      section.lessons.forEach((lesson) => {
        lesson.quizzs.forEach((quizz) => {
          const { question, answers } = quizz;

          answers.forEach((answer) => {
            // ...
          });
        });
      });
    });
  }

  const markLessonAsCompleted = (completedLessonId) => {
    setCompletedLessons((prevCompletedLessons) => {
      const newCompletedLessons = new Set([...prevCompletedLessons, completedLessonId]);
      return Array.from(newCompletedLessons);
    });
  };

  const { data: progressData, refetch: refetchProgressData } = useQuery(
    ['progressData', user_id, courseId],
    () => apiServer.get(`/admin-query/getAllProgress`, { params: { user_id, course_id: courseId } }),
    { enabled: !!courseId && !!user_id }
  );

  useEffect(() => {
    if (progressData && progressData.data) {
      let lessonsProgress = [];

      if (Array.isArray(progressData.data)) {
        lessonsProgress = progressData.data.flatMap((section) =>
          section.section_progresses.flatMap((lesson) =>
            lesson.lesson_progresses.map((lp) => lp.lesson_id)
          )
        );
      }

      setCompletedLessons(lessonsProgress);
    } else {
      // console.log('progressData or progressData.data is undefined');
    }
  }, [progressData, refetchProgressData]);

  const ProgressData = progressData?.data;
  // console.log(ProgressData);


  const handleVideoEnd = async () => {
    try {
      // Check if all lessons are finished
      const allLessonsFinished = ProgressData?.s_doc?.[0]?.section_progresses.every(sectionProgress =>
        sectionProgress.lesson_progresses.every(lessonProgress => lessonProgress.is_finish)
      );
  
      if (allLessonsFinished) {
        alert("Đã hoàn thành tất cả các bài học trong khóa học này.");
      }
      //  else {
      //   alert("Bạn đã hoàn thành tất cả bài học có sẵn, nhưng vẫn còn bài học chưa hoàn thành.");
      // }
  
      // If all lessons are finished, do not make the API call
      if (!allLessonsFinished) {
        const allLessons = SectionDoc.map(section => section.lessons).flat();
        const currentIndex = allLessons.findIndex(lesson => lesson.lesson_id === selectedLesson.lesson_id);
        setCompletedLessons(prev => [...prev, selectedLesson.lesson_id]);
  
        if (currentIndex >= 0 && currentIndex < allLessons.length - 1) {
          const nextLesson = allLessons[currentIndex + 1];
          setSelectedLesson(nextLesson);
          setSelectedVideo(nextLesson.videos?.[0]?.file_videos || null);
          setSelectedQuiz(nextLesson.quizzs || []);
          setQuestionIndex(0);
  
          navigate(`/course-video?courseId=${courseId}&lessonId=${nextLesson.lesson_id}`);
        }
  
        // Make the API call to update progress
        await apiServer.post("/admin-query/updateProgress", {
          course_id: courseId,
          user_id: user_id,
          section_id: selectedLesson.section_id,
          lesson_id: selectedLesson.lesson_id,
        });
  
        // Refetch the progress data after updating
        refetchProgressData();
      }
    } catch (error) {
      console.error("Error handling video end:", error);
    }
  };
  














  useEffect(() => {
    // Your code here
  }, [courseId, lessonId]);
  useEffect(() => {
    if (courseData && courseData.data.success) {
      // Access the data from the response
      const { Course_Info, CourseDoc, SectionDoc, success } = courseData.data;
      const { sectionCount, LessonCount, TotalTime } = Course_Info;

      // Do something with the data...
      // console.log('Section Count:', sectionCount);
      // console.log('Lesson Count:', LessonCount);
      // console.log('Total Time:', TotalTime);
      // console.log('Course Doc:', CourseDoc);
      // console.log('Section Doc:', SectionDoc);
    }
    if (courseData && courseData.data.success) {
      const firstLesson = courseData.data.SectionDoc[0]?.lessons[0];
      if (firstLesson) {
        setSelectedLesson(firstLesson);
        setSelectedVideo(firstLesson.videos?.[0]?.file_videos || null);
        setSelectedQuiz(firstLesson.quizzs || []);
        setQuestionIndex(0);
        const lesson = SectionDoc
          .map(section => section.lessons)
          .flat()
          .find(lesson => lesson.lesson_id.toString() === lessonId);

        if (lesson) {
          setSelectedLesson(lesson);
          setSelectedVideo(lesson.videos?.[0]?.file_videos || null);
          setSelectedQuiz(lesson.quizzs || []);
          setQuestionIndex(0);
        }
      }
    }
  }, [courseData, lessonId]);
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
  const sortedSectionDoc = SectionDoc.sort((a, b) => a.section_id - b.section_id);
  // Inside the handleLessonSelect function in CourseVideo component

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setSelectedVideo(
      lesson.isQuiz
        ? lesson.quizzs?.[0]?.file_videos || null
        : lesson.videos?.[0]?.file_videos || null
    );
    setSelectedQuiz(lesson.quizzs || []);
    setQuestionIndex(0);

    // Cập nhật URL với lessonId mới
    const newURL = `/course-video?courseId=${courseId}&lessonId=${lesson.lesson_id}`;
    window.history.pushState({}, '', newURL);
    navigate(newURL);
    // saveProgressToLocalStorage(lesson.lesson_id);
    // Mở khóa các bài học đã hoàn thành
    const lessonProgress = progressData?.s_doc?.[0]?.section_progresses.find(sectionProgress => sectionProgress.section_id === lesson.section_id);
    const completedLessonIds = lessonProgress?.lesson_progresses.filter(lp => lp.is_finish).map(lp => lp.lesson_id) || [];
    setCompletedLessons(completedLessonIds);
  };





  const isFirstLesson = () => {
    if (!selectedLesson) {
      return false; // or handle the case where selectedLesson is null
    }

    const allLessons = SectionDoc.map((section) => section.lessons).flat();
    const currentIndex = allLessons.findIndex((lesson) => lesson.lesson_id === selectedLesson.lesson_id);
    return currentIndex === 0;
  };


  const isLastLesson = () => {
    if (!selectedLesson) {
      return false; // or handle the case where selectedLesson is null
    }

    const allLessons = SectionDoc.map((section) => section.lessons).flat();
    const currentIndex = allLessons.findIndex((lesson) => lesson.lesson_id === selectedLesson.lesson_id);

    if (currentIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentIndex + 1];
      return nextLesson && nextLesson.lesson_id === null; // Adjust this condition based on your data
    }

    return true; // Handle the case when there is no next lesson
  };


  const isPreviousLessonCompleted = () => {
    if (!selectedLesson) {
      return false; // or handle the case where selectedLesson is null
    }

    const allLessons = SectionDoc.map((section) => section.lessons).flat();
    const currentIndex = allLessons.findIndex((lesson) => lesson.lesson_id === selectedLesson.lesson_id);

    if (currentIndex > 0) {
      const previousLesson = allLessons[currentIndex - 1];
      return previousLesson && previousLesson.completed; // Check if previousLesson is not null before accessing completed
    }

    return false; // Handle the case when there is no previous lesson
  };

  const isNextLessonCompleted = () => {
    if (!selectedLesson) {
      return false; // or handle the case where selectedLesson is null
    }

    const allLessons = SectionDoc.map((section) => section.lessons).flat();
    const currentIndex = allLessons.findIndex((lesson) => lesson.lesson_id === selectedLesson.lesson_id);

    if (currentIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentIndex + 1];
      return nextLesson && nextLesson.lesson_id === null; // Adjust this condition based on your data
    }

    return false; // Handle the case when there is no next lesson
  };


  const handlePreviousLesson = () => {
    const allLessons = SectionDoc.map((section) => section.lessons).flat();
    const currentIndex = allLessons.findIndex(
      (lesson) => lesson.lesson_id === selectedLesson.lesson_id
    );
    const previousLesson = allLessons[currentIndex - 1];

    if (previousLesson) {
      const isNextLessonCompleted = completedLessons.includes(previousLesson.lesson_id.toString());



      const lessonProgress = ProgressData.s_doc[0]?.section_progresses.find(sectionProgress => sectionProgress.section_id === previousLesson.section_id);
      const isLessonLocked = lessonProgress?.lesson_progresses.find(lp => lp.lesson_id === previousLesson.lesson_id && lp.is_lock);
      // console.log('Is Next Lesson Locked:', isLessonLocked);

      if (isLessonLocked) {
        alert('Bạn cần hoàn thành bài học trước đó trước khi tiếp tục!');
        // console.log('Is Next Lesson Locked:', isLessonLocked);
        return;
      }

      const newURL = `/course-video?courseId=${courseId}&lessonId=${previousLesson.lesson_id}`;
      window.history.pushState({}, '', newURL);
      navigate(newURL);
    }
  };


  const handleNextLesson = () => {
    const allLessons = SectionDoc.map((section) => section.lessons).flat();
    const currentIndex = allLessons.findIndex(
      (lesson) => lesson.lesson_id === selectedLesson.lesson_id
    );
    const nextLesson = allLessons[currentIndex + 1];

    if (nextLesson) {


      const nextLessonProgress = ProgressData.s_doc?.[0]?.section_progresses.find(sectionProgress => sectionProgress.section_id === nextLesson.section_id);
      const isNextLessonLocked = nextLessonProgress?.lesson_progresses.find(lp => lp.lesson_id === nextLesson.lesson_id && lp.is_lock);

      // console.log('Is Next Lesson Locked:', isNextLessonLocked);

      if (isNextLessonLocked) {
        alert('Bạn cần hoàn thành bài học trước đó trước khi tiếp tục!');
        return;
      }

      const newURL = `/course-video?courseId=${courseId}&lessonId=${nextLesson.lesson_id}`;
      window.history.pushState({}, '', newURL);

      // Chuyển đến bài học tiếp theo
      navigate(newURL);
      // saveProgressToLocalStorage(nextLesson.lesson_id);
    }
  };





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


  const handleScrollToOverview = () => {
    const element = document.getElementById("overview-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleScrollToQuestion = () => {
    const element = document.getElementById("question-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleScrollToComments = () => {
    const element = document.getElementById("comments-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleAnswerSelect = (answerIndex, isCorrect) => {
    const currentQuestionId = selectedQuiz[questionIndex]?.id; // Assuming you have a unique identifier for each question

    let newSelectedAnswers;

    const allowsMultipleCorrectAnswers =
      selectedQuiz[questionIndex]?.answers?.filter((answer) => answer.isCorrect).length > 1;

    if (allowsMultipleCorrectAnswers) {
      newSelectedAnswers = selectedAnswersByQuestion[currentQuestionId] || [];
      newSelectedAnswers = newSelectedAnswers.includes(answerIndex)
        ? newSelectedAnswers.filter((selectedIndex) => selectedIndex !== answerIndex)
        : [...newSelectedAnswers, answerIndex];
    } else {
      newSelectedAnswers = [answerIndex];
    }

    setSelectedAnswersByQuestion({
      ...selectedAnswersByQuestion,
      [currentQuestionId]: newSelectedAnswers,
    });
  };


  const allowsMultipleCorrectAnswers =
    selectedQuiz[questionIndex]?.answers?.filter((answer) => answer.isCorrect).length > 1;


  const handleSaveAnswers = () => {
    let correctAnswersCount = 0;

    selectedQuiz.forEach((question) => {
      const userAnswers = selectedAnswersByQuestion[question.id] || [];
      const correctAnswers = question.answers.filter((a) => a.isCorrect).map((a, index) => index);

      if (JSON.stringify(userAnswers.sort()) === JSON.stringify(correctAnswers.sort())) {
        correctAnswersCount++;
      }
    });

    const isAllCorrect = correctAnswersCount === selectedQuiz.length;

    if (isAllCorrect) {
      // Hiển thị thông báo chúc mừng
      alert("Chúc mừng bạn đã hoàn thành 100% câu hỏi.");

      // Chuyển hướng sau một khoảng thời gian ngắn
      setTimeout(() => {
        handleVideoEnd(); // Hàm này nên được cập nhật để chuyển đến bài học tiếp theo
      }, 2000); // Đợi 2 giây trước khi chuyển hướng
    } else {
      // Hiển thị thông báo lỗi
      alert(`Bạn đã trả lời sai ${selectedQuiz.length - correctAnswersCount} câu hỏi. Vui lòng xem lại.`);
    }
  };

  const isAllQuestionsAnswered = () => {
    return selectedQuiz.every(question =>
      selectedAnswersByQuestion.hasOwnProperty(question.id)
    );
  };



  return (
    <>
      <div className="CourseVideo">
        <div className="Header">
          <div className="directional">
            <div className="return">
              <div className="ChevronLeft" onClick={handleGoBack}>
                <ChevronLeft
                  width={28}
                  height={28}
                  fill="#fff"
                  className="icon-link"
                />
                <p>Trở lại</p>
              </div>
            </div>

              <div className="name_course">
                <p>{CourseDoc.name}</p>
              </div>
          </div>
          <div className="progress">
            <strong>
              {ProgressData && ProgressData.course_info
                ? `${Math.round(ProgressData.course_info.progress * 100)}%`
                : 'N/A'}
            </strong>
            <p>
              {ProgressData && ProgressData.course_info
                ? `${ProgressData.course_info.totalLessons.current}/${ProgressData.course_info.totalLessons.total} bài học`
                : 'N/A'}
            </p>
          </div>


        </div>

        <div className="Content_CourseVideo">
          <div className="CourseVideo_Left">
            {selectedVideo && (
              <div className="video">
                <VideoWrapper>
                  <div>
                    <ReactPlayer
                      url={videoURL}
                      width="100%"
                      height="100%"
                      controls={true}
                      onEnded={handleVideoEnd}
                    />
                  </div>
                </VideoWrapper>
              </div>
            )}

            {selectedQuiz.length > 0 && (
              <div className="Quiz">
                <div className="QuizQuestions">
                  <div className="InputQuizQuestions">
                    {selectedQuiz.length > 0 && (
                      <>
                        {/* Display information about multiple/single correct answers */}
                        <p className="AnswerInfo">
                          {allowsMultipleCorrectAnswers
                            ? "Câu hỏi chọn được nhiều đáp án"
                            : "Câu hỏi chọn được 1 đáp án"}
                        </p>

                        <Input
                          className="InputQuestions"
                          type="text"
                          placeholder={selectedQuiz[questionIndex]?.question ? `${selectedQuiz[questionIndex].question}?` : ""}
                          disabled
                        />

                        <div className="Answer">
                          {selectedQuiz[questionIndex]?.answers?.map((answer, answerIndex) => (
                            <div
                              key={answerIndex}
                              className={`AnswerOption ${selectedAnswersByQuestion[selectedQuiz[questionIndex]?.id]?.includes(answerIndex)
                                ? "selected"
                                : ""
                                }`}
                              onClick={() => handleAnswerSelect(answerIndex, answer.isCorrect)}
                            >
                              <span className="AnswerLabel">
                                {String.fromCharCode(65 + answerIndex).toUpperCase()}.{" "}
                              </span>
                              <p
                                className={`InputAnswer ${selectedAnswersByQuestion[selectedQuiz[questionIndex]?.id]?.includes(answerIndex)
                                  ? "selected"
                                  : ""
                                  }`}
                              >
                                {answer.answer}
                              </p>
                            </div>
                          ))}

                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="ButtonGroup">
                  {questionIndex > 0 && (
                    <Button Class="back" text="Trở lại" onClick={handlePreviousQuestion}></Button>
                  )}
                  {questionIndex < selectedQuiz.length - 1 && (
                    <Button Class="continue" text="Tiếp tục" onClick={handleNextQuestion}></Button>
                  )}
                  {isAllQuestionsAnswered() && (
                    <Button
                      Class="save-answers"
                      text="Lưu Đáp Án"
                      onClick={handleSaveAnswers}
                    />
                  )}
                </div>

              </div>
            )}


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
                  <h1>{CourseDoc.name}</h1>
                  <p dangerouslySetInnerHTML={{ __html: CourseDoc.content }}>

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
                    <Dropdown
                      SectionDoc={sortedSectionDoc}
                      handleSelectLesson={handleLessonSelect}
                      completedLessons={completedLessons}
                      setCompletedLessons={setCompletedLessons}
                      defaultOpen={true} // Thêm prop defaultOpen
                      courseId={courseId}
                      progressData={ProgressData}// Truyền courseId


                    />
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
          <div className="knot" onClick={handlePreviousLesson}>
            <ChevronLeft width={28} height={28} fill="#FF6636" className="icon-link" />
            <Button
              text="Bài trước"
              Class="Button"
              disabled={isFirstLesson() || !isPreviousLessonCompleted()}
            />

          </div>
          <div className="knot" onClick={handleNextLesson}>
            <Button
              text="Bài sau"
              Class="Button"
              disabled={isLastLesson() || !isNextLessonCompleted()}
            />
            <ChevronRight width={28} height={28} fill="#FF6636" className="icon-link" />
          </div>
        </div>
      </div>

    </>
  );
};

export default CourseVideo;
