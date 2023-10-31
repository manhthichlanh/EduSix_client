import Button from "../../components/button/Button";
import CateCard from "../../components/Card/CateCard";
import CourseSlide from "../../components/Swiper/CourseSlide";
import Input from "./../../components/input/Input";
import classNames from "classnames";
import BlogCard from "./../../components/Card/BlogCard";

const cate = [
  {
    id: 1,
    image: "images/05.png",
    cateName: "Marketing",
  },
  {
    id: 2,
    image: "images/01.png",
    cateName: "Lập trình",
  },
  {
    id: 3,
    image: "images/02.png",
    cateName: "Thiết kế đồ họa",
  },
  {
    id: 4,
    image: "images/06.png",
    cateName: "Ngôn ngữ",
  },
  {
    id: 5,
    image: "images/03.png",
    cateName: "Tài chính",
  },
  {
    id: 6,
    image: "images/04.png",
    cateName: "Photography",
  },
];

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

const blog = [
  {
    cateId: 1,
    image: "/course.png",
    title: "thinking: faker",
    comment: 1,
    category: "Marketing",
  },
  {
    cateId: 2,
    image: "/course.png",
    title: "doing: fu*ker",
    comment: 1,
    category: "Lập trình",
  },
  {
    cateId: 3,
    image: "/course.png",
    title: "Marketing",
    comment: 1,
    category: "Thiết kế đồ họa",
  },
];
const filterPhography = data.filter((item) => item.cateId === 6);

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-12 bg-[#F6F7FE] px-10 lg:px-20 md:px-16 sm:px-10 py-10 gap-4">
          <div className="col-span-12 md:col-span-6">
            <div className="text-[48px] font-bold">
              <p className="pb-6">
                Khóa học trực tuyến chất lượng cao tại{" "}
                <span className="text-[#FF6636]">Edusix</span>
              </p>
              <p className="text-[16px] font-medium text-[#8d8d8d]">
                Khóa học của chúng tôi được thiết kế để phù hợp với mọi người,
                vì vậy dù bạn là người mới bắt đầu hay đã có kinh nghiệm, bạn
                đều có thể tìm thấy khóa học phù hợp với mình.
              </p>
            </div>
            <div className="w-full pt-10">
              <div className="flex gap-6">
                <Input
                  type={"text"}
                  className="w-full px-6 py-3 text-[18px] bg-white border border-black rounded-lg outline-none leading-24"
                  placeholder={"Bạn muốn học gì?"}
                ></Input>
                <Button
                  text="Tìm kiếm"
                  Class={
                    "text-[18px] text-white font-medium bg-[#333333] px-6 py-3 rounded-[8px] leading- whitespace-nowrap"
                  }
                ></Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 pt-10">
              {cate?.map((cate, index) => (
                <div className="" key={index}>
                  <Button
                    text={cate.cateName}
                    Class={classNames(
                      "text-[13px] font-medium text-[#333333] leading-4 uppercase",
                      "px-8 py-4 bg-white rounded-lg transition",
                      "hover:text-white hover:bg-[#FF6636]"
                    )}
                  ></Button>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:col-span-6 md:block">
            <img className="" src="images/banner-home.png" alt="" />
          </div>
        </div>
        <div className="px-10 lg:px-20 md:px-16 sm:px-10">
          <div className="my-20 lg:col-span-4 md:col-span-12">
            <div className="flex items-end justify-between py-10 ">
              <p className="font-semibold text-[24px]">KHÓA HỌC NỔI BẬT</p>
              <Button
                text="Xem thêm"
                Class={
                  "text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6 hover:shadow-xl"
                }
              ></Button>
            </div>
            <div className="">
              <CourseSlide data={data} />
            </div>
          </div>
          <div className="my-[100px] lg:col-span-4 md:col-span-12 ">
            <div className="flex items-end justify-between py-10">
              <p className="font-semibold text-[24px]">Danh mục</p>
            </div>
            <div className="grid grid-cols-12 gap-6 lg:gap-6 md:gap-4">
              {cate?.map((cate, index) => (
                <CateCard
                  key={index}
                  image={cate.image}
                  cateName={cate.cateName}
                />
              ))}
            </div>
          </div>
          <div className="my-20 lg:col-span-4 md:col-span-12">
            <div className="flex items-end justify-between py-10 ">
              <p className="font-semibold text-[24px]">KHÓA HỌC MỚI NHẤT</p>
              <Button
                text="Xem thêm"
                Class={
                  "text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6 hover:shadow-xl"
                }
              ></Button>
            </div>
            <div className="">
              <CourseSlide data={data} />
            </div>
          </div>
          <div className="my-20 lg:col-span-4 md:col-span-12">
            <div className="flex items-end justify-between py-10 ">
              <p className="font-semibold text-[24px] uppercase">
                Khóa học <span className="text-[#882929]">Photography</span>
              </p>
              <Button
                text="Xem thêm"
                Class={
                  "text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6 hover:shadow-xl whitespace-nowrap"
                }
              ></Button>
            </div>
            <div className="">
              <CourseSlide data={filterPhography} />
            </div>
          </div>
          <div className="my-20 lg:col-span-4 md:col-span-12">
            <div className="flex items-end justify-between py-10 ">
              <p className="font-semibold text-[24px]">BÀI VIẾT NỔI BẬT</p>
              <Button
                text="Xem thêm"
                Class={
                  "text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6 hover:shadow-xl"
                }
              ></Button>
            </div>
            <BlogCard data={blog}></BlogCard>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 py-20  px-10 lg:px-20 md:px-16 sm:px-10 bg-[url('images/bg.png')]">
          <div className="lg:col-span-7 col-span-12 my-auto md:col-span-12 sm:col-span-12">
            <div className="pb-10">
              <p className="text-[40px] font-semibold leading-[48px] pb-4">Tham gia khóa học <span className="text-[#85A0FE]">miễn phí</span> tại nền tảng của chúng tôi</p>
              <p className="text-[#333333]">Khóa học của chúng tôi được thiết kế để phù hợp với mọi người, vì vậy dù bạn là người mới bắt đầu hay đã có kinh nghiệm, bạn đều có thể tìm thấy khóa học phù hợp với mình.</p>
            </div>

            <Button
              text="Đăng kí ngay"
              Class={"text-[-18px] font-medium bg-[#ff6636] px-8 py-4 text-white rounded-lg"}
            />
          </div>
          <div className="col-span-1"></div>
          <div className="hidden col-span-4 sm:block">
            <img className="" src="images/Saly.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
