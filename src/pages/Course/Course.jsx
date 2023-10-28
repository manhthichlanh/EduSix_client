import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import DropdownCheckbox from "../../components/Dropdown/DropdownCheckbox";
import Search from "../../components/commom/icons/Search"
import Input from '../../components/input/Input';
const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
]
export default function CourseDetail() {
    const [selected, setSelected] = useState(people[0])
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
                    <div className="col-span-6 flex">
                        <div className="w-full pr-6">
                            <div class="relative">
                                <Input
                                type={"text"}
                                placeholder={"Search..."}
                                className={"text-[16px] leading-6 border w-full rounded-lg border-gray-200 py-3 px-3 hover:border-gray-300 focus:outline-none focus:border-[#ff6636] transition-colors "}
                                />
                                <button class="block w-8 h-8 my-auto text-center absolute top-2 right-2">
                                    <Search width={20} height={20} />
                                </button>
                            </div>
                        </div>
                        <div className="flex w-full items-center">
                            <p className="pr-4">Lọc theo:</p>
                            <select className="w-full border border-gray-300 text-gray-900 text-[16px] rounded-[8px] focus:border-blue-500 block py-3 px-3 ">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6 py-6 px-20">
                    <div className="col-span-3">
                        <DropdownCheckbox />
                    </div>
                    <div className="col-span-9"></div>
                </div>
            </div>
        </>
    );
}
