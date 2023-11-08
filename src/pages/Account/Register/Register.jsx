import { useState } from 'react';
import "./Register.scss";
import Input from "../../../components/input/Input";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Facebook from "../../../components/commom/icons/Facebook";
import Google from "../../../components/commom/icons/Google";
import Images from "../../../components/commom/images/Saly-14.png"
const Register = () => {
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
            <div className="Register">
                <div className="RegisterLeft">
                    <div className="logo">
                        <img src="https://i.imgur.com/AB2qbqm.png" alt="" />
                    </div>
                    <div className="contentRegisterLeft">
                    <div className="content">
                        <h1>Đăng Kí</h1>
                        <h2>Chào mừng đến với <span>Edusix</span></h2>
                        <div className="questionRegister">
                            <p>Nếu bạn đã có tài khoản hãy đăng nhập</p>
                            <p>Bạn có thể  <Link to="#"><span>Đăng Nhập</span></Link> tại đây!</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="RegisterRight">
                    <div className="BoxRegisterRight">
                        <h2>Đăng Kí</h2>
                        <div className="InputRegisterRight">
                            <Input
                                placeholder="Nhập email..."
                                className="Input"
                            />
                            <div className='Password'>
                            <Input
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Nhập mật khẩu..."
                                className="Input"
                            />
                            <button onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon
                                     icon={passwordVisible ? faEyeSlash : faEye}
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
                                    icon={passwordDisplayed ? faEyeSlash : faEye}
                                />
                            </button>
                            </div>
                        </div>
                      
                        <div className="buttonRegister">
                            <Button text="Đăng kí" Class="Button"></Button>
                        </div>
                        <p>Hoặc đăng kí bằng</p>
                        <div className="anotherRegister">
                        <Link to="#">
                        <Facebook width={40} height={40}/>
                        </Link>
                        <Link to="#">
                        <Google width={40} height={40}/>
                        </Link>
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

export default Register;