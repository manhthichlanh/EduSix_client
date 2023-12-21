import { useEffect, useState } from 'react';
import { apiServer, serverEndpoint } from '../../../utils/http';
import { useUser } from '../../../utils/UserAPI';
import { Link } from 'react-router-dom';


const Certification = () => {
  const { user } = useUser();
  const users = user?.userDetails || {};
  const user_id = users.user_id;

  // State to store the fetched data
  const [certificateData, setCertificateData] = useState([]);
  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let formattedDuration = '';

    if (hours > 0) {
      formattedDuration += `${hours} giờ `;
    }

    if (minutes > 0) {
      formattedDuration += `${minutes} phút `;
    }

    if (remainingSeconds > 0 || (hours === 0 && minutes === 0)) {
      formattedDuration += `${remainingSeconds} giây`;
    }

    return formattedDuration.trim();
  };

  const formatDate = (dateTimeString) => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const formattedDate = new Date(dateTimeString).toLocaleString('vi-VN', options);
    return formattedDate;
  };

  useEffect(() => {
    // Fetch data when the component mounts or when user_id changes
    const fetchData = async () => {
      try {
        const response = await apiServer.get(`/certificate/byUser/${user_id}`);
        // console.log({ data: response.data });
  
        // Assuming 'certificate_id' is a numeric value, use a compare function to sort by 'certificate_id' in descending order
        const sortedData = response.data.sort((a, b) => b.certificate_id - a.certificate_id);
  
        setCertificateData(sortedData);
      } catch (error) {
        console.error('Error fetching certificate data:', error);
      }
    };
  
    fetchData(); // Call the fetchData function
  
    // Cleanup function (optional)
    return () => {
      // Cleanup code, if needed (e.g., aborting ongoing requests)
    };
  }, [user_id]); // Dependency array to re-run the effect when user_id changes
  

  return (
    <div className="flex flex-col items-center justify-between col-span-12 lg:col-span-9">
      {certificateData.length > 0 ? (
        <div className="grid grid-cols-12 gap-6">
          {certificateData.map((certificate) => (
            <div className="col-span-12 lg:col-span-4 md:col-span-6" key={certificate.sub_id}>
              <Link
                to={`/certification/${certificate.sub_id}`}
                className="block w-full mx-2 mb-4 overflow-hidden rounded shadow-lg transition duration-300 transform hover:scale-105"
              >
                <div className="rounded-lg p-2 pb-2">
                  {
                    certificate?.course &&
                    <img
                      className="object-cover w-full h-32"
                      src={certificate?.course?.thumbnail.includes("https://") ? certificate?.course?.thumbnail : `${serverEndpoint}course/thumbnail/${certificate.course.thumbnail}`}
                      alt={certificate.course.thumbnail}
                    />
                  }

                  <h2 className="mt-2 text-lg font-semibold">{certificate?.course?.name}</h2>
                  {certificate.total_duration > 0 && (
                    <p className="text-xs text-gray-600 text-orange-600">
                      Thời gian: {formatDuration(certificate.total_duration)}
                    </p>
                  )}
                  <p className="text-sm text-green-700 font-semibold">
                    Ngày cấp: {formatDate(certificate.created_at)}
                  </p>
                </div>
                <div className='text-sm bg-orange-500 text-white text-center p-3 hover:bg-orange-700 font-semibold'>
                  Xem chứng chỉ
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Không có dữ liệu</p>
      )}
    </div>
  );
};

export default Certification;
