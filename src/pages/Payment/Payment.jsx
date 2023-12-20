import classNames from "classnames";
import Input from "../../components/input/Input";
import { map } from "lodash";
import Button from "./../../components/button/Button";

export default function Payment() {
  // const currentDay = format

  function format(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}/${month}/${year}`;
  }

  const date = new Date();
  const formattedDate = format(date);
  console.log(formattedDate); // Output: 13/11/2023

  const payment = [
    {
      id: 1,
      name: "Ứng dụng thanh toán hổ trợ VNPAY QR",
      image: "/images/vnpay-qr.svg",
      paymentMethod: "Tiền mặt",
      title: "Sản phẩm chất lượng cao",
    },
    {
      id: 2,
      name: "Thẻ nội địa và tài khoản ngân hàng",
      image: "/images/bank.svg",
      paymentMethod: "Chuyển khoản",
      title: "Sản phẩm giá rẻ",
    },
    {
      id: 3,
      name: "Thẻ thanh toán quốc tế",
      image: "/images/atm.svg",
      paymentMethod: "Thẻ tín dụng",
      title: "Sản phẩm mới nhất",
    },
    {
      id: 4,
      name: "Ví VNPAY",
      image: "/images/vi-vnpay.svg",
      paymentMethod: "Thẻ tín dụng",
      title: "Sản phẩm mới nhất",
    },
  ];
  const getCourseData = async () => {
    try {
      const response1 = await apiServer.get("/course");
      const course = response1.data;
      return course;
    } catch (error) {
      throw new Error("Error fetching course data");
    }
  };

  // const { data: courseData } = useQuery("courseData", getCourseData);
  // const {
  //   data: courseDetails,
  //   isError,
  //   isLoading,
  // } = useQuery(
  //   ["courseDetails", course_id],
  //   () => apiServer.get(`/course/${course_id}`),
  //   {
  //     enabled: !!course_id,
  //   }
  // );

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error fetching course details.</div>;
  // }

  // const { name, content, thumbnail, category_id } = courseDetails.data;

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-12 ">
        <div className="col-span-7 my-8 pl-20 pr-10 bg-white ">
          {/* <div className="flex flex-col gap-4 "> */}
          <div className="">
            <p className="text-xl font-medium pb-6">Thông tin đặt hàng</p>
            <div className="grid grid-cols-12 ">
              <div className="col-span-9">
                <div className="flex items-center">
                  <div className="w-[100px] h-[100px] overflow-hidden flex flex-grow-0 flex-shrink-0">
                    <img
                      className="object-cover w-full h-full"
                      src="images/About1.jpg"
                      alt=""
                    />
                  </div>
                  <p className="pl-3 text-[20px] font-semibold line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aspernatur optio quam architecto ullam temporibus? Impedit ad autem possimus, quidem recusandae, numquam vero pariatur dolorum assumenda doloremque cupiditate ex. Eaque.</p>
                </div> </div>
              <div className="col-span-3 flex items-center justify-end">
                <p className="text-[20px]">
                  {Number(1000000).toLocaleString("vi-VN") + "đ"}
                </p>
              </div>
            </div>
          </div>

          {/* <div className=" flex justify-between items-center text-base font-bold">
              <div className="flex items-center col-span-7">
                <div className="w-[100px] h-[100px] overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src="images/About1.jpg"
                    alt=""
                  />
                </div>
                <p className="pl-3 text-[24px] line-clamp-2">Tiếng việt c Tiếng việt c Tiếng việt c ơ bản Tiếng việt cơ bản Tiếng việtcơ bản Tiếng việt</p>
              </div>
              <p className="text-[20px]">
                {Number(1000000).toLocaleString("vi-VN") + "đ"}
              </p>
            </div> */}


          <div className="flex flex-col gap-3 pt-20">
            <p className="text-xl font-medium">Phương thức thanh toán</p>
            {map(payment, (item) => (
              <label
                key={item.id}
                className={classNames(
                  "flex items-center w-full gap-2 px-4 py-3 shadow-md",
                  "transition hover:shadow-lg"
                )}
              // onChange={()}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  id={item.id}
                  value={item.title}
                />
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-semibold leading-5">
                    {item.name}
                  </p>
                  <img src={item.image} alt="" />
                </div>
              </label>
            ))}
          </div>
          {/* 
          </div> */}
        </div>
        {/* <div className="col-span-1"></div> */}
        <div className="col-span-5 my-8 pr-20 pl-10 py-10 bg-[#fafafa]">
          <p className="text-[28px] font-medium pb-6">Tóm tắt</p>
          <div class="flex justify-between pb-4">
            <p class="text-left">Giá gốc:</p>
            <p className="text-right">
              {Number(100000).toLocaleString("vi-VN") + "đ"}
            </p>
          </div>
          <hr class="border-t border-gray-500 flex-grow pb-4" />
          <div class="flex justify-between font-bold pb-6">
            <p class="text-left">Tổng:</p>
            <p className="text-right">
              {Number(100000).toLocaleString("vi-VN") + "đ"}
            </p>
          </div>
          <p className="pb-6">Bằng việc hoàn tất giao dịch mua. Bạn đồng ý với <span className=" text-[#FF6636]">Điều khoản dịch vụ</span> này.</p>
          <Button
            Class={classNames(
              "px-4 py-3 w-full bg-[#FF6636] rounded-md transition",
              "text-base font-medium text-white",
              "hover:bg-opacity-70"
            )}
            text="Thanh toán"
            onClick={() => {
              console.log(payment.name);
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}
