<<<<<<< HEAD
import Instagram from "../components/commom/icons/Instagram";
import Facebook from "../components/commom/icons/Facebook";
import Linkedin from "../components/commom/icons/Linkedin";
import Twitter from "../components/commom/icons/Twitter";
export default function Footer(props) {
  return (
    <>
      <footer className="px-20 pb-10 bg-[#f2f2f2] pt-14 ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-4">
          <aside className="col-span-5 mb-4">
            <img className="w-40 mb-2" src="/images/logo.png" alt="" />
            <p className="max-w-[400px] mb-4 text-[#898E95]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi quam saepe vitae sequi incidunt ex, soluta totam
              exercitationem eveniet quidem eius a odio velit. Cupiditate,
              optio! Iusto facilis incidunt praesentium!
            </p>
            <div className="flex items-center gap-4">
              <Instagram className="" width={32} height={32}></Instagram>
              <Facebook className="" width={32} height={32}></Facebook>
              <Linkedin className="" width={32} height={32}></Linkedin>
              <Twitter width={32} height={32}></Twitter>
            </div>
          </aside>
          <div className="col-span-7">
            <div className="grid gap-3 grid-col-1 lg:grid-cols-4 sm:grid-cols-2">
              <nav className="flex flex-col gap-2">
                <header className="footer-title text-[#1F2937]">
                  Về Edusix
                </header>
                <a className="link link-hover text-[#898E95]">Trang chủ</a>
                <a className="link link-hover text-[#898E95]">Khóa học</a>
                <a className="link link-hover text-[#898E95]">Blog</a>
                <a className="link link-hover text-[#898E95]">Giới thiệu</a>
              </nav>

              <nav className="flex flex-col gap-2 ">
                <header className="footer-title text-[#1F2937]">
                  Cộng đồng
                </header>
                <a className="link link-hover text-[#898E95]">Điều khoản</a>
                <a className="link link-hover text-[#898E95]">
                  Chính sách bảo mật
                </a>
                <a className="link link-hover text-[#898E95]">Cài đặt Cookie</a>
              </nav>
=======
import Instagram from '../components/commom/icons/Instagram'
import Facebook from '../components/commom/icons/Facebook'
import Linkedin from '../components/commom/icons/Linkedin'
import Twitter from '../components/commom/icons/Twitter'
export default function Footer(props) {
    return (
        <>
            <footer className="px-20 py-14 bg-base-200 text-base-content">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-4">
                    <aside className="col-span-5 mb-4">
                        <img className="w-40 mb-2" src="/images/logo.png" alt="" />
                        <p className="max-w-[400px] mb-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
                            quam saepe vitae sequi incidunt ex, soluta totam exercitationem
                            eveniet quidem eius a odio velit. Cupiditate, optio! Iusto facilis
                            incidunt praesentium!
                        </p>
                        <div className="flex items-center gap-4">
                            <Instagram className="mr-2" width={32} height={32}></Instagram>
                            <Facebook className="mr-2" width={32} height={32}></Facebook>
                            <Linkedin className="mr-2" width={32} height={32}></Linkedin>
                            <Twitter width={32} height={32}></Twitter>
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
>>>>>>> 25b6712a5d6e73c2e36b7d5b6630d5d6b49c7a16

              <nav className="flex flex-col gap-2">
                <header className="footer-title text-[#1F2937]">
                  Tài nguyên
                </header>
                <a className="link link-hover text-[#898E95]">Ủng hộ</a>
                <a className="link link-hover text-[#898E95]">
                  Cập nhật mới nhất
                </a>
                <a className="link link-hover text-[#898E95]">Quản lý</a>
                <a className="link link-hover text-[#898E95]">
                  Đơn vị liên kết
                </a>
              </nav>

              <nav className="flex flex-col gap-2">
                <header className="footer-title text-[#1F2937]">Liên hệ</header>
                <a className="link link-hover text-[#898E95]">
                  SĐT: 0900284712
                </a>
                <a className="link link-hover  text-[#898E95]">
                  Email: edusix@gmail.com
                </a>
                <a className="link link-hover text-[#898E95]">
                  Địa chỉ: TP. HCM
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="w-full h-[1px] bg-[#898E95]"></p>
          <p className="mt-4 text-[#898E95]">@2023 All right reserve</p>
        </div>
      </footer>
      {/* <footer className="p-10 footer bg-base-200 text-base-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer> */}
    </>
  );
}
