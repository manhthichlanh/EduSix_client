

import { useEffect, useState } from 'react';
// import { jwtDecode } from 'jwt-decode';
import { apiServer } from '../utils/http';
import { useNavigate } from "react-router-dom";
export const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserDetails = async () => {
        const token = localStorage.getItem('manual_token');
        if (token) {
            try {
                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                };
                const response = await apiServer.post(`auth/verify/user`, {}, config);
                const userDetails = response.data.user;
// console.log(userDetails);
                
                setUser((prevUser) => ({
                    ...prevUser,
                    userDetails,
                }));
            } catch (error) {
                // Handle errors, including token expiration
                console.error('Error fetching user details:', error);
            }
        }

        setIsLoading(false);
    };

    fetchUserDetails();
}, []);

  const handleLogout = () => {
    localStorage.removeItem('manual_token');
    setUser(null);
    navigate("/login")
  };

  return { user, isLoading, handleLogout, navigate };
};
