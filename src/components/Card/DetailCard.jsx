import Button from "../button/Button";
import VideoPlay from "../commom/icons/VideoPlay";
import Clock from "./../commom/icons/Clock";
import BatteryEmpty from "./../commom/icons/BatteryEmpty";
import Award from "./../commom/icons/Award";
import Monitor from "../commom/icons/Monitor";

const DetailCard = ( props ) => {
  const {data} = props
  const price = data.data.course_price;
  return (
    <div className="rounded-lg w-full max-w-[430px] shadow-xl px-8 py-6 select-none">
      <div className="flex flex-col items-center gap-3">
        <p className="text-xl font-bold text-black">Gói cao cấp</p>
        <div className="flex items-center gap-2">
            {price ? (
              <p className="text-[#F05123] font-medium text-[32px]">
              {price.toLocaleString("vi-VN") + "đ"}
            </p> 
            ):
            (
              <p className="text-[#F05123] font-medium text-[32px]">
              Miễn phí
            </p> 
            )}
        </div>
      </div>
      <span className="block w-full h-px my-4 bg-gray-200" />
      <div className="flex flex-col gap-5">
        <p className="text-lg font-semibold text-black text-opacity-90">
          Khóa này bao gồm
        </p>
        <div className="flex items-center gap-2">
          <Clock width={20} height={20}></Clock>
          <p className="text-[#8D8D8D]">
            Thời lượng{" "}
            <span className="font-medium text-black">10 giờ 29 phút</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <VideoPlay width={20} height={20}></VideoPlay>
          <p className="text-[#8D8D8D]">
            Tổng số <span className="font-medium text-black">138</span> bài học
          </p>
        </div>
        <div className="flex items-center gap-2">
          <BatteryEmpty width={20} height={20}></BatteryEmpty>
          <p className="text-[#8D8D8D]">Học mọi lúc, mọi nơi</p>
        </div>
        <div className="flex items-center gap-2">
          <Award width={20} height={20}></Award>
          <p className="text-[#8D8D8D]">Giấy chứng nhận</p>
        </div>
        <div className="flex items-center gap-2">
          <Monitor width={20} height={20}></Monitor>
          <p className="text-[#8D8D8D]">Truy cập được trên nhiều thiết bị</p>
        </div>
      </div>
      <div>
        <Button
          Class={
            "w-full rounded-lg bg-[#FFEEE8] p-3 mt-4 text-[#FF6636] font-medium text-lg"
          }
          text={"Mua ngay"}
        ></Button>
      </div>
    </div>
  );
};

export default DetailCard;
