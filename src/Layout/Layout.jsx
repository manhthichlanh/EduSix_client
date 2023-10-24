import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Footer from "./Footer";
import "./Layout.css";
export default function Layout() {
  return (
    <div className="bg-white">
      <div className="max-h-full">
        <Header></Header>
        <Outlet></Outlet>
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
}
