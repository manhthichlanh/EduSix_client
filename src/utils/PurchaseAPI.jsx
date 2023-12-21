import  { useEffect, useState } from 'react';
import { useUser } from '../utils/UserAPI';
import { apiServer } from "../utils/http";

const PurchaseAPI = () => {
  const { user } = useUser();
  const users = user?.userDetails || {};
  const user_id = users.user_id;

  const [purchaseData, setPurchaseData] = useState(null);
  const [courseDataList, setCourseDataList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        // Kiểm tra nếu không có user_id thì không thực hiện gọi API
        if (!user_id) {
        //   console.error('Không có user_id');
        //   setError('Không có user_id');
          return;
        }

        // Gọi API để lấy toàn bộ dữ liệu từ endpoint `/order/export-payment/${user_id}`
        const response = await apiServer.get(`/order/export-payment/${user_id}`);

        // Kiểm tra nếu có dữ liệu trả về từ API
        if (response.data) {
          const purchaseData = response.data;
        //   console.log('Dữ liệu từ API Purchase:', purchaseData);

          // Đoạn code xử lý dữ liệu ở đây nếu cần thiết
          // Ví dụ: lưu vào state, hiển thị trên giao diện, ...
          setPurchaseData(purchaseData);

          // Kiểm tra "transaction_status" là "Giao dịch thành công"
          if (purchaseData[0]?.transaction_status === 'Giao dịch thành công') {
            const courseIds = purchaseData.map(item => item.course_id);

            // Gọi API để lấy danh sách khoá học từ endpoint `/course` với mảng courseIds
            const courseListResponse = await Promise.all(courseIds.map(courseId => apiServer.get(`/course/${courseId}`)));

            // Kiểm tra nếu có dữ liệu trả về từ API cho từng khoá học
            const courses = courseListResponse.map(courseResponse => courseResponse.data);
            // console.log('Dữ liệu từ API Course List:', courses);

            // Đoạn code xử lý dữ liệu ở đây nếu cần thiết
            // Ví dụ: lưu vào state, hiển thị trên giao diện, ...
            setCourseDataList(courses);

          } else {
            console.error('Giao dịch không thành công');
            setError('Giao dịch không thành công');
          }
        } else {
          console.error('Không có dữ liệu từ API Purchase');
          setError('Không có dữ liệu từ API Purchase');
        }

      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
        // Xử lý lỗi nếu cần thiết
        setError('Lỗi khi gọi API');
      }
    };

    fetchDataFromAPI(); // Gọi hàm fetchDataFromAPI khi component được mount hoặc khi user_id thay đổi

  }, [user_id]); // Đặt user_id vào dependency array để useEffect chạy lại khi user_id thay đổi

  // Trả về dữ liệu và lỗi để sử dụng ở nơi khác trong component
  return { purchaseData, courseDataList, error };
};

export default PurchaseAPI;
