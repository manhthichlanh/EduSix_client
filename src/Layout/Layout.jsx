import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";
export default function Layout() {
  return (
    <div className="bg-white overflow-hidden ">
      <div className="z-10 fixed w-full">
        <Header></Header>
      </div>
      <div className="px-6 md:px-6 lg:px-20 overflow-y-auto" >
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

    </div>
  );
}
