import { useEffect, useState } from 'react';
import { useUser } from '../utils/UserAPI';
import { apiServer } from '../utils/http';

const PurchaseAPI = () => {
  const { user } = useUser();
  const users = user?.userDetails || {};
  const user_id = users.user_id;

  const [purchaseData, setPurchaseData] = useState([]);
  const [courseDataList, setCourseDataList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        if (!user_id) {
          setError('Không có user_id');
          return;
        }

        const response = await apiServer.get(`/order/export-payment/${user_id}`);

        if (response.data) {
          const sortedPurchaseData = response.data.sort((a, b) => b.order_id - a.order_id);

          setPurchaseData(sortedPurchaseData);

          if (sortedPurchaseData[0]?.transaction_status === 'Giao dịch thành công') {
            const courseIds = sortedPurchaseData.map(item => item.course_id);

            const courseListResponse = await Promise.all(
              courseIds.map(courseId => apiServer.get(`/course/${courseId}`))
            );

            const courses = courseListResponse.map(courseResponse => courseResponse.data);

            // Sắp xếp lại courses theo id từ cao đến thấp
            // courses.sort((a, b) => b.course_id - a.course_id);

            setCourseDataList(courses);
          } else {
            setError('Giao dịch không thành công');
          }
        } else {
          setError('Không có dữ liệu từ API Purchase');
        }
      } catch (error) {
        setError('Lỗi khi gọi API');
      }
    };

    fetchDataFromAPI();
  }, [user_id]);
  
  useEffect(() => {
    console.log(purchaseData);
    console.log(courseDataList);
  }, [purchaseData, courseDataList]);
  
  return { purchaseData, courseDataList, error };
};

export default PurchaseAPI;
