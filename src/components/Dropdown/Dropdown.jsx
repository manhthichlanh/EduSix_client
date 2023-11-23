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

export default function Dropdown({ SectionDoc, markLessonAsCompleted, handleSelectLesson, completedLessons, setCompletedLessons, courseId }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const lessonIdFromURL = searchParams.get("lessonId");

  // Automatically unlock the first lesson if no lessons are completed
 

  const handleLessonClick = (lesson) => {
    const lessonIndex = SectionDoc.flatMap(section => section.lessons).findIndex(l => l === lesson);
    if (completedLessons.includes(lesson.lesson_id) || lessonIndex === completedLessons.length) {
      handleSelectLesson(lesson);
      navigate(`/course-video?courseId=${courseId}&lessonId=${lesson.lesson_id}`);
    } else {
      alert("Please complete previous lessons to unlock this one.");
    }

  };

  const isLessonUnlocked = (lesson) => {
    const lessonIndex = SectionDoc.flatMap(section => section.lessons).findIndex(l => l === lesson);
    // Mở khóa bài học nếu tất cả các bài học trước nó đã hoàn thành
    return lessonIndex <= completedLessons.length;
  };
  

  return (
    <div className="w-full">
      {SectionDoc?.map((section, sectionIndex) => (
        <Disclosure key={sectionIndex}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={classNames(
                  "flex items-center justify-between w-full px-4 py-2 bg-[#F5F5F5] border-b",
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
                {section.lessons.map((lesson, lessonIndex) => (
                  <button
                    key={lessonIndex}
                    onClick={() => handleLessonClick(lesson)}
                    disabled={!isLessonUnlocked(lesson)}
                    className={classNames(
                      "w-full px-4 py-2 focus:bg-[#FCDCD3] relative group",
                      { "bg-[#FCDCD3]": lessonIdFromURL === lesson.lesson_id.toString() }
                    )}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex flex-col">
                        <p className="text-sm font-medium text-black">
                          {lesson.name}
                        </p>
                        <div className="flex items-center justify-start gap-1">
                          <p className="text-xs font-normal text-black text-opacity-60">
                            {lesson.duration} mins
                          </p>
                        </div>
                      </div>
                      {completedLessons.includes(lesson.lesson_id) ? (
                        <Vector
                          width={16}
                          height={16}
                          fill="#1F8354"
                          className="group-focus:block"
                        />
                      ) : lessonIndex === completedLessons.length ? (
                        <>
                         
                          <Pause
                            width={12}
                            height={12}
                            fill="#FF6636"
                            className="group-focus:hidden"
                           
                          />
                           <Pause
                            width={12}
                            height={12}
                            fill="#FF6636"
                            className="hidden group-focus:block"
                          />
                        </>
                      ) : (
                        <Lock
                          width={16}
                          height={16}
                          className="group-focus:hidden"
                        />
                      )}
                    </div>
                  </button>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
