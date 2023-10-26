import Button from "../../components/button/Button";
import CourseSlide from "../../components/Swiper/CourseSlide";
import BlogCard from "../../components/Card/BlogCard" 
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 place-content-center bg-[#F6F7FE] px-20 py-20">
        <div className="col-span-6 ">
          <div className="text-[48px] font-bold">
            <p className="pb-6">Khóa học trực tuyến chất lượng cao tại <span className="text-[#FF6636]">Edusix</span></p>
            <p className="text-[16px] font-medium text-[#8d8d8d]">Khóa học của chúng tôi được thiết kế để phù hợp với mọi người, vì vậy dù bạn là người mới bắt đầu hay đã có kinh nghiệm, bạn đều có thể tìm thấy khóa học phù hợp với mình.</p>
          </div>
          <div className="flex pt-10">
            <Button
              text="Bạn muốn học gì?"
              Class={"text-[18px] text-gray-400 font-medium border-2 border-[#333333] py-[14px] px-6 rounded-[8px] leading-6"}
            ></Button>
            <Button
              text="Xem thêm"
              Class={"text-[18px] ml-6 text-white font-medium border-2 bg-[#333333] py-[14px] px-8 rounded-[8px] leading-6"}
            ></Button>
          </div>
          <div className="pt-10">
            <div className="flex pb-6">
              <Button
                text="MARKETING"
                Class={"text-[13px  mr-6 font-medium text-[#333333] py-3 bg-white px-4 rounded-[8px] leading-4"}
              ></Button>
              <Button
                text="LẬP TRÌNH"
                Class={"text-[13px mr-6 font-medium text-[#333333] py-3 bg-white px-4 rounded-[8px] leading-4"}
              ></Button>
              <Button
                text="PHOTOGRAPHY"
                Class={"text-[13px font-medium text-[#333333] py-3 bg-white px-4 rounded-[8px] leading-4"}
              ></Button>
            </div>
            <div className="flex">
              <Button
                text="NGÔN NGỮ"
                Class={"text-[13px mr-6 font-medium text-[#333333] py-3 bg-white px-4 rounded-[8px] leading-4"}
              ></Button>
              <Button
                text="THIẾT KẾ ĐỒ HỌA"
                Class={"text-[13px mr-6 font-medium text-[#333333] py-3 bg-white px-4 rounded-[8px] leading-4"}
              ></Button>
              <Button
                text="TÀI CHÍNH"
                Class={"text-[13px font-medium text-[#333333] py-3 bg-white px-4 rounded-[8px] leading-4"}
              ></Button>
            </div>
          </div>

        </div>
        <div className="col-span-6">
          <img className="" src="images/banner-home.png" alt="" />
        </div>
      </div>
      <div className="px-20">
        <div className="lg:col-span-4 md:col-span-12 my-20">
          <div className="flex justify-between items-end py-10 ">
            <p className="font-semibold text-[24px]">KHÓA HỌC NỔI BẬT</p>
            <Button
              text="Xem thêm"
              Class={"text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6 hover:shadow-xl"}
            ></Button>
          </div>
          <div className="">
            <CourseSlide />
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-12 my-20">
          <div className="flex justify-between items-end py-10 ">
            <p className="font-semibold text-[24px]">KHÓA HỌC NỔI BẬT</p>
            <Button
              text="Xem thêm"
              Class={"text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6 hover:shadow-xl"}
            ></Button>
          </div>
          <div className="gap-6 flex w-full">
            <div className="rounded-xl shadow-md py-10 w-full">
              <img className="pb-6 mx-auto" src="images/01.png" alt="" />
              <p className="text-4 text-center font-medium">Marketing</p>
            </div>
            <div className="rounded-xl shadow-md py-10 w-full">
              <img className="pb-6 mx-auto" src="images/02.png" alt="" />
              <p className="text-4 text-center font-medium">Marketing</p>
            </div>
            <div className="rounded-xl shadow-md py-10 w-full">
              <img className="pb-6 mx-auto" src="images/03.png" alt="" />
              <p className="text-4 text-center font-medium">Marketing</p>
            </div>
            <div className="rounded-xl shadow-md py-10 w-full">
              <img className="pb-6 mx-auto" src="images/04.png" alt="" />
              <p className="text-4 text-center font-medium">Marketing</p>
            </div>
            <div className="rounded-xl shadow-md py-10 w-full">
              <img className="pb-6 mx-auto" src="images/05.png" alt="" />
              <p className="text-4 text-center font-medium">Marketing</p>
            </div>
            <div className="rounded-xl shadow-md py-10 w-full">
              <img className="pb-6 mx-auto" src="images/06.png" alt="" />
              <p className="text-4 text-center font-medium">Marketing</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-12 my-20">
          <div className="flex justify-between items-end py-10 ">
            <p className="font-semibold text-[24px]">KHÓA HỌC MỚI NHẤT</p>
            <Button
              text="Xem thêm"
              Class={"text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6 hover:shadow-xl"}
            ></Button>
          </div>
          <div className="">
            <CourseSlide />
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-12 my-20">
          <div className="flex justify-between items-end py-10 ">
            <p className="font-semibold text-[24px]">KHÓA HỌC <span className="text-[#ff6636]">PHOTOGAPHY</span></p>
            <Button
              text="Xem thêm"
              Class={"text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6 hover:shadow-xl"}
            ></Button>
          </div>
          <div className="">
            <CourseSlide />
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-12 my-20">
          <div className="flex justify-between items-end py-10 ">
            <p className="font-semibold text-[24px]">BÀI VIẾT NỔI BẬT</p>
            <Button
              text="Xem thêm"
              Class={"text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6 hover:shadow-xl"}
            ></Button>
          </div>
          <div className="">
            {/* Blog  */}
          </div>
        </div>
      </div>

    </>
  );
}
