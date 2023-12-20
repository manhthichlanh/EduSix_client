import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Input from "../../components/input/Input";
import Eye from "../../components/commom/icons/Eye";
import EyeSlashFill from "./../../components/commom/icons/EyeSlashFill";
import { useUser } from '../../utils/UserAPI';
import { apiServer } from "../../utils/http";
import ToastMessage from "../../utils/alert";
import bcrypt from 'bcryptjs';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function AccountProfile() {
  const { user } = useUser();
  const users = user?.userDetails || {};
  const user_id = users.user_id;

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState([false, false, false]);
  const [passwordMismatch, setPasswordMismatch] = useState(false); // New state for password mismatch
  const [userData, setUserData] = useState({});
  const [isPasswordRequired, setIsPasswordRequired] = useState(false);
  const handleTogglePasswordVisibility = (index) => {
    const updatedPasswordVisibility = [...passwordVisibility];
    updatedPasswordVisibility[index] = !updatedPasswordVisibility[index];
    setPasswordVisibility(updatedPasswordVisibility);
  };

  const inputClassNames = classNames(
    "w-full px-4 py-3 rounded-lg border-2 border-[#e8e8e8] outline-none bg-[#fafafa]",
    "text-black text-opacity-50 text-sm font-medium",
    "focus:border-[#FF6636]"
  );

  const handleTogglePasswordForm = () => {
    setShowPasswordForm(!showPasswordForm);

    // Nếu đang ẩn mật khẩu và hiện form, cho phép cập nhật mà không yêu cầu mật khẩu
    if (!showPasswordForm) {
      setIsPasswordRequired(false);
    }
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gọi API để lấy thông tin người dùng dựa trên user_id
        const response = await apiServer.get(`/user/${user_id}`);
        
        if (response.status === 200) {
          // Cập nhật state userData với thông tin người dùng mới
          setUserData(response.data);
        } else {
          console.error("Error fetching user data:", response.data.error);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
      
    };
    setCurrentPassword("");
    // Chỉ gọi fetchData nếu user_id có giá trị
    if (user_id) {
      fetchData();
    }
    
  }, [user_id]);

  const handleUpdateProfile = async () => {
   
    try {
       // Chuẩn bị dữ liệu cập nhật
       const updatedData = {
        fullname: fullname || "",
        nickname: nickname || "",
        password: userData.password || "",
        // email: email || "",
        // Thêm các trường dữ liệu khác bạn muốn cập nhật
      };
     // Kiểm tra xem đã nhập đầy đủ thông tin fullname, nickname, email chưa
if (!fullname) {
  ToastMessage("Vui lòng nhập đầy đủ thông tin họ và tên").warn();
  return;
}
if (!nickname) {
  ToastMessage("Vui lòng nhập đầy đủ thông tin nickname").warn();
  return;
}

      if (!userData) {
        // Thông báo lỗi nếu không có dữ liệu người dùng
        ToastMessage("Đã xảy ra lỗi không mong muốn").error();
        return;
      }
  
      // Kiểm tra mật khẩu hiện tại nếu yêu cầu
      if (showPasswordForm) {
        if (!userData.password) {
          // Thông báo lỗi nếu không tìm thấy mật khẩu người dùng
          ToastMessage("Không tìm thấy mật khẩu người dùng.").error();
          return;
        }
  
        const isCurrentPasswordValid = await bcrypt.compare(currentPassword, userData.password);
        if (!currentPassword) {
          ToastMessage("Hãy nhập mật khẩu hiện tại").warn();
          return;
        }
        if (!isCurrentPasswordValid) {
          // Thông báo lỗi nếu mật khẩu hiện tại không chính xác
          ToastMessage("Mật khẩu hiện tại không chính xác").warn();
          return;
        }
      }
  
     
  
      // Kiểm tra xem cần cập nhật mật khẩu không
     // Kiểm tra xem cần cập nhật mật khẩu không
if (showPasswordForm) {
 
  // Kiểm tra xem đã nhập đầy đủ thông tin mật khẩu mới hoặc xác nhận mật khẩu chưa
  if (!(newPassword || confirmPassword) || !(newPassword && confirmPassword)) {
    ToastMessage("Vui lòng nhập đầy đủ mật khẩu mới và xác nhận mật khẩu").warn();
    return;
  }

  // Kiểm tra xem mật khẩu mới và xác nhận mật khẩu có khớp nhau không
  if (newPassword !== confirmPassword) {
    ToastMessage("Mật khẩu mới và xác nhận mật khẩu không khớp").warn();
    return;
  }

  // Hash mật khẩu mới trước khi cập nhật
  updatedData.password = await bcrypt.hash(newPassword, 10);
}
  
      // Gọi API để cập nhật dữ liệu
      const updateProfileResponse = await apiServer.patch(`/user/update/${user_id}`, updatedData);
  
      if (updateProfileResponse.status === 200) {
        // Dữ liệu được cập nhật thành công
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setPasswordVisibility([false, false, false]);
        ToastMessage("Cập nhật thông tin người dùng thành công").success();
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        // Thông báo lỗi nếu cập nhật thất bại
        ToastMessage("Cập nhật thông tin người dùng thất bại").error();
      }
    } catch (error) {
      // Thông báo lỗi nếu có lỗi không mong muốn
      console.error("Unexpected error:", error);
      ToastMessage("Đã xảy ra lỗi không mong muốn").error();
    }
  };
  
  const showConfirmationDialog = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        const handleClickOutside = () => {
          onClose();
          ToastMessage("Cập nhật thông tin người dùng bị hủy").warn(); 
        };
  
        return (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50" onClick={handleClickOutside}></div>
            <div className="p-4 text-center bg-white rounded-md z-50 m-3">
              <h1 className="mb-2 font-semibold text-xl text-orange-500">Xác nhận cập nhật</h1>
              <p className="mb-2 text-sm">Bạn có chắc chắn muốn cập nhật thông tin người dùng không?</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => { handleUpdateProfile(); onClose(); }}>
                Có
              </button>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => { ToastMessage("Cập nhật thông tin người dùng bị hủy").warn(); onClose(); }}>
                Không
              </button>
            </div>
          </div>
        );
      }
    });
  };
  
  
  

