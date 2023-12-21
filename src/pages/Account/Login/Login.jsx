import { useState, useEffect } from 'react';
import "./Login.scss";
import Input from "../../../components/input/Input";
import { Link, useNavigate } from 'react-router-dom';

import Button from "../../../components/button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Facebook from "../../../components/commom/icons/Facebook";
import Google from "../../../components/commom/icons/Google";
import Images from "../../../components/commom/images/Saly-14.png"
import { apiServer } from "../../../utils/http";
import ToastMessage from "../../../utils/alert";

const Login = () => {
    //     useEffect(() => {
    //     ToastMessage(`Chúc mừng bạn kẻ chiến thắng!`).warn();
    //   }, []);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    let isToastDisplayed = false;
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
      const openLoginOAuthPopup = (platform) => {
        const { href, search, origin } = window.location;
        const hrefWithoutSearch = href.replace(search, "");
        const width = 500;
        const height = 600;
        // Calculate the center position
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;

        window.open(`${origin}/popup/oauth?platform=${platform}`, "_blank", `width=${width},height=${height},left=${left},top=${top}`);

        // Trong trang hiện tại (cửa sổ cha)
        const handlePostMessage = (event) => {
            console.log(event);
        
            // Kiểm tra origin để đảm bảo an toàn (tuỳ thuộc vào yêu cầu của ứng dụng bạn)
            if (event.origin === window.origin) {
                const data = event.data;
        
                // Kiểm tra loại dữ liệu
                if (data.type === 'authentication') {
                    const authorizationCode = data.data;
                    localStorage.setItem('manual_token', authorizationCode.manual_token);
        
                    // Kiểm tra xem thông báo đã được hiển thị hay chưa
                    if (!isToastDisplayed) {
                        // Gửi mã code lên server để lấy token và thông tin người dùng
                        // Thực hiện các xử lý tại đây
                        ToastMessage("Đăng nhập thành công").success(); // Use the utility directly
                        isToastDisplayed = true; // Đánh dấu rằng thông báo đã được hiển thị
                    }
        
                    navigate('/');
                    // window.location.href = '/';
        
                    console.log('Received authorization code:', authorizationCode);
                }
            }
        };
        
        // Thêm lắng nghe sự kiện để nhận dữ liệu từ cửa sổ con
        window.removeEventListener('message', handlePostMessage);
        window.addEventListener('message', handlePostMessage);
        // Add the rest of your code (event listener, etc.) here
    };

    const handleLogin = async () => {
        try {
            // Perform login logic, send email and password to the server
            const response = await apiServer.post('/auth/login', {
                email,
                password
            });
    
            const data = response.data;
            localStorage.setItem('manual_token', data.token);
            ToastMessage('Đăng nhập thành công').success();
    
            // // Save user information to local storage
            // userUtils.saveUserToLocalStorage(data.user);
    
            // Include manual_token in your subsequent requests
            apiServer.defaults.headers.common['Authorization'] = `${data.token}`;
    
            // Navigate to the home page
            navigate('/');
        } catch (error) {
            if (error.status === 404) {
                ToastMessage('Không tìm thấy người dùng. Vui lòng kiểm tra thông tin đăng nhập của bạn.').warn();
            } else {
                ToastMessage('Đăng nhập thất bại, vui lòng thử lại').error();
            }
        }
    };

    

    
    // useEffect(() => {
    //     const manualToken = localStorage.getItem('manual_token');
    //     if (manualToken) {
    //       const fetchUserInformation = async () => {
    //         try {
    //           const response = await apiServer.get('/auth/verify/user', {
    //             headers: {
    //               Authorization: `Bearer ${manualToken}`,
    //             },
    //           });
      
    //           if (response.ok) {
    //             const userData = await response.json();
    //             userUtils.saveUserToLocalStorage(userData.user);
    //           } else {
    //             console.error('Failed to fetch user information');
    //           }
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       };
      
    //       fetchUserInformation();
    //     }
    //   }, []);
      

    // Fetch user information when the component mounts
    // useEffect(() => {
    //     const fetchUserInformation = async () => {
    //         try {
    //             // Retrieve manual_token from localStorage
    //             const manualToken = localStorage.getItem('manual_token');

    //             // Fetch user information using manual_token
    //             const response = await apiServer.get('http://localhost:8080/auth/verify/user', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Authorization': `Bearer ${manualToken}`,
    //                 },
    //             });

    //             if (response.ok) {
    //                 const userData = await response.json();

    //                 // Store user information in localStorage
    //                 localStorage.setItem('user', JSON.stringify(userData.user));
    //             } else {
    //                 console.error('Failed to fetch user information');
    //             }
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchUserInformation();
    // }, []);
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
                                <p>Bạn có thể  <Link to="/register"><span>Đăng Kí</span></Link> tại đây!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="LoginRight">
                    <div className="BoxLoginRight">
                        <h2>Đăng nhập</h2>
                        <div className="InputLoginRight">
                            <Input
                                type="email"
                                placeholder="Nhập email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="Input"
                            />
                            <div className='Password'>
                                <Input
                                    type={passwordVisible ? 'text' : 'password'}
                                    placeholder="Nhập mật khẩu..."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="Input"
                                />
                                <button onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon
                                        icon={passwordVisible ? faEyeSlash : faEye}
                                    />
                                </button>
                            </div>
                        </div>

                        <div className="function">
                            <div className="rememberPassword">
                                <input type="checkbox" />
                                <label htmlFor="">Nhớ mật khẩu</label>
                            </div>
                            <div className="forgotPassword">
                                <Link to="/">Quên mật khẩu?</Link>
                            </div>
                        </div>
                        <div className="buttonLogin">
                            <Button text="Đăng nhập" Class="Button" onClick={handleLogin} />
                        </div>
                        <p>Hoặc đăng nhập bằng</p>
                        <div className="anotherLogin">
                            <Link to="#">
                                <Facebook width={40} height={40} onClick={() => openLoginOAuthPopup('facebook')} />
                            </Link>
                            <Link to="#">
                                <Google width={40} height={40} onClick={() => openLoginOAuthPopup('google')} />
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