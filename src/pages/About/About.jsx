import classNames from "classnames";
import Button from "../../components/button/Button";
import Mail from "../../components/commom/icons/Mail";
import Check from "../../components/commom/icons/Check";
import { map } from "lodash";
// import { classNames } from 'classnames';

const content = [
  { detail: "Giấy chứng nhận hoàn thành khóa học" },
  { detail: "Học các kĩ năng theo yêu cầu với hơn 100 video" },
  { detail: "Các khóa học được giảng dạy bỡi các chuyên gia" },
  {
    detail:
      "Học theo tốc độ riêng của bạn với quyền truy cập trên nhiều thiết bị",
  },
];

const team = [
  { name: "Lê Đình Đài", position: "CO-FOUNDER" },
  { name: "Văn Mạnh", position: "LEADER" },
  { name: "Thủy Đan", position: "Designer" },
  { name: "Huy Đức", position: "Member" },
  { name: "Văn Hải", position: "Member" },
  { name: "Đạt", position: "MEMBER" },
];
export default function About() {
  return (
    <div className="mt-10 pt-5">
      <div className="grid grid-cols-12 h-full mx-20">
        <div className="col-span-12 text-center lg:hidden block z-1">
          <p className="text-[#29281E] text-sm font-medium">Về chúng tôi</p>
          <p className="text-[#1F1D0D] text-[40px] font-bold">Giá trị Edusix</p>
        </div>
        <div
          className={classNames(
            "flex text-center col-span-12 order-2 justify-center",
            "lg:col-span-7 lg:py-20 lg:order-1 lg:text-left"
          )}
        >
          <div className="flex flex-col gap-10">
            <div className="lg:block hidden">
              <p className="text-[#29281E] text-sm font-medium">Về chúng tôi</p>
              <p className="text-[#1F1D0D] text-[40px] font-bold">
                Giá trị <span className="text-[#FF6636]">Edusix</span>
              </p>
            </div>
            <div className="flex flex-col gap-[10px] lg:text-left text-center">
              <p className="text-[#29281E] text-base text-opacity-80 font-medium">
                Cái tên EDUSIX bắt nguồn từ khái niệm tiếng Hy Lạp “τέλος” có
                nghĩa là mục đích cốt lõi. Mỗi tổ chức, doanh nghiệp một khi
                sinh ra đều đã mang trong mình những sứ mệnh, mục tiêu và những
                giá trị đẹp đẽ của riêng mình.
              </p>
              <p className="text-[#29281E] text-base text-opacity-80 font-medium">
                Bằng chuyên môn sáng tạo, năng lực thực thi và kể chuyện, chúng
                tôi hiện thực hóa những giải pháp, định hình những lộ trình và
                tạo tác những sản phẩm để đồng hành và hỗ trợ quá trình branding
                của doanh nghiệp bạn theo một lối đi đặc biệt nhất.
              </p>
            </div>
            <div className="flex lg:justify-start justify-center">
              <Button
                Class="px-8 py-4 bg-[#Ff6636] flex items-center gap-4 text-lg text-white font-medium rounded-lg"
                Icon={function Icon() {
                  return (
                    <Mail
                      width={20}
                      height={20}
                      className="fill-white stroke-white"
                    ></Mail>
                  );
                }}
                text="Liên hệ với chúng tôi"
              ></Button>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            "flex justify-center col-span-12 order-1 p-10",
            "lg:col-span-5 lg:justify-end lg:order-2 lg:p-0"
          )}
        >
          <div className="relative w-full lg:w-[450px] h-[360px] lg:h-[500px]">
            <div className="absolute top-0 right-0 w-[55%] h-[60%] md:w-[60%] md:h-[80%] lg:w-[326px] lg:h-[418px]">
              <img
                src="./images/About1.jpg"
                alt=""
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[55%] h-[60%] md:w-[50%] md:h-[65%] lg:w-[234px] lg:h-[300px]">
              <img
                src="./images/About2.jpg"
                alt=""
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 mx-20">
        <div className="block lg:hidden text-center">
          <p className="text-[#29281E] text-sm font-medium">
            Trọng tâm giá trị
          </p>
          <p className="text-[#1F1D0D] text-[40px] font-bold">
            Về chất lượng khóa học của
          </p>
          <p className="text-[#FF6636] text-[40px] font-bold">Edusix</p>
        </div>
        <div className="flex lg:items-center  flex-col gap-[70px] lg:flex-row ">
          <div className="order-1">
            <div className="w-full h-full">
              <div className="">
                <img
                  src="./images/About3.jpg"
                  alt=""
                  className="rounded-xl object-cover w-full h-full md:h-[380px]"
                />
              </div>
            </div>
          </div>
          <div className="order-2 flex flex-col gap-[60px]">
            <div className="lg:block hidden">
              <p className="text-[#29281E] text-sm font-medium">
                Trọng tâm giá trị
              </p>
              <p className="text-[#1F1D0D] text-[40px] font-bold">
                Về chất lượng khóa học của
              </p>
              <p className="text-[#FF6636] text-[40px] font-bold">Edusix</p>
            </div>
            <div className="flex flex-col gap-[10px] lg:text-left text-center">
              {map(content, (item, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <span>
                    <Check
                      width={20}
                      height={20}
                      className="stroke-[#FF6636]"
                    ></Check>
                  </span>
                  <p className="text-[#29281E] font-medium text-base">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-[url('/images/background.png')] bg-no-repeat bg-right py-20">
        <div className="grid grid-cols-12 h-full items-center gap-7 lg:mx-20 mx-10">
          <div className="col-span-12 text-center lg:hidden block z-1">
            <p className="text-[#29281E] text-sm font-medium">
              Tài sản đầy tự hào
            </p>
            <p className="text-[#1F1D0D] text-[40px] font-bold">
              Đội ngũ nhân sự
            </p>
          </div>
          <div
            className={classNames(
              "flex text-center col-span-12 order-2 justify-center",
              "lg:col-span-4 lg:py-20 lg:order-1 lg:text-left"
            )}
          >
            <div className="flex flex-col gap-10">
              <div className="lg:block hidden">
                <p className="text-[#29281E] text-sm font-medium">
                  Tài sản đầy tự hào
                </p>
                <p className="text-[#1F1D0D] text-[40px] font-bold">
                  Đội ngũ nhân sự
                </p>
              </div>
              <div className="flex flex-col gap-[10px] lg:text-left text-center">
                <p className="text-[#29281E] text-base text-opacity-80 font-medium">
                  Điều định hình nên sự sáng tạo và tính cách đặc thù của EDUSIX
                  chính là đội ngũ nhân sự - những con người EDUSIX.
                </p>
                <p className="text-[#29281E] text-base text-opacity-80 font-medium">
                  Phối trộn một cách kì lạ giữa những nghiêm túc chuyên môn,
                  những đam mê truy tầm kiến thức và những liên kết đầy sáng
                  tạo, những con người EDUSIX đã tự mình kể ra một câu chuyện văn
                  hóa công ty đậm đà và những sản phẩm đầy giá trị cho khách
                  hàng.
                </p>
              </div>
            </div>
          </div>

          <div
            className={classNames(
              "col-span-12 order-1 p-10",
              "lg:col-span-8 lg:order-3 lg:p-0"
            )}
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="lg:col-span-2 lg:block hidden"></div>
              <div className="lg:col-span-10 col-span-12">
                <div className="grid grid-cols-12 gap-4">
                  {map(team, (item, index) => (
                    <div
                      className="lg:col-span-4 md:col-span-6 col-span-12 border rounded-lg bg-white"
                      key={index}
                    >
                      <div className="w-full p-[10px]">
                        <div
                          to="/"
                          className="block w-full mb-4 overflow-hidden rounded"
                        >
                          <img
                            className="object-cover w-full h-full"
                            src="/course.png"
                            alt=""
                          />
                        </div>
                        <div className="flex items-center justify-between mt-[26px]">
                          <p className="text-[#3E3232] text-[13px] font-medium">
                            {item.name}
                          </p>
                          <p className="text-[#3E3232] text-opacity-70 text-xs font-normal">
                            {item.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
