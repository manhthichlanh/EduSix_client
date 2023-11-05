import classNames from "classnames";
import Input from "../../components/input/Input";
import { useState } from "react";

import Eye from "../../components/commom/icons/Eye";
import EyeSlashFill from "./../../components/commom/icons/EyeSlashFill";

function AccountProfile() {
  const [passwordVisibility, setPasswordVisibility] = useState([
    false,
    false,
    false,
  ]);

  const handleTogglePasswordVisibility = (index) => {
    const updatedPasswordVisibility = [...passwordVisibility];
    updatedPasswordVisibility[index] = !updatedPasswordVisibility[index];
    setPasswordVisibility(updatedPasswordVisibility);
  };

  return (
    <div className="grid grid-cols-12 mt-4 gap-6">
      <div className="col-span-12 md:col-span-6 ">
        <p className="text-base font-medium mb-2 text-black text-opacity-70">
          Họ và tên
        </p>
        <Input
          type={"text"}
          placeholder={"Họ và tên"}
          className={classNames(
            "w-full px-4 py-3 rounded-lg border-2 border-[#e8e8e8] outline-none bg-[#fafafa]",
            "text-black text-opacity-50 text-sm font-medium",
            "focus:border-[#FF6636]"
          )}
        />
      </div>
      <div className="col-span-12 md:col-span-6 ">
        <p className="text-base font-medium mb-2 text-black text-opacity-70">
          Nickname
        </p>
        <Input
          type={"text"}
          placeholder={"Nickname"}
          className={classNames(
            "w-full px-4 py-3 rounded-lg border-2 border-[#e8e8e8] outline-none bg-[#fafafa]",
            "text-black text-opacity-50 text-sm font-medium",
            "focus:border-[#FF6636]"
          )}
        />
      </div>
      <div className="col-span-12 md:col-span-6 ">
        <p className="text-base font-medium mb-2 text-black text-opacity-70">
          Email
        </p>
        <Input
          type={"email"}
          placeholder={"Email"}
          className={classNames(
            "w-full px-4 py-3 rounded-lg border-2 border-[#e8e8e8] outline-none bg-[#fafafa]",
            "text-black text-opacity-50 text-sm font-medium",
            "focus:border-[#FF6636]"
          )}
        />
      </div>
      <div className="col-span-12 md:col-span-6 ">
        <p className="text-base font-medium mb-2 text-black text-opacity-70">
          Số điện thoại
        </p>
        <Input
          type={"number"}
          placeholder={"Số điện thoại"}
          className={classNames(
            "w-full px-4 py-3 rounded-lg border-2 border-[#e8e8e8] outline-none bg-[#fafafa]",
            "text-black text-opacity-50 text-sm font-medium",
            "focus:border-[#FF6636]"
          )}
        />
      </div>
      <div className="col-span-12">
        <p className=" w-full px-3 py-[10px] border-l-4 border-[#ff6636] text-[16px] text-[#ff6636] font-medium leading-6">
          Mật khẩu
        </p>
      </div>

      <div className="md:col-span-6 col-span-12 flex flex-col gap-6">
        <div className="w-full">
          <p className="text-base font-medium mb-2 text-black text-opacity-70">
            Mật khẩu hiện tại
          </p>
          <div className="relative">
            <Input
              type={passwordVisibility[0] ? "text" : "password"}
              placeholder=""
              className={classNames(
                "w-full px-4 py-3 rounded-lg border-2 border-[#e8e8e8] outline-none bg-[#fafafa]",
                "text-black text-opacity-50 text-sm font-medium",
                "focus:border-[#FF6636]"
              )}
            />
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
              onClick={() => handleTogglePasswordVisibility(0)}
            >
              {passwordVisibility[0] ? (
                <EyeSlashFill
                  width={16}
                  height={16}
                  className="fill-black opacity-50"
                ></EyeSlashFill>
              ) : (
                <Eye
                  width={16}
                  height={16}
                  className="fill-black opacity-50"
                ></Eye>
              )}
            </button>
          </div>
        </div>

        <div className="w-full">
          <p className="text-base font-medium mb-2 text-black text-opacity-70">
            Mật khẩu mới
          </p>
          <div className="relative">
            <Input
              type={passwordVisibility[1] ? "text" : "password"}
              placeholder=""
              className={classNames(
                "w-full px-4 py-3 rounded-lg border-2 border-[#e8e8e8] outline-none bg-[#fafafa]",
                "text-black text-opacity-50 text-sm font-medium",
                "focus:border-[#FF6636]"
              )}
            />
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
              onClick={() => handleTogglePasswordVisibility(1)}
            >
              {passwordVisibility[1] ? (
                <EyeSlashFill
                  width={16}
                  height={16}
                  className="fill-black opacity-50"
                ></EyeSlashFill>
              ) : (
                <Eye
                  width={16}
                  height={16}
                  className="fill-black opacity-50"
                ></Eye>
              )}
            </button>
          </div>
        </div>

        <div className="w-full">
          <p className="text-base font-medium mb-2 text-black text-opacity-70">
            Xác nhận mật khẩu
          </p>
          <div className="relative">
            <Input
              type={passwordVisibility[2] ? "text" : "password"}
              placeholder=""
              className={classNames(
                "w-full px-4 py-3 rounded-lg border-2 border-[#e8e8e8] outline-none bg-[#fafafa]",
                "text-black text-opacity-50 text-sm font-medium",
                "focus.border-[#FF6636]"
              )}
            />
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
              onClick={() => handleTogglePasswordVisibility(2)}
            >
              {passwordVisibility[2] ? (
                <EyeSlashFill
                  width={16}
                  height={16}
                  className="fill-black opacity-50"
                ></EyeSlashFill>
              ) : (
                <Eye
                  width={16}
                  height={16}
                  className="fill-black opacity-50"
                ></Eye>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccountProfile;
