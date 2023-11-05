// import React, { useState, useRef, useEffect } from "react";
// import Input from "../../components/input/Input";
// import Button from "../../components/button/Button";
// import Vector from '../../components/commom/icons/Vector';
import Vecter from "../../components/commom/icons/Vector";

const BlogDetail = () => {
  return (
    <div className="grid grid-cols-12 gap-6 px-10 lg:px-20 md:px-16 sm:px-10">
      <div className="col-span-12">
        <div className="py-10 text-sm breadcrumbs">
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
        <div className="flex flex-col justify-between items-center gap-4">
          <div className="flex gap-4 items-center">
            <p className="text-[16px] font-medium text-[#ff6636]">Lập trình</p>
            <div className="w-1 h-1 rounded-full bg-[#ff6636]"></div>
            <p className="text-[16px] font-medium text-[#ff6636]">7 phút đọc</p>
          </div>
          <p className="text-[36px] font-semibold">
            Cách chỉnh theme Oh-my-posh cho Powershell
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2 ">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/398172733_122146369754011255_5722197874726182698_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=17dIm6bGit8AX-uEtn_&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfDGkqB1bliy9K6rl0uE8s-w9Nr4PyXrPpz0L2rDRDUL-Q&oe=6545C534" />
                </div>
              </div>
              <p className="text-[16px] font-medium text-[#8d8d8d]">Edusix</p>
              <Vecter width={14} height={14} fill="#1B74E4"></Vecter>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#8d8d8d]"></div>
            <p className="text-[16px] font-medium text-[#8d8d8d]">10-10-2002</p>
          </div>
        </div>
        <div className="py-10">
          <p className="text-[16px]">
            Nội dung ở đây. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Magni maiores nam consequatur corporis consectetur repellendus
            deleniti vel perspiciatis molestias dolore dolores eos dolorem
            voluptate possimus ut tempore, minus cumque? Amet!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
