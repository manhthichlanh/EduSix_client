
import { NavLink } from "react-router-dom";
import "./CourseVideo.scss";
import ChevronLeft from "../../components/commom/icons/ChevronLeft";
import Check from "../../components/commom/icons/Check";
import Messages from "../../components/commom/icons/Messages";
import Arcordition from "../../components/Dropdown/Arcordion";
import Button from "../../components/button/Button";
import Footer from "../../Layout/Footer";
const CourseVideo = () => {
    

    const handleScrollToOverview = () => {
        const element = document.getElementById('overview-section'); // Get the element by id
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
            
        }
    };

    const handleScrollToQuestion = () => {
        const element = document.getElementById('question-section'); // Get the element by id
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
            
        }
    };

    const handleScrollToComments = () => {
        const element = document.getElementById('comments-section'); // Get the element by id
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
            
        }
    };
    return (
        <>
        <div className="CourseVideo">
            <div className="Header">
                <div className="directional">
                    <div className="return">
                        <NavLink to="#" >
                            <ChevronLeft width={20} height={20} fill="#fff" className="icon-link" />
                            <p>Trở lại</p>
                        </NavLink>
                    </div>
                    <div className="name_course">
                        <p>Lập trình C++ cơ bản, nâng cao</p>
                    </div>
                </div>
            </div>
            <div className="Content_CourseVideo">
                
            <div className="CourseVideo_Left">
                <div className="video">
                    
{/* <iframe className="custom-video" width="560" height="515" src="https://www.youtube.com/embed/T2CXv7J9Py0?si=R9xWVV7zBLHB6xN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                </div>
                <div className="mini_menu">
                        <NavLink onClick={handleScrollToOverview}>
                            <p>Tổng quan</p>
                        </NavLink>
                        <NavLink onClick={handleScrollToQuestion} >
                            <p>Câu hỏi</p>
                        </NavLink>
                        <NavLink onClick={handleScrollToComments} >
                            <p>Bình luận</p>
                        </NavLink>
                        <NavLink >
                            <p>Đánh giá</p>
                        </NavLink>
                </div>
                <div className="information">
                <div className="overview_CourseVideo" id="overview-section">
                    <h1>Lập trình C++ cơ bản, nâng cao</h1>
                    <p>Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành một lập trình viên.</p>
                </div>

                <div className="question_CourseVideo" id="question-section">
                    <h2>Bạn sẽ học được gì?</h2>
                    <div className="questionsmall">
                    <div className="eachquestion">
                        <div className="icon_Check">
                        <div className="icon_Check_1">
                    <Check width={20} height={20} fill="#fff" />
                    </div>
                    </div>
                    <div className="content_question">
                        <p>Biết cách cài đặt và tùy biến Windows Terminal</p>
                    </div>
                    </div>
                    <div className="eachquestion">
                        <div className="icon_Check">
                        <div className="icon_Check_1">
                    <Check width={20} height={20} fill="#fff" />
                    </div>
                    </div>
                    <div className="content_question">
                        <p>Biết cách cài đặt và tùy biến Windows Terminal</p>
                    </div>
                    </div>
                    <div className="eachquestion">
                        <div className="icon_Check">
                        <div className="icon_Check_1">
                    <Check width={20} height={20} fill="#fff" />
                    </div>
                    </div>
                    <div className="content_question">
                        <p>Biết cách cài đặt và tùy biến Windows Terminal</p>
                    </div>
                    </div>
                    <div className="eachquestion">
                        <div className="icon_Check">
                        <div className="icon_Check_1">
                    <Check width={20} height={20} fill="#fff" />
                    </div>
                    </div>
                    <div className="content_question">
                        <p>Biết cách cài đặt và tùy biến Windows Terminal</p>
                    </div>
                    </div>
                    <div className="eachquestion">
                        <div className="icon_Check">
                        <div className="icon_Check_1">
                    <Check width={20} height={20} fill="#fff" />
                    </div>
                    </div>
                    <div className="content_question">
                        <p>Biết cách cài đặt và tùy biến Windows Terminal</p>
                    </div>
                    </div>
                    <div className="eachquestion">
                        <div className="icon_Check">
                        <div className="icon_Check_1">
                    <Check width={20} height={20} fill="#fff" />
                    </div>
                    </div>
                    <div className="content_question">
                        <p>Biết cách cài đặt và tùy biến Windows Terminal</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="comment" id="comments-section">
                    <h2>Bình Luận</h2>
                    <div className="Content">
                        <div className="post_Comments">
                            <div className="avatar">
                                <img src="https://vsm.vn/wp-content/uploads/2022/04/nhung-mau-anh-avatar-nam-lam-dai-dien-facebook-dep-nhat-1.png" alt="" />
                            </div>
                            <div className="input_comments">
                            <Messages width={20} height={20} fill="#fff" className="icon_Messages" />
                                <input type="text" placeholder="Nhập bình luận..." />
                            </div>
                            <div className="Button_Comment">
                            <Button
                            text="Bình luận"
                           Class="Button"
                            ></Button>
                            </div>
                        </div>
                        <div className="commented_Content">
                        <div className="commented">
                            <div className="avatar">
                            <img src="https://vsm.vn/wp-content/uploads/2022/04/nhung-mau-anh-avatar-nam-lam-dai-dien-facebook-dep-nhat-1.png" alt="" />
                            </div>
                            <div className="comment_Information">
                                <div className="User">
                                    <div className="name">
                                        Phạm Đạt
                                    </div>
                                    <div className="time">
                                        1 giờ trước
                                    </div>
                                </div>
                                <div className="content">
                                    <p>Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor.</p>
                                </div>
                                <div className="Reply">
                               <div className="Messages">
                               <Messages width={20} height={20} fill="#fff"/>
                               </div>
                               <div className="title">
                                <p>Trả lời</p>
                               </div>
                                </div>
                            </div>
                        </div>

                        <div className="commented">
                            <div className="avatar">
                            <img src="https://vsm.vn/wp-content/uploads/2022/04/nhung-mau-anh-avatar-nam-lam-dai-dien-facebook-dep-nhat-1.png" alt="" />
                            </div>
                            <div className="comment_Information">
                                <div className="User">
                                    <div className="name">
                                        Phạm Đạt
                                    </div>
                                    <div className="time">
                                        1 giờ trước
                                    </div>
                                </div>
                                <div className="content">
                                    <p>Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor.</p>
                                </div>
                                <div className="Reply">
                               <div className="Messages">
                               <Messages width={20} height={20} fill="#fff"/>
                               </div>
                               <div className="title">
                                <p>Trả lời</p>
                               </div>
                                </div>
                            </div>
                        </div>

                        <div className="commented">
                            <div className="avatar">
                            <img src="https://vsm.vn/wp-content/uploads/2022/04/nhung-mau-anh-avatar-nam-lam-dai-dien-facebook-dep-nhat-1.png" alt="" />
                            </div>
                            <div className="comment_Information">
                                <div className="User">
                                    <div className="name">
                                        Phạm Đạt
                                    </div>
                                    <div className="time">
                                        1 giờ trước
                                    </div>
                                </div>
                                <div className="content">
                                    <p>Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor.</p>
                                </div>
                                <div className="Reply">
                               <div className="Messages">
                               <Messages width={20} height={20} fill="#fff"/>
                               </div>
                               <div className="title">
                                <p>Trả lời</p>
                               </div>
                                </div>
                            </div>
                        </div>

                        <div className="commented">
                            <div className="avatar">
                            <img src="https://vsm.vn/wp-content/uploads/2022/04/nhung-mau-anh-avatar-nam-lam-dai-dien-facebook-dep-nhat-1.png" alt="" />
                            </div>
                            <div className="comment_Information">
                                <div className="User">
                                    <div className="name">
                                        Phạm Đạt
                                    </div>
                                    <div className="time">
                                        1 giờ trước
                                    </div>
                                </div>
                                <div className="content">
                                    <p>Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor.</p>
                                </div>
                                <div className="Reply">
                               <div className="Messages">
                               <Messages width={20} height={20} fill="#fff"/>
                               </div>
                               <div className="title">
                                <p>Trả lời</p>
                               </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="see_More">
                <Button
                            text="Xem thêm"
                           Class="Button"
                            ></Button>
                </div>
                </div>
               
                </div>
               
            </div>
            <div className="CourseVideo_Right">
            <div className="menu_CourseVideo_Right">
            <Arcordition />
            </div>
            </div>
            </div>
           
        </div>
        <div className="footer">
            <Footer></Footer>
            </div>
        </>
    );
};

export default CourseVideo;