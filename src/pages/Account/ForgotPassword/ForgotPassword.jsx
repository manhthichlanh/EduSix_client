import AlertCircle from "../../../components/commom/icons/AlertCircle";
import "./ForgotPassword.scss";
import Input from "../../../components/input/Input";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import Images from "../../../components/commom/images/Saly-14.png"
const ForgotPassword = () => {
  
    return (
        <>
            <div className="ForgotPassword">
                <div className="ForgotPasswordLeft">
                    <div className="logo">
                        <img src="https://i.imgur.com/AB2qbqm.png" alt="" />
                    </div>
                    <div className="contentForgotPasswordLeft">
                    <div className="content">
                        <h1>Quên mật khẩu</h1>
                        <h2>Chào mừng đến với <span>Edusix</span></h2>
                        <div className="questionForgotPassword">
                            <p>Nếu bạn chưa có tài khoản hãy đăng kí</p>
                            <p>Bạn có thể  <Link to="#"><span>Đăng Kí</span></Link> tại đây!</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="ForgotPasswordRight">
                    <div className="BoxForgotPasswordRight">
                        <h2>Quên mật khẩu</h2>
                        <div className="InputForgotPasswordRight">
                            <Input
                                placeholder="Nhập email..."
                                className="Input"
                            />
                          
                        </div>
                        <div className="Notification">
                            <div className="icon">
                                <AlertCircle width={20} height={20}/>
                            </div>
                            <div className="content">
                                <p>Chúng tôi không tìm thấy địa chỉ email phù hợp với bạn, hãy gửi lại email mà bạn đã đăng ký</p>
                            </div>
                        </div>
                      
                        <div className="buttonForgotPassword">
                            <Button text="Đặt lại mật khẩu" Class="Button"></Button>
                        </div>
                        <Button text="Quay lại đăng nhập" Class="comeBack"></Button>
                    
                    </div>
                   
                </div>
               
            </div>
            <div className='vectorShape'>
                    <img src={Images} alt="" />
                </div>
        </>
    );
};

export default ForgotPassword;