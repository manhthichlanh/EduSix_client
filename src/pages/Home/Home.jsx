import Button from "../../components/button/Button";
import Slider from "react-slick";
import CourseSlide from "../../components/Swiper/CourseSlide";
import BlogSlide from "../../components/Swiper/BlogSlide.";
import { useQuery } from "react-query";
import { apiServer } from "../../utils/http";
import { filter, map, orderBy, slice } from "lodash";
import CateSlide from "../../components/Swiper/CateSlide";
import Carousel from "../../components/Carousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import ChevronRight from "../../components/commom/icons/ChevronRight"; // Import ChevronRight icon
import ChevronLeft from "../../components/commom/icons/ChevronLeft"; // Import ChevronRight icon




const review = [
  {
    name: 'Ngo Dan',
    position: 'Project Manager',
    img: '/images/slider1.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima molestiae cupiditate laborum numquam nisi, molestias tenetur, nobis eveniet esse modi repellat, provident nihil eum quos dolorum libero. Numquam, quam.'
  },
  {
    name: 'Ngo Dan',
    position: 'Project Manager',
    img: '/images/slider1.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima molestiae cupiditate laborum numquam nisi, molestias tenetur, nobis eveniet esse modi repellat, provident nihil eum quos dolorum libero. Numquam, quam.'
  },
  {
    name: 'Ngo Dan',
    position: 'Project Manager',
    img: '/images/slider1.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima molestiae cupiditate laborum numquam nisi, molestias tenetur, nobis eveniet esse modi repellat, provident nihil eum quos dolorum libero. Numquam, quam.'
  },
  {
    name: 'Ngo Dan',
    position: 'Project Manager',
    img: '/images/slider1.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima molestiae cupiditate laborum numquam nisi, molestias tenetur, nobis eveniet esse modi repellat, provident nihil eum quos dolorum libero. Numquam, quam.'
  },
];

const categoryColors = [
  "#FF6633", "#FFB399", "#FF33FF", "#6666FF", "#B399FF",
  "#FF3366", "#99FF99", "#FF9933", "#FFCC33", "#FF9999"
];

const blog = [
  {
    id: 1,
    cateId: 1,
    image: "/course.png",
    title: "thinking: faker",
    comment: 1,
    category: "Marketing",
  },
  {
    id: 2,
    cateId: 2,
    image: "/course.png",
    title: "doing: fu*ker",
    comment: 1,
    category: "Lập trình",
  },
  {
    id: 3,
    cateId: 3,
    image: "/course.png",
    title: "Marketing",
    comment: 6,
    category: "Thiết kế đồ họa",
  },
  {
    id: 4,
    cateId: 4,
    image: "/course.png",
    title: "Marketing",
    comment: 20,
    category: "Ngôn ngữ",
  },
  {
    id: 5,
    cateId: 5,
    image: "/course.png",
    title: "Marketing",
    comment: 10,
    category: "Tài chính",
  },
  {
    id: 6,
    cateId: 6,
    image: "/course.png",
    title: "Marketing",
    comment: 10,
    category: "Photography",
  },
];
const getCategoryData = async () => {
  try {
    const response = await apiServer.get("/category");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching course data");
  }
};
const getCourseData = async () => {
  try {
    const response = await apiServer.get("/course");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching course data");
  }
};




