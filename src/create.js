import { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Create = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { first_name, last_name };

    fetch("http://localhost:4000/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="create text-center  mt-5 ">
      <div className="flex  justify-center  mr-96  pt-40 ">
        <Link to={"/"} className={"font-extrabold "}>
          <AiOutlineArrowLeft className="  mt-1 mr-2" />
        </Link>

        <h2 className="font-bold">Add a New Customer</h2>
      </div>
      <form onSubmit={handleSubmit} className="  ml-52  mt-14  ">
        <div className="flex justify-center">
          <input
            type="text"
            required
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            placeholder={"First Name"}
            className="
          form-control
          block
          w-[400px]
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
           mr-2
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
           "
          />
          <input
            type="text"
            required
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            placeholder={"Last Name"}
            className="
          form-control
          block
          w-[400px]
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>
        <button className=" bg-gray-700 hover:bg-gray-900  text-white font-bold py-1 px-4 border border-gray-900 rounded w-[300px] mt-4  block float-right  mr-[175px]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