const handleNewPasswordChange = (event) => {
  setNewPassword(event.target.value);
  setPasswordMismatch(false);
};

const handleConfirmPasswordChange = (event) => {
  setConfirmPassword(event.target.value);
  setPasswordMismatch(false);
};

const [fullname, setFullname] = useState("");
const [nickname, setNickname] = useState("");
const [email, setEmail] = useState("");

useEffect(() => {
  setFullname(users.fullname || "");
  setNickname(users.nickname || "");
  setEmail(users.email || "");
}, [users]);


const subIdToHidePasswordChange = "direct"; 
const shouldHidePasswordChange = users.sub_id && users.sub_id.startsWith(subIdToHidePasswordChange);


  return (
    <div className="grid grid-cols-12 mt-4 gap-6">
     <div className="col-span-12 md:col-span-6">
        <p className="text-base font-medium mb-2 text-black text-opacity-70">
          Họ và tên:
        </p>
        <Input
          type={"text"}
          placeholder={"Họ và tên"}
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className={inputClassNames}
        />
      </div>

      <div className="col-span-12 md:col-span-6">
        <p className="text-base font-medium mb-2 text-black text-opacity-70">
          Nickname:
        </p>
        <Input
          type={"text"}
          placeholder={"Nickname"}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className={inputClassNames}
        />
      </div>

      <div className="col-span-12 md:col-span-6">
        <p className="text-base font-medium mb-2 text-black text-opacity-70">
          Email (không thay đổi):
        </p>
        <Input
          type={"email"}
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClassNames}
          disabled
        />
      </div>
      {shouldHidePasswordChange && (

      <div className="col-span-12 md:col-span-6">
      <p className="text-base font-medium mb-2 text-black text-opacity-70">
          Đổi mật khẩu:
        </p>
      <button
    onClick={handleTogglePasswordForm}
    className="text-white bg-[#009d90] px-6 py-3 rounded-lg hover:bg-[#00cbba] transition duration-300 ease-in-out w-full"
  >
    {showPasswordForm ? "Hủy Đổi Mật Khẩu" : "Đổi Mật Khẩu"}
  </button>
  </div>
   )}
      <>
      
      <div className="col-span-12">
   
      {showPasswordForm && (
         <>
        <p className="w-full px-3 py-[10px] border-l-4 border-[#ff6636] text-[16px] text-[#ff6636] font-medium leading-6">
          Mật khẩu
        </p>
        <i className="mt-3">Áp dụng cho tài khoản đăng kí thường</i>

     
        <div className="md:col-span-6 col-span-12 flex flex-col gap-6 mt-3">
          <div className="w-full">
            <p className="text-base font-medium mb-2 text-black text-opacity-70">
              Mật khẩu hiện tại
            </p>
            <div className="relative">
              <Input
                type={passwordVisibility[0] ? "text" : "password"}
                placeholder="Nhập mật khẩu hiện tại"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className={inputClassNames}
                autoComplete="new-password" // Thêm autocomplete="new-password"
              />
              <button
                className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                onClick={() => handleTogglePasswordVisibility(0)}
              >
                {passwordVisibility[0] ? (
                  <EyeSlashFill width={16} height={16} className="fill-black opacity-50"></EyeSlashFill>
                ) : (
                  <Eye width={16} height={16} className="fill-black opacity-50"></Eye>
                )}
              </button>
            </div>
          </div>


        <div className="w-full">
          {/* Các trường dữ liệu mật khẩu mới, xác nhận mật khẩu và nút cập nhật */}
          <p className="text-base font-medium mb-2 text-black text-opacity-70">
            Mật khẩu mới
          </p>
          <div className="relative">
            <Input
              type={passwordVisibility[1] ? "text" : "password"}
              placeholder="Nhập mật khẩu mới"
              value={newPassword}
              onChange={handleNewPasswordChange}
              className={inputClassNames}
            />
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
              onClick={() => handleTogglePasswordVisibility(1)}
            >
              {passwordVisibility[1] ? (
                <EyeSlashFill width={16} height={16} className="fill-black opacity-50"></EyeSlashFill>
              ) : (
                <Eye width={16} height={16} className="fill-black opacity-50"></Eye>
              )}
            </button>
          </div>
        </div>

        <div className="w-full">
          <p className="text-base font-medium mb-2 text-black text-opacity-70">
            Xác nhận mật khẩu
          </p>
          <div className="relative">
            <Input
              type={passwordVisibility[2] ? "text" : "password"}
              placeholder="Xác nhận lại mật khẩu mới"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={inputClassNames}
            />
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
              onClick={() => handleTogglePasswordVisibility(2)}
            >
              {passwordVisibility[2] ? (
                <EyeSlashFill width={16} height={16} className="fill-black opacity-50"></EyeSlashFill>
              ) : (
                <Eye width={16} height={16} className="fill-black opacity-50"></Eye>
              )}
            </button>
          </div>
        </div>
       
        {passwordMismatch && (
          <p className="text-red-500 text-sm">Mật khẩu mới và xác nhận mật khẩu không khớp.</p>
        )}
      </div>

</>
)}
      </div>
      
      
     
      </>
      <div className="col-span-12 md:col-span-6">
    
 <button
  onClick={showConfirmationDialog}
  className="text-white bg-[#05a70a] px-6 py-3 rounded-lg hover:bg-[#00d107] transition duration-300 ease-in-out"
>
  Cập Nhật
</button>
  
</div>

    </div>
  );
}


export default AccountProfile;
