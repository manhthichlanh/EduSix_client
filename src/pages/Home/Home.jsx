import classNames from "classnames";
import Card from "../../components/Card/Card";
import Dropdown from "../../components/Dropdown";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
// import Marketing from "../../components/commom/icons";
import Marketing from "../../components/commom/icons/Marketing";
import Button from "../../components/button/Button";
const data = [
  {
    image: "/course.png",
    category: "Marketing",
    cateId: 1,
    price: 299000,
    name: "Khóa học Thiết kế đồ họa cơ bản",
    rating: 4.5,
    joiner: 150,
  },
  {
    image: "/course.png",
    category: "Lập trình",
    cateId: 2,
    price: 499000,
    name: "Khóa học Lập trình web JavaScript",
    rating: 4.8,
    joiner: 200,
  },
  {
    image: "/course.png",
    category: "Thiết kế đồ họa",
    cateId: 3,
    price: 0,
    name: "Khóa học Quản lý doanh nghiệp",
    rating: 4.2,
    joiner: 120,
  },
  {
    image: "/course.png",
    category: "Ngôn ngữ",
    cateId: 4,
    price: 799000,
    name: "Khóa học Quản lý doanh nghiệp",
    rating: 4.2,
    joiner: 120,
  },
  {
    image: "/course.png",
    category: "Tài chính",
    cateId: 5,
    price: 799000,
    name: "Khóa học Quản lý doanh nghiệp",
    rating: 4.2,
    joiner: 120,
  },
  {
    image: "/course.png",
    category: "Photography",
    cateId: 6,
    price: 0,
    name: "Khóa học Quản lý doanh nghiệp",
    rating: 4.2,
    joiner: 120,
  },
];
export default function Home(props) {
  return (
    <>
      
      <div
        className={classNames(
          "grid grid-cols-1 gap-4 px-4 my-4",
          "sm:grid-cols-2 sm:gap-3 sm:px-4",
          "lg:grid-cols-4 lg:gap-4 lg:px-0"
        )}
      >
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </>
  );
}
