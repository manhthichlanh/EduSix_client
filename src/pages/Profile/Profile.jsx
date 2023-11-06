import React, { useRef, useState } from 'react';
import Button from '../../components/button/Button';
import { NavLink, Link } from "react-router-dom";
import Input from "../../components/input/Input"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function AccountProfile() {

    // Images
    const inputFileRef = useRef(null);
    const imageRef = useRef(null);

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            imageRef.current.src = event.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // menu
    const [menuItems, setMenuItems] = useState([
        { name: "Thông tin", href: "account-profile", current: true },
        { name: "Khóa học", href: "course-profile", current: false },
        { name: "Blog", href: "blog-profile", current: false },
        { name: "Lịch sử mua hàng", href: "history-profile", current: false },
    ]);

    const handleMenuItemClick = (index) => {
        const updatedMenuItems = menuItems.map((item, idx) => ({
            ...item,
            current: idx === index,
        }));
        setMenuItems(updatedMenuItems);
    };

    // Password
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

    const handleToggleOldPassword = () => {
        setShowOldPassword(!showOldPassword);
    };

    const handleToggleNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const handleToggleConfirmNewPassword = () => {
        setShowConfirmNewPassword(!showConfirmNewPassword);
    };
    return (
        <>
            <div className="grid grid-cols-12 gap-6 px-20">
                <div className="col-span-3 ">
                    <div className="flex flex-col justify-between items-center gap-[10px] bg-[#f8f8f8] py-8 rounded-xl">
                        <label htmlFor="fileInput" className="relative">
                            <img
                                ref={imageRef}
                                className="w-[60px] h-[60px] rounded-full cursor-pointer"
                                src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/398231042_289856434020365_193059190829890352_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kZiuWP8Dy5cAX-aM_S_&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfDGHf3OlWltUsFpGTUbm__WZ2zaslwiiCsnXG9F8yzXyw&oe=65483B6B"
                                alt=""
                                onClick={() => inputFileRef.current.click()} // Mở cửa sổ chọn tệp khi nhấp vào ảnh
                            />
                            <input
                                type="file"
                                accept="image/*"
                                id="fileInput"
                                ref={inputFileRef}
                                className="absolute bottom-0 right-0 opacity-0"
                                onChange={handleImageChange}
                            />
                            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                >
                                    <path
                                        d="M11.5 9.5C11.5 9.76522 11.3946 10.0196 11.2071 10.2071C11.0196 10.3946 10.7652 10.5 10.5 10.5H1.5C1.23478 10.5 0.98043 10.3946 0.792893 10.2071C0.605357 10.0196 0.5 9.76522 0.5 9.5V4C0.5 3.73478 0.605357 3.48043 0.792893 3.29289C0.98043 3.10536 1.23478 3 1.5 3H3.5L4.5 1.5H7.5L8.5 3H10.5C10.7652 3 11.0196 3.10536 11.2071 3.29289C11.3946 3.48043 11.5 3.73478 11.5 4V9.5Z"
                                        fill="#D7D7D7"
                                        stroke="#D7D7D7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6 8.5C7.10457 8.5 8 7.60457 8 6.5C8 5.39543 7.10457 4.5 6 4.5C4.89543 4.5 4 5.39543 4 6.5C4 7.60457 4.89543 8.5 6 8.5Z"
                                        fill="white"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </label>
                        <p className="text-[16px] font-medium">Ngô Thủy Đan</p>
                        <div className="h-[1px] w-full bg-[#e8e8e8] my-6"></div>
                        <div className="w-full text-[#333333]">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-[#ffeee8] border-l-4 border-[#FF6636]"
                                            : "border-l-4 border-[#f8f8f8] hover:bg-[#ffeee8] hover:border-l-4 hover:border-[#FF6636] focus:bg-[#ffeee8]",
                                        "w-full flex px-6 py-3 text-sm font-medium leading-6 "
                                    )}
                                    aria-current={item.current ? "page" : undefined}
                                    onClick={() => handleMenuItemClick(index)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-9">
                    <div className="">
                        <div className="pb-10">
                            <p className='mb-6 px-3 py-[10px] border-l-4 border-[#ff6636] text-[16px] text-[#ff6636] font-medium leading-6'>Thông tin</p>
                            <div className="flex gap-6 mb-6 ">
                                <div className="w-full">
                                    <p className='text-[16px] font-medium mb-2 ' >Nickname</p>
                                    <Input
                                        type={"text"}
                                        placeholder={"Nickname"}
                                        className={"w-full py-3 px-4 bg-[#fafafa]  rounded-lg focus:border-[#FF6636] border-2 outline-none border-[#e8e8e8]"}
                                    />
                                </div>
                                <div className=" w-full">
                                    <p className='text-[16px] font-medium mb-2 ' >Họ và tên</p>
                                    <Input
                                        type={"text"}
                                        placeholder={"Họ và tên"}
                                        className={"w-full py-3 px-4 bg-[#fafafa]  rounded-lg focus:border-[#FF6636] border-2 outline-none border-[#e8e8e8]"}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className=" w-full">
                                    <p className='text-[16px] font-medium mb-2 ' >Email</p>
                                    <Input
                                        type={"text"}
                                        placeholder={"Email"}
                                        className={"w-full py-3 px-4 bg-[#fafafa]  rounded-lg focus:border-[#FF6636] border-2 outline-none border-[#e8e8e8]"}
                                    />
                                </div>
                                <div className=" w-full">
                                    <p className='text-[16px] font-medium mb-2 ' >Điện thoại</p>
                                    <Input
                                        type={"text"}
                                        placeholder={"0930000***"}
                                        className={"w-full py-3 px-4 bg-[#fafafa]  rounded-lg focus:border-[#FF6636] border-2 outline-none border-[#e8e8e8]"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p className='mb-6 px-3 py-[10px] border-l-4 border-[#ff6636] text-[16px] text-[#ff6636] font-medium leading-6'>Đổi mật khẩu</p>
                            <div className="gap-6 mb-6 ">
                                <div className="w-full pb-6">
                                    <p className='text-[16px] font-medium mb-2'>Mật khẩu cũ</p>
                                    <div className="relative">
                                        <Input
                                            type={showOldPassword  ? "text" : "password"}
                                            value={oldPassword}
                                            onChange={(e) => setOldPassword(e.target.value)}
                                            className="w-full py-3 pl-4 pr-12 bg-[#fafafa] rounded-lg focus:border-[#FF6636] border-2 outline-none border-[#e8e8e8]"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleToggleOldPassword}
                                            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                                        >
                                            {showOldPassword ? <AiFillEyeInvisible className='w-5 h-5' /> : <AiFillEye className='w-5 h-5' />}
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full pb-6">
                                    <p className='text-[16px] font-medium mb-2'>Mật khẩu mới</p>
                                    <div className="relative">
                                        <Input
                                            type={showNewPassword ? "text" : "password"}
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            className="w-full py-3 pl-4 pr-12 bg-[#fafafa] rounded-lg focus:border-[#FF6636] border-2 outline-none border-[#e8e8e8]"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleToggleNewPassword}
                                            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                                        >
                                            {showNewPassword ? <AiFillEyeInvisible className='w-5 h-5' /> : <AiFillEye className='w-5 h-5' />}
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full pb-6">
                                    <p className='text-[16px] font-medium mb-2'>Mật lại mật khẩu mới</p>
                                    <div className="relative">
                                        <Input
                                            type={showConfirmNewPassword ? "text" : "password"}
                                            value={confirmNewPassword}
                                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                                            className="w-full py-3 pl-4 pr-12 bg-[#fafafa] rounded-lg focus:border-[#FF6636] border-2 outline-none border-[#e8e8e8]"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleToggleConfirmNewPassword}
                                            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                                        >
                                            {showConfirmNewPassword ? <AiFillEyeInvisible className='w-5 h-5' /> : <AiFillEye className='w-5 h-5' />}
                                        </button>
                                    </div>
                                </div>
                                <Button
                                    text={"Lưu mật khẩu"}
                                    Class={"px-6 py-3 text-[16px] text-white font-medium bg-[#ff6636] leading-6 rounded-md"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
