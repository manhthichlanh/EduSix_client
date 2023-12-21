import { Link } from "react-router-dom";
import { serverEndpoint } from "../../utils/http";
// import { serverEndpoint } from "../../utils/http";
export default function CateCard(props) {
  // eslint-disable-next-line react/prop-types
  const { image, cateName } = props;

  // Kiểm tra nếu image bắt đầu bằng 'http'
  const imageUrl = image.startsWith('http') ? image : `${serverEndpoint}category/logo_cate/${image}`;

  return (
    <div className="my-4">
      <div className="w-full py-10 shadow-md rounded-xl">
        <Link to="/">
          <img
            className="pb-6 mx-auto"
            src={imageUrl}
            alt=""
          />
        </Link>
        <p className="font-medium text-center text-">{cateName}</p>
      </div>
    </div>
  );
}
