import { Link } from "react-router-dom";
import { AiOutlineTeam } from "react-icons/ai";
const Panel = () => {
  return (
    <div className="panel   border-2  border-gray-900  min-h-[100vh]  bg-gray-900 top-0 left-0   fixed   w-40  md:w-80 ">
      <div className="settings">
        <h2 className=" text-white  font-bold  text-2xl ml-2 mt-4 mb-4">
          Front End Task &lt;
        </h2>
        <Link
          to={"/"}
          className=" flex justify-center text-white hover:text-blue-400 pl-4   md:pr-40 py-2 ml-6  mr-6 hover:bg-gray-700 rounded cursor-pointer text-md  font-semibold
          pr-5"
        >
          <AiOutlineTeam className="text-2xl" /> customers
        </Link>
      </div>
    </div>
  );
};

export default Panel;
