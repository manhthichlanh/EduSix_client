import { useState } from 'react';
import "./Register.scss";
import Input from "../../../components/input/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Facebook from "../../../components/commom/icons/Facebook";
import Google from "../../../components/commom/icons/Google";
import Images from "../../../components/commom/images/Saly-14.png";
import { apiServer } from "../../../utils/http";  // Import the apiServer
import ToastMessage from "../../../utils/alert";

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordDisplayed, setPasswordDisplayed] = useState(false);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullname: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [registrationStatus, setRegistrationStatus] = useState(null);
    let isToastDisplayedd = false;

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const togglePasswordDisplayed = () => {
        setPasswordDisplayed(!passwordDisplayed);
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
                    if (!isToastDisplayedd) {
                        // Gửi mã code lên server để lấy token và thông tin người dùng
                        // Thực hiện các xử lý tại đây
                        ToastMessage("Đăng nhập thành công").success(); // Use the utility directly
                        isToastDisplayedd = true; // Đánh dấu rằng thông báo đã được hiển thị
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


    const validateForm = () => {
        let isValid = true;
        let firstErrorField = null;
        if (!userData.email && !firstErrorField) {
            ToastMessage('Vui lòng nhập email', 'error').warn();
            isValid = false;
            firstErrorField = 'email';
        }

        if (!userData.fullname && !firstErrorField) {
            ToastMessage('Vui lòng nhập tên', 'error').warn();
            isValid = false;
            firstErrorField = 'password';
        }

        if (!userData.password && !firstErrorField) {
            ToastMessage('Vui lòng nhập mật khẩu', 'error').warn();
            isValid = false;
            firstErrorField = 'fullname';
        }

        if (!userData.confirmPassword && !firstErrorField) {
            ToastMessage('Vui lòng nhập lại mật khẩu', 'error').warn();
            isValid = false;
            firstErrorField = 'confirmPassword';
        }
        if (userData.password !== userData.confirmPassword) {
            ToastMessage('Mật khẩu không khớp', 'error').warn();
            isValid = false;
            firstErrorField = 'confirmPassword';
        }




        return isValid;
    };

    const handleInputChange = (e) => {
        e.persist();
        const { name, value } = e.target;

        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));

        // Handle confirmPassword separately
        if (name === 'password' || name === 'confirmPassword') {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword: name === 'password' && prevErrors.confirmPassword !== value
                    ? 'Mật khẩu xác nhận không khớp'
                    : '',
            }));
        }
    };

    const handleRegistration = async () => {
        // console.log('Registration data:', userData);
    
        if (validateForm()) {
            try {
                // Check if the email is already registered
                const checkEmailResponse = await apiServer.get('/user', {
                    params: {
                        email: userData.email,
                    },
                });
    
                // console.log('Check Email Response:', checkEmailResponse);
    
                const userWithEmail = checkEmailResponse.data.find(user => user.email === userData.email);

                if (userWithEmail) {
                    // Email already exists
                    setRegistrationStatus('error');
                    ToastMessage('Email đã được sử dụng. Vui lòng sử dụng một email khác.', 'error').warn();
                    return;
                }
    
                // Proceed with registration
                const apiData = {
                    email: userData.email,
                    password: userData.password,
                    fullname: userData.fullname,
                    nickname: null,
                    avatar: null,
                    // Add other fields as needed
                };
    
                const response = await apiServer.post('/auth/register', apiData);
    
                if (response.status === 201) {
                    // Registration successful
                    setRegistrationStatus('success');
                    ToastMessage('Đăng kí thành công').success();
                    navigate('/login');
                } else {
                    // Handle unexpected response status
                    console.error('Unexpected response status during registration:', response.status);
                    setRegistrationStatus('error');
                    ToastMessage('Đăng kí thất bại. Vui lòng kiểm tra lại thông tin.', 'error').warn();
                }
            } catch (error) {
                // Handle error
                console.error('Error during registration', error);
    
                if (error.isAxiosError && error.response) {
                    // Log the detailed error response
                    console.error('Detailed error response:', error.response);
                }
    
                setRegistrationStatus('error');
                ToastMessage('Đăng kí thất bại. Vui lòng kiểm tra lại thông tin.', 'error').warn();
            }
        } else {
            // Form validation failed
            setRegistrationStatus('error');
        }
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
                                <p>Bạn có thể  <Link to="/login"><span>Đăng Nhập</span></Link> tại đây!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="RegisterRight">
                    <div className="BoxRegisterRight">
                        <h2>Đăng Kí</h2>
                        <div className="InputRegisterRight">
                            <input
                                placeholder="Nhập email..."
                                className={`Input ${formErrors.email && 'error'}`}
                                name="email"
                                defaultValue={userData.email}
                                onChange={handleInputChange}
                            />


                            {/* {formErrors.email && <p className="form-error-message">{formErrors.email}</p>} */}

                            <input
                                placeholder="Nhập tên..."
                                className={`Input ${formErrors.fullname && 'error'}`}
                                name="fullname"
                                defaultValue={userData.fullname}
                                onChange={handleInputChange}
                            />

                            {/* {formErrors.fullname && <p className="form-error-message">{formErrors.fullname}</p>} */}
                            <div className='Password'>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    placeholder="Nhập mật khẩu..."
                                    className={`Input ${formErrors.password && 'error'}`}
                                    name="password"
                                    value={userData.password}
                                    onChange={handleInputChange}
                                />

                                <button onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon
                                        icon={passwordVisible ? faEyeSlash : faEye}
                                    />
                                </button>
                            </div>
                            {/* {formErrors.password && <p className="form-error-message">{formErrors.password}</p>} */}

                            <div className='Password'>
                                <input
                                    type={passwordDisplayed ? 'text' : 'password'}
                                    placeholder="Nhập lại mật khẩu..."
                                    className={`Input ${formErrors.confirmPassword && 'error'}`}
                                    name="confirmPassword"
                                    value={userData.confirmPassword}
                                    onChange={handleInputChange}
                                />
                                <button onClick={togglePasswordDisplayed}>
                                    <FontAwesomeIcon
                                        icon={passwordDisplayed ? faEyeSlash : faEye}
                                    />
                                </button>
                            </div>
                            {/* {formErrors.confirmPassword && <p className="form-error-message">{formErrors.confirmPassword}</p>} */}
                        </div>
                        <div className="buttonRegister">
                            <Button text="Đăng kí" Class="Button" onClick={handleRegistration} />
                        </div>
                        <p>Hoặc đăng đăng nhập bằng</p>
                        <div className="anotherRegister">
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
            <p className="form-error-message">{registrationStatus === 'error' && 'Đăng kí thất bại. Vui lòng kiểm tra lại thông tin.'}</p>
            <p className="form-success-message">{registrationStatus === 'success' && 'Đăng kí thành công!'}</p>
        </>
    );

};

export default Register;