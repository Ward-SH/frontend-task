import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found  text-center mt-48   ">
      <h2 className=" pb-4">Sorry</h2>
      <p className="pb-4">That page cannot be found</p>
      <Link
        to="/"
        className=" border-solid  border-black  border-2  bg-black text-white rounded-full    "
      >
        Back to the homepage...
      </Link>
    </div>
  );
};

export default NotFound;
