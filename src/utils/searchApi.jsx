// searchApi.jsx
import { apiServer } from '../utils/http';
import { useState, useEffect } from 'react';

export const useSearchCourse = () => {
  const [courseData, setCourseData] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadOnce, setReloadOnce] = useState(false); 

  useEffect(() => {

    const storedCourseData = localStorage.getItem('courseData');
    const storedSearchKeyword = localStorage.getItem('searchKeyword');

    if (storedCourseData && storedSearchKeyword) {
      setCourseData(JSON.parse(storedCourseData));
      setSearchKeyword(storedSearchKeyword);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, []);

  const searchCourse = async (keyword, navigate) => {
    setIsLoading(true);
    try {
      const response = await apiServer.get(`/admin-query/searchCourse/${keyword}`);
      const data = response.data;
      setCourseData(data);
      setSearchKeyword(keyword);

      // Save the course data and search keyword to local storage
      localStorage.setItem('courseData', JSON.stringify(data));
      localStorage.setItem('searchKeyword', keyword);


      if (!reloadOnce) {
        const currentPath = window.location.pathname;
        if (currentPath === '/course-search') {

          window.location.reload();
          
        } else {
          navigate(`/course-search`);
          setReloadOnce(true);
          window.location.reload(); 
        }
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { courseData, searchKeyword, isLoading, searchCourse };
};
