import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";
export default function Layout() {
  return (
    <div className="overflow-hidden" data-theme="light">
      <div className="fixed z-50 w-full ">
        <Header></Header>
      </div>
      <div className="pt-20 overflow-y-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
