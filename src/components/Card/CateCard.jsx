import { Link } from "react-router-dom";

// import { serverEndpoint } from "../../utils/http";
export default function CateCard(props) {
  // eslint-disable-next-line react/prop-types
  const { image, cateName } = props;
  return (
    <div className="my-4">
      <div className="w-full py-10 shadow-md rounded-xl">
        <Link to="/">
          <img style={{borderRadius:"50%", width:"70px", height:"70px"}}
            className="mx-auto mb-3"
            src={`${image}`}
            alt=""
          />
        </Link>
        <p className="font-medium text-center text-">{cateName}</p>
      </div>
    </div>
  );
}
