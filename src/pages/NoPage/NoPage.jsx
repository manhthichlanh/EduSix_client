// import React from "react";
import Button from "../../components/button/Button";
export default function NoPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="pt-0 pb-10">
          <img className="" src="images/404.png" alt="" />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-semibold text-2xl pb-10 text-[#333333]">
            RẤT TIẾT! KHÔNG TÌM THẤY TRANG
          </p>
          <Button
            text={"Quay lại trang chủ"}
            Class={
              "px-10 py-4 text-xl leading-6 bg-[#ff6636] text-white font-medium rounded-lg"
            }
          />
        </div>
      </div>
    </>
  );
}
