import { useState, useEffect } from 'react';
import { useUser } from '../../utils/UserAPI';
import { apiServer } from '../../utils/http';
import Card from "../../components/Card/Card";

function AccountCourse() {
  const { user } = useUser();
  const users = user?.userDetails || {};
  const user_id = users.user_id;

  const [courseProgresses, setCourseProgresses] = useState([]);
  const [courseDetails, setCourseDetails] = useState([]);

  useEffect(() => {
    const fetchCourseProgresses = async () => {
      try {
        const response = await apiServer.get(`/admin-query/getAllCourseProgressByUser?user_id=${user_id}`);
        setCourseProgresses(response.data.course_progresses_doc || []);
      } catch (error) {
        console.error('Error fetching course progresses:', error);
      }
    };

    fetchCourseProgresses();
  }, [user_id]);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const courseDetailsPromises = courseProgresses.map(async (progress) => {
          if (progress && progress.course_id) {
            try {
              const response = await apiServer.get(`/course/${progress.course_id}`);
              return response.data;
            } catch (error) {
              console.error('Error fetching course details:', error);
              return null;
            }
          } else {
            return null;
          }
        });
  
        const resolvedCourseDetails = (await Promise.all(courseDetailsPromises)).filter(Boolean);
  
        // Assuming 'course_id' is a numeric value, use a compare function to sort by 'course_id' in descending order
        const sortedCourseDetails = resolvedCourseDetails.sort((a, b) => b.course_id - a.course_id);
  
        setCourseDetails(sortedCourseDetails);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };
  
    fetchCourseDetails();
  }, [courseProgresses]);
  

  return (
    <div className="flex flex-col items-center justify-between col-span-12 lg:col-span-9">
      {courseDetails.length > 0 ? (
      <div className="grid grid-cols-12 gap-6">
          {courseDetails.map((courseDetail) => (
            <div className="col-span-12 lg:col-span-4 md:col-span-6" key={courseDetail.course_id}>
              <div className="rounded-lg p-2 pb-2">
                <Card
                  course_id={courseDetail.course_id}
                  thumbnail={courseDetail.thumbnail}
                  category={courseDetail.cate_name}
                  price={courseDetail.course_price}
                  cateId={courseDetail.category_id}
                  name={courseDetail.name}
                  rating={courseDetail.rating}
                  joiner={courseDetail.joiner}
                />
              </div>
            </div>
          ))}
      
      </div>
        ) : (
          <i>Không có khóa học nào đã đăng kí</i>
        )}
    </div>
  );
}

export default AccountCourse;
