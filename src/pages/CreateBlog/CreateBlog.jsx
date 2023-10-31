import React, { useState, useRef } from 'react';
import Input from '../../components/input/Input';
import JoditEditor from 'jodit-react';
import Button from '../../components/button/Button';
const CreateBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        // Kiểm tra định dạng của file ảnh
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i; // Định nghĩa các định dạng được cho phép
        if (!allowedExtensions.test(file.name)) {
            alert('Vui lòng chỉ tải lên file có định dạng .jpg, .jpeg hoặc .png');
            return; // Ngừng xử lý nếu định dạng không đúng
        }
        if (!file) {
            alert('Vui lòng tải lên một hình ảnh');
            return;
        }
        reader.onloadend = () => {
            setImageURL(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (newContent) => {
        setDescription(newContent);
    };

    const handlePublish = () => {
        // Kiểm tra nếu bất kỳ thông tin nào bị thiếu, hiển thị cảnh báo
        if (!imageURL || !title || !description) {
            alert('Vui lòng điền đầy đủ thông tin cần thiết (hình ảnh, tiêu đề, mô tả) trước khi đăng bài');
            return;
        }

        // Nếu tất cả thông tin đã được điền, tiến hành đăng bài viết
        // Viết logic hoặc gọi API để đăng bài viết ở đây
    };

    return (
        <div className="grid grid-cols-12 gap-6 pt-10 px-10 lg:px-20 md:px-16 sm:px-10">

            <div className="col-span-7 pb-10">
                <p className="text-[18px] font-medium pb-4">Thumbnail</p>
                <div className="flex gap-6">
                    <div className="w-[240px] h-[160px] relative bg-[url('images/thumbnail.png')]">
                        {imageURL && <img src={imageURL} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover', absolute: 'inset-0' }} />}
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="max-w-md">Tải lên hình thu nhỏ bài viết của bạn ở đây. Nguyên tắc quan trọng: 1200x800 pixel hoặc Tỷ lệ 12:8. Định dạng được hỗ trợ: .jpg, .jpeg hoặc .png</p>
                        <input type="file" onChange={handleImageUpload} />
                    </div>
                </div>
            </div>
            <div className="col-span-12 pb-10">
                <p className='text-[18px] font-medium pb-4'>Tiêu đề</p>
                <Input
                    type={"text"}
                    placeholder={"Nhập tiêu đề"}
                    className={"px-4 py-3 text-[16px] border-2 border-[#e8e8e8] rounded-lg w-full"}
                    onChange={handleTitleChange}
                />
            </div>
            <div className="col-span-12 pb-10">
                <p className='text-[18px] font-medium pb-4'>Mô tả</p>
                <JoditEditor
                    ref={editor}
                    value={content}
                    onBlur={newContent => setContent(newContent)}
                    onChange={handleDescriptionChange}  // Cập nhật giá trị cho mô tả
                />
            </div>
            <Button
                text="Đăng"
                Class={"px-8 py-3 bg-[#ff6636] text-[16px] font-medium text-white rounded-[4px]"}
                onClick={handlePublish}
            // onClick={(handlePublish) => console.log("You are my dream")}
                
            />
        </div>
    );
};

export default CreateBlog;
