import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//||Components
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import NoPage from "./pages/NoPage/NoPage";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import CourseVideo from "./pages/CourseVideo/CourseVideo";
import Course from "./pages/Course/Course";
import CreateBLog from "./pages/CreateBlog/CreateBlog";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Account from "./pages/Setting/Account";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Account/Login/Login";
import Register from "./pages/Account/Register/Register";
import ForgotPassword from "./pages/Account/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/Account/ResetPassword/ResetPassword";
import ConfirmOtp from "./pages/Account/ConfirmOTP/ConfirmOTP";
import AccountProfile from "./pages/Setting/Profile";
import AccountCourse from "./pages/Setting/Course";
import AccountBlog from "./pages/Setting/Blog";
import AccountPurchaseHistory from "./pages/Setting/History";
//||Components
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NoPage />} />
          <Route index element={<Home />} />
          <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/course" element={<Course />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/create-bLog" element={<CreateBLog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="account" element={<Account />}>
            <Route path="profile" element={<AccountProfile />} />
            <Route path="course" element={<AccountCourse />} />
            <Route path="blog" element={<AccountBlog />} />
            <Route
              path="purchase-history"
              element={<AccountPurchaseHistory />}
            />
          </Route>
        </Route>
        <Route path="/course-video" element={<CourseVideo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirm-otp" element={<ConfirmOtp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