export default function Home() {
  const { data: courseData } = useQuery("courseData", getCourseData);
  const { data: categoryData } = useQuery("categoryData", getCategoryData);
  // console.log(categoryData);
  const sortedByOustanding = courseData;
  const sortedByNewest = orderBy(
    slice(courseData, 0, 8),
    ["created_at"],
    ["desc"]
  );
  const sortedByMarketing = slice(
    filter(courseData, (course) => course.category_id === 2),
    0,
    8
  );
  const sortedByPrograming = slice(
    filter(courseData, (course) => course.category_id === 3),
    0,
    8
  );

  // const NextArrow = (props) => {
  //   const { onClick } = props;
  //   return (
  //     <div className="text-[#cecece] cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
  //       <FontAwesomeIcon icon={faChevronCircleRight} className="w-10 h-10" onClick={onClick} />
  //     </div>
  //   );
  // };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className=" absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 opacity-100 visible transition duration-300">
        <Button
          Class="rounded-full p-4 bg-white shadow-md hover:drop-shadow-lg"
          Icon={function Icon() {
            return (
              <ChevronLeft
                className="stroke-[#FD8E1F] fill-[#FD8E1F] transform rotate-180"
                height={24}
                width={24}
              ></ChevronLeft>
            );
          }}
        ></Button>
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className=" absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 opacity-100 visible transition duration-300">
        <Button
          Class="rounded-full p-4 bg-white shadow-md hover:drop-shadow-lg"
          Icon={function Icon() {
            return (
              <ChevronRight
                className="stroke-[#FD8E1F] fill-[#FD8E1F] transform rotate-180"
                height={24}
                width={24}
              ></ChevronRight>
            );
          }}
        ></Button>
      </div>
    );
  };
  
  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />  
  };

  return (
    <>
      <div className="w-full">
        {/* <div className="grid grid-cols-12 bg-[#F6F7FE] px-10 lg:px-20 md:px-16 sm:px-10 py-10 gap-4">
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
                    "text-[18px] text-white font-medium hover:shadow-xl bg-[#333333] px-6 py-3 rounded-[8px] leading- whitespace-nowrap"
                  }
                ></Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 pt-10">
              {map(categoryData, (item, index) => (
                <div className="" key={index}>
                  <Button
                    text={item.cate_name}
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
        </div> */}
        <Carousel></Carousel>
        {/* <div className="px-20 py-6 rounded-md border border-purple-700 ">
          <p className="text-[32px] font-semibold text-[#333333]">Chào mừng Ngô Thủy Đan</p>
        </div> */}
        <div className="px-10 lg:px-20 md:px-16 sm:px-10">
          <div className="my-20 lg:col-span-4 md:col-span-12">
            <div className="flex items-end justify-between py-10">
              <p className="font-semibold text-[24px]">KHÓA HỌC NỔI BẬT</p>
              <Button
                text="Xem thêm"
                Class={
                  "text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6 hover:shadow-xl"
                }
              ></Button>
            </div>
            <div className="">
              <CourseSlide
                prefixAction={"trending"}
                data={sortedByOustanding}
              />
            </div>
          </div>
          <div className="my-[100px] lg:col-span-4 md:col-span-12 ">
            <div className="flex items-end justify-between py-10">
              <p className="font-semibold text-[24px]">Danh mục</p>
            </div>
            <CateSlide data={categoryData} prefixAction={"cate"} />
          </div>

          {categoryData && categoryData.map((category, index) => (
            <div key={index} className="my-20 lg:col-span-4 md:col-span-12">
              <div className="flex items-end justify-between py-10 ">
                <p className="font-semibold text-[24px] uppercase">
                  Khóa học <span style={{ color: categoryColors[index % categoryColors.length] }}>{category.cate_name}</span>
                </p>
                <Button
                  text="Xem thêm"
                  Class={
                    "text-sm font-medium py-2 px-8 rounded-[4px] shadow-md leading-6 hover:shadow-xl whitespace-nowrap"
                  }
                ></Button>
              </div>
              <div className="">

                <CourseSlide
                  prefixAction={category.slug}
                  data={filter(courseData, (course) => course.category_id === category.category_id)}
                />
              </div>
            </div>
          ))}

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

            <BlogSlide data={blog} prefixAction={"blog"}></BlogSlide>
          </div>
        </div>

        <div className="px-20 py-20 bg-[#F6F7FE] mb-20">
          <div className=" text-center mb-10">
            <p className="text-[32px] font-medium pb-3 ">Khách hàng của chúng tôi nói gì?</p>
            <p className="text-[#6b6b6b] px-56">
              Khóa học của chúng tôi được thiết kế để phù hợp với mọi người,
              vì vậy dù bạn là người mới bắt đầu hay đã có kinh nghiệm, bạn
              đều có thể tìm thấy khóa học phù hợp với mình.</p>
          </div>
          <div>
            <Slider {...settings}>
              {review.map((d, index) => (
                  <div className=" bg-white rounded-lg p-6">
                    <p className="text-[#4E5566]">"{d.review}"</p>
                    <div className="flex pt-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        {/* Your avatar image or placeholder */}
                        <img
                          src={d.img}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-medium">{d.name}</p>
                        <p className="text-[14px] text-[#6b6b6b]">{d.position}</p>
                      </div>
                    </div>
                  </div>
           
              ))}
            </Slider>
          </div>
        </div>
        {/* <div className="grid grid-cols-12 gap-6 py-20  px-10 lg:px-20 md:px-16 sm:px-10 bg-[url('images/bg.png')]">
          <div className="col-span-12 my-auto lg:col-span-7 md:col-span-12 sm:col-span-12">
            <div className="pb-10">
              <p className="text-[40px] font-semibold leading-[48px] pb-4">
                Tham gia khóa học{" "}
                <span className="text-[#85A0FE]">miễn phí</span> tại nền tảng
                của chúng tôi
              </p>
              <p className="text-[#333333]">
                Khóa học của chúng tôi được thiết kế để phù hợp với mọi người,
                vì vậy dù bạn là người mới bắt đầu hay đã có kinh nghiệm, bạn
                đều có thể tìm thấy khóa học phù hợp với mình.
              </p>
            </div>

            <Button
              text="Đăng kí ngay"
              Class={
                "text-[-18px] font-medium bg-[#ff6636] px-8 py-4 text-white rounded-lg"
              }
            />
          </div>
          <div className="col-span-1"></div>
          <div className="hidden col-span-4 lg:block">
            <img className="" src="images/Saly.png" alt="" />
          </div>
        </div> */}
      </div>
    </>
  );
}
