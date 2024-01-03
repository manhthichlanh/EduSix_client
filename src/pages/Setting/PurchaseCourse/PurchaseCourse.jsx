
import  PurchaseAPI  from '../../../utils/PurchaseAPI';
import Card from "../../../components/Card/Card";
const PurchaseCourse = () => {
    const {courseDataList} = PurchaseAPI();
    return (
        <div className="flex flex-col items-center justify-between col-span-12 lg:col-span-9">
        {courseDataList.length > 0 ? (
        <div className="grid grid-cols-12 gap-6">
            {courseDataList.map((courseDetail) => (
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
            <i>Không có khóa học nào đã mua</i>
          )}
      </div>
  
    );
};

export default PurchaseCourse;