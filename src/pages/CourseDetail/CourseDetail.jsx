import classNames from "classnames";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
import { includes, times, cloneDeep, isEmpty } from "lodash";
import DetailCart from "../../components/Card/DetailCard"
import Vecter from "../../components/commom/icons/Vector"
import Button from "../../components/button/Button";
import Arcordition from "../../components/Dropdown/Arcordion";
import CourseSlide from "../../components/Swiper/CourseSlide";
const data = [
    {
        image: "/course.png",
        category: "Marketing",
        cateId: 1,
        price: 299000,
        name: "Khóa học Thiết kế đồ họa cơ bản",
        rating: 4.5,
        joiner: 150,
    },
    {
        image: "/course.png",
        category: "Lập trình",
        cateId: 2,
        price: 499000,
        name: "Khóa học Lập trình web JavaScript",
        rating: 4.8,
        joiner: 200,
    },
    {
        image: "/course.png",
        category: "Thiết kế đồ họa",
        cateId: 3,
        price: 0,
        name: "Khóa học Quản lý doanh nghiệp",
        rating: 4.2,
        joiner: 120,
    },
    {
        image: "/course.png",
        category: "Ngôn ngữ",
        cateId: 4,
        price: 799000,
        name: "Khóa học Quản lý doanh nghiệp",
        rating: 4.2,
        joiner: 120,
    },
    {
        image: "/course.png",
        category: "Tài chính",
        cateId: 5,
        price: 799000,
        name: "Khóa học Quản lý doanh nghiệp",
        rating: 4.2,
        joiner: 120,
    },
    {
        image: "/course.png",
        category: "Photography",
        cateId: 6,
        price: 0,
        name: "Khóa học Quản lý doanh nghiệp",
        rating: 4.2,
        joiner: 120,
    },
];
const course = [
    {
        title: "1. Giới thiệu",
        content: [
            {
                title: "Em những lúc say anh hay thường nghĩ ",
                duration: "20:50",
            },
            {
                title: "Day 1 Goals: what we will make by the end of the day",
                duration: "40:10",
            },
        ],
        totalLesson: {},
    },
    {
        title: "2. Giới thiệu",
        content: [
            {
                title: "Giới thiệu khoá học",
                duration: "10:26",
            },
        ],
    },
    {
        title: "3. Giới thiệu",
        content: [
            {
                title: "Giới thiệu khoá học",
                duration: "01:12:12",
            },
        ],
    },
    {
        title: "4. Giới thiệu",
        content: [
            {
                title: "Giới thiệu khoá học",
                duration: "40:10",
            },
        ],
    },
];
course.map((item) => {
    item.lessons = item.content.length;
});
const totalSection = course.reduce((total, item) => {
    return total + item.content.length;
}, 0);
const section = course.length;

let totalDurationInSeconds = 0;

course.map((item) => {
    item.content.map((lesson) => {
        if (lesson.duration) {
            const durationParts = lesson.duration.split(":");
            if (durationParts.length === 2) {
                const minutes = parseInt(durationParts[0], 10);
                const seconds = parseInt(durationParts[1], 10);
                totalDurationInSeconds += minutes * 60 + seconds;
            }
        }
    });
});
function formatDuration(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedDuration = `${hours} giờ ${minutes} phút ${seconds} giây`;
    return formattedDuration;
}

const formattedTotalDuration = formatDuration(totalDurationInSeconds);



export default function CourseDetail(props) {
    const [active, setActive] = useState([]);
    const [isBoxCro, setIsBoxCro] = useState(true);

    const handleScroll = () => {
        const element = document.getElementById('box-list-course');
        const triggerPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (triggerPosition <= viewportHeight) {
            setIsBoxCro(false);
        } else {
            setIsBoxCro(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className="px-20">
                <div className="relative justify-between grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8 md:col-span-12 relative  ">
                        <div class="text-sm breadcrumbs py-5">
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>Documents</a></li>
                                <li>Add Document</li>
                            </ul>
                        </div>
                        <div className="">
                            <img className="w-full h-[420px] rounded-xl" src="/course.png" alt="" />
                            <div className="absolute inline-flex items-end z-10 mt-[-50px] pl-20">
                                <img className="w-[100px] h-[100px] border-8 border-white rounded-lg" src="/course.png" alt="" />
                                <div className="flex pl-5 items-baseline ">
                                    <p className="text-[20px] font-semibold pr-2 ">Edusix</p>
                                    <Vecter
                                        width={16}
                                        height={16}
                                        fill="#1B74E4"
                                    ></Vecter>
                                </div>
                            </div>
                        </div>
                        <div className="py-20">
                            <p className="font-semibold text-[36px] pb-2">Lập trình cơ bản</p>
                            <p className="font-medium text-[16px] text-[#8d8d8d]">
                                Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu.
                                Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn cơ của lập trình,
                                giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành một lập trình viên.
                            </p>
                        </div>

                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <Arcordition />
                            </div>
                        </div>

                    </div>
                    <div id="box"
                        className={`${isBoxCro ? 'pt-[60px] fixed right-20 bottom-[-20]' : 'pt-[60px] absolute right-0 bottom-0 '
                            }`} >
                        <DetailCart></DetailCart>
                    </div>
                </div>
                <div id="box-list-course" className="lg:col-span-4 md:col-span-12  border-t border-gray-300 my-20">
                    <div className="flex justify-between items-end py-10 ">
                        <p className="font-semibold text-[32px]">Các khóa học liên quan</p>
                        <Button
                            text="Xem thêm"
                            Class={"text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6"}
                        ></Button>
                    </div>
                    <div className="">
                        <CourseSlide />
                    </div>
                </div>
            </div >
        </>
    );
}