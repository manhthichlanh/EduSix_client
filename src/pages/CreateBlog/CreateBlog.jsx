import React, { useState, useRef, useEffect } from 'react';
import Input from '../../components/input/Input';
import JoditEditor from 'jodit-react';
import Button from '../../components/button/Button';
const CreateBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [formCompleted, setFormCompleted] = useState(false);

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

    useEffect(() => {
        // Kiểm tra xem tất cả các trường thông tin cần thiết đã được điền hay chưa
        if (imageURL && title && description) {
            setFormCompleted(true); // Đặt trạng thái form thành true nếu đã điền đầy đủ thông tin
        } else {
            setFormCompleted(false); // Ngược lại, form chưa hoàn chỉnh
        }
    }, [imageURL, title, description]);

    return (
        <div className="grid grid-cols-12 gap-6 pt-10 px-10 lg:px-20 md:px-16 sm:px-10">
            <div className="col-span-12 pb-10 lg:col-span-12 sm:col-span-12">
                <p className="text-[18px] font-medium pb-4">Thumbnail</p>
                <div className="lg:flex gap-6">
                    <div className="w-[240px] h-[160px] relative bg-[url('images/thumbnail.png')]">
                        {imageURL && <img src={imageURL} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover', absolute: 'inset-0' }} />}
                    </div>
                    <div className="flex flex-col gap-4 pt-6 lg:pt-0 md:pt-6 sm:pt-6">
                        <p className="max-w-md">Tải lên hình thu nhỏ bài viết của bạn ở đây. Nguyên tắc quan trọng: 1200x800 pixel hoặc Tỷ lệ 12:8. Định dạng được hỗ trợ: .jpg, .jpeg hoặc .png</p>
                        <input className='file:mr-2 file:px-4 file:py-2 file:rounded-md file:border-none file:bg-[#ff6636] file:text-white file:hover:bg-[#E75F37] ease-in-out transition' type="file" onChange={handleImageUpload} />
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
                Class={`px-8 py-3 rounded-[4px] text-white text-[16px] font-medium ${formCompleted ? 'bg-[#ff6636]' : 'bg-[#ccc]'} ${formCompleted ? '' : 'cursor-not-allowed'}`}
                onClick={formCompleted ? handlePublish : null}
            />
        </div>
    );
};

export default CreateBlog;
