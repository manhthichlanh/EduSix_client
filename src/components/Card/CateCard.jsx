import { Link } from "react-router-dom";

export default function CateCard(props) {
  // eslint-disable-next-line react/prop-types
  const { image, cateName } = props;
  return (
    <div className="col-span-6 lg:col-span-2 md:col-span-4">
      <div className="w-full py-10 shadow-md rounded-xl">
        <Link to="/">
          <img className="pb-6 mx-auto" src={image} alt="" />
        </Link>
        <p className="font-medium text-center text-">{cateName}</p>
      </div>
    </div>
  );
}
