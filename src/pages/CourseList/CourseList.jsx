
import { useSearchCourse } from '../../utils/searchApi';
import Card from "../../components/Card/Card";

const CourseList = () => {
    const { courseData, searchKeyword, isLoading } = useSearchCourse();

    return (
        <div className='p-3'>
            <h1 style={{ color: '#FF6636', fontSize: '22px', fontWeight: 600 }}>Tìm Kiếm: <i>{searchKeyword}</i></h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : courseData && courseData.length > 0 ? (
                <div className="grid grid-cols-12 gap-6">
                    {courseData.map((course) => (
                        <div className={`col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3`} key={course?.course_id}>
                            <div className="rounded-lg p-2 pb-2">
                                <Card
                                    course_id={course.course_id}
                                    thumbnail={course.thumbnail}
                                    category={course.cate_name}
                                    cateId={course.category_id}
                                    price={course.course_price}
                                    name={course.name}
                                    rating={course.rating}
                                    joiner={course.joiner}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            ) : (
                <p>Không tìm thấy khóa học nào.</p>
            )}
        </div>
    );
};

export default CourseList;
