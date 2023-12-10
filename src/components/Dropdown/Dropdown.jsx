import { Disclosure } from "@headlessui/react";
import ChevronUp from "../commom/icons/ChevronUp";
import classNames from "classnames";
import PlayCircleFill from "../commom/icons/PlayCircleFill";
import Vector from "../commom/icons/Vector";
import Pause from "../commom/icons/Pause";
import Lock from "../commom/icons/Lock";
import Quizz from "../commom/icons/Quizz";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Dropdown({
  SectionDoc,
  markLessonAsCompleted,
  progressData,
  handleSelectLesson,
  completedLessons,
  setCompletedLessons,
  courseId,
}) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const lessonIdFromURL = searchParams.get("lessonId");
  const [currentSection, setCurrentSection] = useState(0);
  const [alertShown, setAlertShown] = useState(false);
  console.log("Bài học nè:", progressData);

  const getAllLessons = () => SectionDoc.flatMap((section) => section.lessons);
  useEffect(() => {
    const allLessons = getAllLessons();
  
    if (!alertShown && completedLessons.length === 0) {
      const firstLesson = allLessons[0];
      handleLessonClick(firstLesson);
      setAlertShown(true);
    }
  
    // Get the lesson ID from the URL or local storage
    const initialLessonId = lessonIdFromURL || localStorage.getItem("currentLessonId");
  
    // Find the lesson based on the ID and navigate to it
    const initialLesson = allLessons.find((lesson) => lesson.lesson_id === initialLessonId);
    if (initialLesson) {
      handleLessonClick(initialLesson);
    }
  }, [alertShown, completedLessons, lessonIdFromURL]);
  const getLessonIndex = (lesson) =>
    getAllLessons().findIndex((l) => l === lesson);

 

  const handleLessonClick = (lesson) => {
    const allLessons = getAllLessons();

    const lessonIndex = getLessonIndex(lesson);
    const lessonProgress =
      progressData?.s_doc?.[0]?.section_progresses.find(
        (sectionProgress) => sectionProgress.section_id === lesson.section_id
      );

    console.log("Lesson Index:", lessonIndex);
    console.log("Lesson Progress:", lessonProgress);

    const isUnlocked = isLessonUnlocked(lesson, currentSection);

    if (isUnlocked) {
      handleSelectLesson(lesson);
      navigate(
        `/course-video?courseId=${courseId}&lessonId=${lesson.lesson_id}`
      );
    } else {
      // Show the alert only for lessons without the lock icon
      if (!isUnlocked) {
        alert("Please complete previous lessons to unlock this one.");
      }
    }

    const newSectionIndex = SectionDoc.findIndex(
      (section) => section.lessons.includes(lesson)
    );
    if (newSectionIndex !== -1 && newSectionIndex !== currentSection) {
      setCurrentSection(newSectionIndex);
    }

    // Save the current lesson ID to local storage
    localStorage.setItem("currentLessonId", lesson.lesson_id);
  };

  const isLessonUnlocked = (lesson, sectionIndex) => {
    const sectionProgress = progressData?.s_doc?.[0]?.section_progresses.find(
      (sectionProgress) => sectionProgress.section_id === lesson.section_id
    );

    if (sectionProgress) {
      const lessonProgress = sectionProgress.lesson_progresses.find(
        (lp) => lp.lesson_id === lesson.lesson_id
      );

      // Check if the lesson is locked (has is_lock property) and its value is false
      return !lessonProgress || lessonProgress.is_lock !== true;
    }

    // If sectionProgress is not found, default to unlocked
    return true;
  };

  return (
    <div className="w-full">
      {SectionDoc?.map((section, sectionIndex) => (
        <Disclosure key={sectionIndex}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={classNames(
                  "flex items-center justify-between w-full px-4 py-2 bg-[#F5F5F5] bg-zinc-100 border-b ",
                  "text-black text-sm font-medium",
                  "focus:outline-none",
                  "hover:bg-slate-200"
                )}
              >
                <div className="flex flex-col">
                  <span>{section.name}</span>
                  <div
                    className={classNames(
                      "flex items-center gap-1",
                      "text-black text-opacity-60 text-xs"
                    )}
                  >
                    <span>{section.lessons.length} lessons</span> |{" "}
                    <span>{section.totalTime} seconds</span>
                  </div>
                </div>
                <ChevronUp
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
                {section.lessons.map((lesson, lessonIndex) => {
                  const lessonProgress = progressData?.s_doc?.[0]?.section_progresses.find(
                    (sectionProgress) =>
                      sectionProgress.section_id === lesson.section_id
                  );
                  const lessonIsFinish = lessonProgress?.lesson_progresses?.find(
                    (lp) => lp.lesson_id === lesson.lesson_id
                  )?.is_finish;

                  const isUnlocked = isLessonUnlocked(lesson, sectionIndex);
                  const isCompleted =
                    lessonIsFinish || completedLessons.includes(lesson.lesson_id);

                  return (
                    <button
                      key={lessonIndex}
                      onClick={() => handleLessonClick(lesson)}
                      disabled={!isUnlocked}
                      style={{
                        backgroundColor: lessonIdFromURL === lesson.lesson_id.toString()
                          ? "#d1ffd3" // Replace with your desired background color for active lessons
                          : "",
                        opacity: !isUnlocked ? 0.5 : 1, // Set opacity for locked lessons
                      }}
                      className={classNames(
                        "w-full px-4 py-2 focus:bg-[#FCDCD3]  relative group bg-orange-100 my-0.5",
                        { "bg-[#FCDCD3]": lessonIdFromURL === lesson.lesson_id.toString() },
                        { "completed": isCompleted },
                        { "active": lessonIdFromURL === lesson.lesson_id.toString() }
                      )}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex flex-col">
                          <p className="text-sm font-medium text-orange-600">
                            {lesson.name}
                          </p>
                          <div className="flex items-center justify-start gap-1">
                            <p className="text-xs font-normal text-black text-opacity-60">
                              {lesson.duration} mins
                            </p>
                          </div>
                        </div>

                        {lessonIsFinish ? (
                          <Vector
                            width={16}
                            height={16}
                            fill="#1F8354"
                            className="group-focus:block"
                          />
                        ) : (
                          isUnlocked ? (
                            <Pause
                              width={12}
                              height={12}
                              fill="#FF6636"
                              className=""
                            />
                          ) : (
                            <Lock
                              width={12}
                              height={12}
                              fill="#000000"
                              className="group-focus:hidden"
                            />
                          )
                        )}
                      </div>
                    </button>
                  );
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
