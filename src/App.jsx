import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

//||Components
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import NoPage from "./pages/NoPage/NoPage";
import CourseDetail from "./pages/CourseDetail/CourseDetail"
import CourseVideo from "./pages/CourseVideo/CourseVideo"
import Course from "./pages/Course/Course"
// import Login from "./pages/Login/Login";
//||Components
function App() {


  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/course-detail" element={<CourseDetail />} />
            <Route path="/course" element={<Course />} />
          </Route>
          <Route path="/course-video" element={<CourseVideo />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App
