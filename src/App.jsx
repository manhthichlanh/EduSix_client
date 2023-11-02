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
import AccountProfile from "./pages/AccountProfile/AccountProfile";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
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
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/create-bLog" element={<CreateBLog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/account-profile" element={<AccountProfile />} />
        </Route>
        <Route path="/course-video" element={<CourseVideo />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
