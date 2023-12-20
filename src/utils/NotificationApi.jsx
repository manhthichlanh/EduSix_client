// NotificationApi.jsx
import { useState, useEffect } from 'react';
import { apiServer } from '../utils/http';
import { useUser } from '../utils/UserAPI';

export const useNotificationProvider = () => {
  const { user } = useUser();
  const users = user?.userDetails || {};
  const user_id = users.user_id;
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        const response = await apiServer.get(`/notification/getNotification?who=client&receiver=${user_id}`);
        const allNotifications = response.data;

       
        const filteredNotifications = allNotifications.filter(notification => notification.type === 1);

     
        const unreadNotifications = filteredNotifications.filter(notification => !notification.is_read);

        setNotifications(filteredNotifications);
        setUnreadCount(unreadNotifications.length);
      } catch (error) {
        setError(error.message || 'Error fetching notifications');
      } finally {
        setLoading(false);
      }
    };

    const handleLocationChange = () => {
     
      if (user_id) {
        fetchNotifications();
      }
    };

    window.addEventListener('popstate', handleLocationChange);

    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [user_id, window.location.pathname]);

  return { notifications, setNotifications, loading, error, unreadCount };
};
