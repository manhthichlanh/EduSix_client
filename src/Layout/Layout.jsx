import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";
export default function Layout() {
  return (
    <div className="overflow-hidden bg-white ">
      <div className="fixed z-50 w-full ">
        <Header></Header>
      </div>
      <div className="px-6 pt-20 overflow-y-auto md:px-12 lg:px-20 xs:px-8">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
