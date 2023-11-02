import { useState } from 'react';
import "./ResetPassword.scss";
import Input from "../../../components/input/Input";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Images from "../../../components/commom/images/Saly-14.png"
const ResetPassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordDisplayed, setPasswordDisplayed] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const togglePasswordDisplayed = () => {
        setPasswordDisplayed(!passwordDisplayed);
    };
    return (
        <>
            <div className="ResetPassword">
                <div className="ResetPasswordLeft">
                    <div className="logo">
                        <img src="https://i.imgur.com/AB2qbqm.png" alt="" />
                    </div>
                    <div className="contentResetPasswordLeft">
                    <div className="content">
                        <h1>Đặt lại mật khẩu</h1>
                        <h2>Chào mừng đến với <span>Edusix</span></h2>
                        <div className="questionResetPassword">
                            <p>Nếu bạn chưa có tài khoản hãy đăng kí</p>
                            <p>Bạn có thể  <Link to="#"><span>Đăng Kí</span></Link> tại đây!</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="ResetPasswordRight">
                    <div className="BoxResetPasswordRight">
                        <h2>Đặt lại mật khẩu</h2>
                        <div className="InputResetPasswordRight">
                        <div className='Password'>
                            <Input
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Nhập mật khẩu..."
                                className="Input"
                            />
                            <button onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon
                                    icon={passwordVisible ? faEye : faEyeSlash}
                                />
                            </button>
                            </div>
                            <div className='Password'>
                            <Input
                                type={passwordDisplayed ? 'text' : 'password'}
                                placeholder="Nhập lại mật khẩu..."
                                className="Input"
                            />
                            <button onClick={togglePasswordDisplayed}>
                                <FontAwesomeIcon
                                    icon={passwordDisplayed ? faEye : faEyeSlash}
                                />
                            </button>
                            </div>
                        </div>
                        <div className="buttonResetPassword">
                            <Button text="Đặt lại mật khẩu" Class="Button"></Button>
                        </div>
                    </div>
                   
                </div>
               
            </div>
            <div className='vectorShape'>
                    <img src={Images} alt="" />
                </div>
        </>
    );
};

export default ResetPassword;