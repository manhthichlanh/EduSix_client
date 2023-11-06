import classNames from "classnames";
import { Link } from "react-router-dom";

function AccountCourse() {
  return (
    <div>
      <div className={classNames("grid grid-cols-12 gap-4")}>
        <div className="col-span-6 md:col-span-4">
          <div className="rounded-lg p-2 pb-3">
            <Link to="/" className="block w-full mb-4 overflow-hidden rounded">
              <img
                className="object-cover w-full h-full"
                src="../course.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4">đá</div>
        <div className="col-span-6 md:col-span-4">đá</div>
      </div>
    </div>
  );
}
export default AccountCourse;
