// import classNames from "classnames";

// import PlayCircleFill from "../components/commom/icons/PlayCircleFill";
import StarFill from "../components/commom/icons/StarFill";

export default function Footer() {
  return (
    <footer className="px-20 py-14 bg-base-200 text-base-content">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-4">
        <aside className="col-span-5 mb-4">
          <img className="w-40 mb-2" src="/images/logo.png" alt="" />
          <p className="max-w-[450px] mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            quam saepe vitae sequi incidunt ex, soluta totam exercitationem
            eveniet quidem eius a odio velit. Cupiditate, optio! Iusto facilis
            incidunt praesentium!
          </p>
          <div className="flex items-center gap-4">
            {/* <Instagram className="mr-2" width={32} height={32}></Instagram>
          <Facebook className="mr-2" width={32} height={32}></Facebook>
          <Linkedin className="mr-2" width={32} height={32}></Linkedin>
          <Twitter width={32} height={32}></Twitter> */}
            <StarFill
              width={20}
              height={20}
              className=" stroke-[#FD8E1F] fill-[#FD8E1F]"
            ></StarFill>
            <StarFill
              width={20}
              height={20}
              className=" stroke-[#FD8E1F] fill-[#FD8E1F]"
            ></StarFill>
            <StarFill
              width={20}
              height={20}
              className=" stroke-[#FD8E1F] fill-[#FD8E1F]"
            ></StarFill>
            <StarFill
              width={20}
              height={20}
              className=" stroke-[#FD8E1F] fill-[#FD8E1F]"
            ></StarFill>
          </div>
        </aside>
        <div className="col-span-7">
          <div className="grid gap-3 grid-col-1 lg:grid-cols-4 sm:grid-cols-2">
            <nav className="flex flex-col gap-2">
              <header className="footer-title">Về Edusix</header>
              <a className="link link-hover">Trang chủ</a>
              <a className="link link-hover">Khóa học</a>
              <a className="link link-hover">Blog</a>
              <a className="link link-hover">Giới thiệu</a>
            </nav>

            <nav className="flex flex-col gap-2 ">
              <header className="footer-title">Cộng đồng</header>
              <a className="link link-hover">Điều khoản</a>
              <a className="link link-hover">Chính sách bảo mật</a>
              <a className="link link-hover">Cài đặt Cookie</a>
            </nav>

            <nav className="flex flex-col gap-2 ">
              <header className="footer-title">Tài nguyên</header>
              <a className="link link-hover">Ủng hộ</a>
              <a className="link link-hover">Cập nhật mới nhất</a>
              <a className="link link-hover">Quản lý</a>
              <a className="link link-hover">Đơn vị liên kết</a>
            </nav>

            <nav className="flex flex-col gap-2 ">
              <header className="footer-title">Liên hệ</header>
              <a className="link link-hover">SĐT: 0900284712</a>
              <a className="link link-hover">Email: edusix@gmail.com</a>
              <a className="link link-hover">Địa chỉ: TP. HCM</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="py-4 mt-6">
        <p className="w-full h-[1px] bg-gray-700"></p>
        <p className="mt-6">@2023 All right reserve</p>
      </div>
    </footer>
  );
}
