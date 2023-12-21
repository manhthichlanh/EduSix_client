import { useEffect, useCallback, useState } from 'react';
import { useNotificationProvider } from '../../../utils/NotificationApi';
import { apiServer, serverEndpoint } from '../../../utils/http';
import { useNavigate } from 'react-router-dom';
import { useSocket } from '../../../services/SocketService';
const Notification = () => {
  const navigate = useNavigate();
    const { notifications, setNotifications } = useNotificationProvider();
    const [courseData, setCourseData] = useState(null);
    const { socket, isSocketConnected } = useSocket()

    //Nhận data gửi về khi hoàn thành chứng chỉ socket;
    useEffect(() => {
      if (!socket.hasListeners("learner-get-message")) {
        socket.on("learner-get-message", ({readLoad}) => {
          if (readLoad) console.log("hãy cập nhật lại dữ liệu")
        }
        );
      }
    }, [socket, isSocketConnected])
    const handleNotificationClick = useCallback(async (notification_id) => {
        const clickedNotification = notifications.find(
            (notification) => notification.notification_id === notification_id
        );

        if (clickedNotification && clickedNotification.is_read) {
            return;
        }

        try {
            await apiServer.post('/notification/updateIsReadNotification', {
                notification_id: notification_id,
            });

            const updatedNotifications = notifications.map((notification) =>
            notification.notification_id === notification_id
              ? { ...notification, is_read: true }
              : notification
          );
      
          setNotifications(updatedNotifications);

            const clickedNotificationUpdated = updatedNotifications.find(
                (notification) => notification.notification_id === notification_id
            );

            if (clickedNotificationUpdated && clickedNotificationUpdated.message) {
              
                setCourseData(clickedNotificationUpdated.message);
            }
            navigate(`/${clickedNotificationUpdated.link}`);
        } catch (error) {
            console.error('Error updating notification status:', error.response?.data || error.message);
           
        }
    }, [notifications, setNotifications, navigate]);

    useEffect(() => {
        if (notifications.length > 0) {
            // Extract all course_ids from notifications
            const courseIds = notifications.map((notification) => {
                const match = notification.message.match(/[?&]course_id=(\d+)/);
                return match ? match[1] : null;
            });

            // Remove null values (notifications without course_id)
            const validCourseIds = courseIds.filter((courseId) => courseId !== null);

            // Fetch data from the corresponding API endpoints for all valid course_ids
            const fetchDataForCourseIds = async () => {
                try {
                    const promises = validCourseIds.map(async (course_id) => {
                        const courseDataResponse = await apiServer.get(`/course/${course_id}`);
                        return courseDataResponse?.data;
                    });

                    const fetchedCourseDataArray = await Promise.all(promises);
                    // Do something with the fetched course data array
                    // console.log('Fetched Course Data Array:', fetchedCourseDataArray);
                    setCourseData(fetchedCourseDataArray);
                } catch (error) {
                    console.error('Error fetching course data:', error.response?.data || error.message);
                    // Handle the error if needed
                }
            };

            fetchDataForCourseIds();
        }
    }, [notifications, setCourseData]);

    useEffect(() => {
        return () => {
            // Cleanup function to cancel asynchronous operations when the component unmounts
        };
    }, []);

    const formatTimeDifference = (timestamp) => {
        const now = new Date();
        const createdTime = new Date(timestamp);
        const timeDifference = now - createdTime;

        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(timeDifference / (60 * 1000));
        const hours = Math.floor(timeDifference / (60 * 60 * 1000));
        const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

        if (seconds < 60) {
            return `${seconds} giây${seconds !== 1 ? '' : ''} trước`;
        } else if (minutes < 60) {
            return `${minutes} phút${minutes > 1 ? '' : ''} trước`;
        } else if (hours < 24) {
            return `${hours} giờ${hours > 1 ? '' : ''} trước`;
        } else if (days < 7) {
            return `${days} ngày${days > 1 ? '' : ''} trước`;
        } else {
            // If more than 7 days, display full date and time in ICT
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                timeZone: 'Asia/Ho_Chi_Minh', // Set timezone to ICT
            };
            return createdTime.toLocaleString('vn', options);
        }
    };


    return (
<div className="mx-auto max-w-xl  overflow-y-auto h-[400px]">
          {notifications.length > 0 ? (
            <>
              {notifications.map((notification, index) => (
                <div key={notification.notification_id}>
                  {courseData && courseData[index] ? (
                    <div
                    
                    onClick={() => handleNotificationClick(notification.notification_id)}
                    className={`mb-4 shadow-lg p-3 rounded relative cursor-pointer ${
                      notification.is_read == 0 ? 'bg-green-100' : 'bg-white'
                    }`}
                  >
                      <div className="text-left">
                        <div className="flex justify-between">
                          <div
                            className="font-semibold rounded text-left max-w-[70%]"
                          >
                            {notification.message.includes('?course_id=')
                              ? notification.message.replace(/\?.*$/, '')
                              : notification.message}
                          </div>
                          <p className="text-sm text-green-600 font-semibold justify-start">
                            {formatTimeDifference(notification.created_at)}
                          </p>
                        </div>
                        <div className="flex mt-2 justify-between items-center">
                          <div>
                            <img
                              className="mx-auto max-w-xs h-auto mr-3 rounded"
                              src={`${serverEndpoint}course/thumbnail/${courseData[index].thumbnail}`}
                              alt={courseData[index].thumbnail}
                              style={{ width: '100px' }}
                            />
                          </div>
                          <div className="md:max-w-[55%] max-w-[30%]">
                            <p className="text-lg text-orange-600 font-semibold truncate">
                              {courseData[index].name}
                            </p>
                          </div>
                          {notification.is_read > 0 ? (
                            <p className="text-sm text-blue-500 font-semibold">
                              Đã xem
                            </p>
                          ) : (
                            <p className="text-sm text-red-500 font-semibold">
                              Chưa xem
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                   
                    onClick={() =>
                        handleNotificationClick(notification.notification_id)
                      }
                      className={`mb-4 bg-white shadow-lg p-3 rounded relative ${
                        notification.is_read == 0 ? 'bg-green-100' : 'bg-white' // Apply background color based on read status
                      }`}
                    >
                      <div className="text-left">
                        <div className="flex justify-between">
                          <div
                            className="font-semibold rounded text-left max-w-[70%]"
                          >
                            {notification.message.includes('?course_id=')
                              ? notification.message.replace(/\?.*$/, '')
                              : notification.message}
                          </div>
                          <p className="text-sm text-green-600 font-semibold justify-start">
                            {formatTimeDifference(notification.created_at)}
                          </p>
                        </div>
                        <div className="flex mt-2 justify-end items-center">
                          {notification.is_read > 0 ? (
                            <p className="text-sm text-blue-500 font-semibold">
                              Đã xem
                            </p>
                          ) : (
                            <p className="text-sm text-red-500 font-semibold">
                              Chưa xem
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
             </div>
              ))}
            </>
          ) : (
            <h2 className="text-center">Chưa có thông báo</h2>
          )}
        </div>
      );
          };      


export default Notification;
