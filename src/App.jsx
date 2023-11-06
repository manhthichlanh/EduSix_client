import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//||Components
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import NoPage from "./pages/NoPage/NoPage";
import CourseDetail from "./pages/CourseDetail/CourseDetail"
import CourseVideo from "./pages/CourseVideo/CourseVideo"
import Login from "./pages/Account/Login/Login";
import Register from "./pages/Account/Register/Register";
import ForgotPassword from "./pages/Account/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/Account/ResetPassword/ResetPassword";
import ConfirmOtp from "./pages/Account/ConfirmOTP/ConfirmOTP"
import Course from "./pages/Course/Course";
import CreateBLog from "./pages/CreateBlog/CreateBlog";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Account from "./pages/Setting/Account";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
// import Login from "./pages/Login/Login";
//||Components
function App() {
  return (
<<<<<<< HEAD


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/course-detail" element={<CourseDetail />} />
            <Route path="/course" element={<Course />} />
            <Route path="/about" element={<About />} />
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NoPage />} />
          <Route index element={<Home />} />
          <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/course" element={<Course />} />
          <Route path="/about" element={<About />} />
>>>>>>> cd09bb7cf88a63a3d99cae4db178444c5d77905c
          <Route path="/blog" element={<Blog />} />
          <Route path="/create-bLog" element={<CreateBLog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/account-profile" element={<Account />} />
          </Route>
          <Route path="/course-video" element={<CourseVideo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/confirm-otp" element={<ConfirmOtp />} />
        </Routes>
      </BrowserRouter>
  )

}
export default App;
