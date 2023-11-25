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

  return (
    <div className="w-full bg-white">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl my-8 bg-white border-[1px] rounded-lg drop-shadow-md">
          <div className="flex flex-col gap-4 p-10">
            <p className="text-xl font-medium">Thanh toán</p>
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium">Tên khóa học</p>
              <Input
                type="text"
                className="w-full px-4 py-3 border rounded-lg outline-none"
                value={"This is course name"}
                disabled={true}
              ></Input>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="flex flex-col col-span-12 gap-2 md:col-span-6">
                <p className="text-base font-medium">Số tiền</p>
                <Input
                  type="number"
                  className="w-full px-4 py-3 border rounded-lg outline-none"
                  value={1234}
                  disabled={true}
                ></Input>
              </div>
              <div className="flex flex-col w-full col-span-12 gap-2 md:col-span-6">
                <p className="text-base font-medium">Ngày mua</p>
                <Input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg outline-none"
                  pattern="dd/MM/yyyy"
                  value={formattedDate}
                  disabled={true}
                ></Input>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-medium">Nội dung</p>
              <Input
                type="text"
                className="w-full px-4 py-3 border rounded-lg outline-none"
                value={"Thanh toán cho khóa học"}
                disabled={true}
              ></Input>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-medium">Phương thức thanh toán</p>
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
            <Button
              Class={classNames(
                "px-4 py-2 bg-[#004a9c] rounded-md transition",
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
    </div>
  );
}
