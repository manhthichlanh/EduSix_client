import { useState } from 'react';
import "./ConfirmOTP.scss";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button"
import Images from "../../../components/commom/images/Saly-14.png"
const ConfirmOTP = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = [];
  
  const handleInputChange = (index, e) => {
    const value = e.target.value;
  
    if (/^[0-9]$/.test(value)) {
      otp[index] = value;
      setOtp([...otp]);
  
      if (index < otp.length - 1) {
        inputRefs[index + 1].focus();
      }
    } else if (value === "" && index > 0) {
      otp[index] = value;
      setOtp([...otp]);
      inputRefs[index - 1].focus();
    } else if (value === "" && index === 0) {
      otp[index] = value;
      setOtp([...otp]);
    }
  
    if (e.clipboardData) {
      const clipboardText = e.clipboardData.getData("text").substring(0, otp.length);
      for (let i = 0; i < clipboardText.length; i++) {
        otp[i] = clipboardText[i];
      }
      setOtp([...otp]);
    }
  };

  const handlePaste = (index, e) => {
    e.preventDefault();
    const clipboardText = e.clipboardData.getData("text").substring(0, otp.length);
    const numericClipboardText = clipboardText.replace(/[^0-9]/g, ''); // Filter out non-numeric characters
  
    if (numericClipboardText.length === 6) {
      for (let i = 0; i < numericClipboardText.length; i++) {
        otp[index + i] = numericClipboardText[i];
      }
  
      setOtp([...otp]);
  
      if (index + numericClipboardText.length < otp.length) {
        inputRefs[index + numericClipboardText.length].focus();
      }
    } else {
      alert("Dán vào phải đủ 6 số, lưu ý không dán chữ");
    }
  };
  
  
  
  
  
    return (
        <>
            <div className="ConfirmOTP">
                <div className="ConfirmOTPLeft">
                    <div className="logo">
                        <img src="https://i.imgur.com/AB2qbqm.png" alt="" />
                    </div>
                    <div className="contentConfirmOTPLeft">
                    <div className="content">
                        <h1>Nhập OTP</h1>
                        <h2>Chào mừng đến với <span>Edusix</span></h2>
                        <div className="questionConfirmOTP">
                            <p>Nếu bạn chưa có tài khoản hãy đăng kí</p>
                            <p>Bạn có thể  <Link to="#"><span>Đăng Kí</span></Link> tại đây!</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="ConfirmOTPRight">
                    <div className="BoxConfirmOTPRight">
                        <h2>Nhập OTP</h2>
                        <i>Vui lòng nhập OTP được gửi tới email đăng ký của bạn</i>
                        <div className="InputBox">
  {otp.map((value, index) => (
    <input
      key={index}
      type="text"
      maxLength="1"
      value={value}
      ref={(input) => (inputRefs[index] = input)}
      onChange={(e) => handleInputChange(index, e)}
      onPaste={(e) => handlePaste(index, e)}
    />
  ))}
</div>
                        <div className="buttonConfirmOTP">
                            <Button text="Xác nhận tài khoản" Class="Button"></Button>
                        </div>
                        <p>Không nhận được OTP?  <Link to="#"><span>Thử lại</span></Link></p>
                       
                    </div>
                   
                </div>
               
            </div>
            <div className='vectorShape'>
                    <img src={Images} alt="" />
                </div>
        </>
    );
};
export default ConfirmOTP;