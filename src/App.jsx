import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

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
//||Components
function App() {


  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/course-detail" element={<CourseDetail />} />
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

export default App
