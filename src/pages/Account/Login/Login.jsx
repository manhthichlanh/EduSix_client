import { useState } from 'react';
import "./Login.scss";
import Input from "../../../components/input/Input";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Facebook from "../../../components/commom/icons/Facebook";
import Google from "../../../components/commom/icons/Google";
import Images from "../../../components/commom/images/Saly-14.png"
const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <>
            <div className="Login">
                <div className="LoginLeft">
                    <div className="logo">
                        <img src="https://i.imgur.com/AB2qbqm.png" alt="" />
                    </div>
                    <div className="contentLoginLeft">
                    <div className="content">
                        <h1>Đăng nhập</h1>
                        <h2>Chào mừng đến với <span>Edusix</span></h2>
                        <div className="questionLogin">
                            <p>Nếu bạn chưa có tài khoản hãy đăng kí</p>
                            <p>Bạn có thể  <Link to="#"><span>Đăng Kí</span></Link> tại đây!</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="LoginRight">
                    <div className="BoxLoginRight">
                        <h2>Đăng nhập</h2>
                        <div className="InputLoginRight">
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
                                    icon={passwordVisible ? faEye : faEyeSlash}
                                />
                            </button>
                            </div>
                        </div>
                        <div className="function">
                            <div className="rememberPassword">
                                <input type="checkbox"/>
                                <label htmlFor="">Nhớ mật khẩu</label>
                            </div>
                            <div className="forgotPassword">
                                <Link to="/">Quên mật khẩu?</Link>
                            </div>
                        </div>
                        <div className="buttonLogin">
                            <Button text="Đăng nhập" Class="Button"></Button>
                        </div>
                        <p>Hoặc đăng nhập bằng</p>
                        <div className="anotherLogin">
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

export default Login;