import { useState, useEffect } from "react";
import DetailCart from "../../components/Card/DetailCard";
import Vecter from "../../components/commom/icons/Vector";
import Button from "../../components/button/Button";
import Arcordition from "../../components/Dropdown/Arcordion";
import CourseSlide from "../../components/Swiper/CourseSlide";
import Input from "../../components/input/Input"
import DropdownCheckbox from "../../components/Dropdown/DropdownCheckbox";
export default function CourseDetail() {
    return (
        <>
            <div className="w-full">
                <div className="grid grid-cols-12 gap-6 bg-[url('images/bg.png')] px-6 lg:px-20 md:px-6 sm:px-6  ">
                    <div className="md:col-span-6 sm:col-span-12 col-span-12 py-10">
                        <div className="text-sm breadcrumbs pb-6">
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
                        <p className="text-[32px] font-bold leading-10 pb-6">Tiến tới thành công với khóa học trực tuyến tại <span className="text-[#ff6636]">Edusix</span> </p>
                        <p className="text-[#333333]">Khóa học của chúng tôi được thiết kế để phù hợp với mọi người, vì vậy dù bạn là người mới bắt đầu hay đã có kinh nghiệm, bạn đều có thể tìm thấy khóa học phù hợp với mình.</p>
                    </div>
                    <div className="col-span-2"></div>
                    <div className=" hidden col-span-4 md:block">
                        <img src="/images/bg-course.png" alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6 pt-20 px-20">
                    <div className="col-span-6">
                        <p className="text-[32px] font-semibold">Các khóa học tại <span className="text-[#f66636]">Ediusix</span></p>
                    </div>
                    <div className="col-span-6">
                        {/* <Input
                        type={"text"}
                        placeholder={"Tìm kiếm khóa học"}
                        className="text-[16px] py-4 px-4 border rounded-lg font-medium border-solid-#e8e8e8"
                        /> */}

                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6 py-6 px-20">
                    <div className="col-span-3">
                    <DropdownCheckbox/>
                    </div>
                    <div className="col-span-9"></div>
                </div>
            </div>
        </>
    );
}
