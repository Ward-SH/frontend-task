import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HiPlus } from "react-icons/hi";
import { BiPencil } from "react-icons/bi";
import { BsFillTrashFill, BsPeople } from "react-icons/bs";

function CustomersList() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/customers");
    if (response && response.data) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (id) => {
    fetch("http://localhost:4000/customers/" + id, {
      method: "DELETE",
    });
  };

  return (
    <div className="flex flex-col  ml-[350px] mt-20 md:mr-10 w-80 md:w-[920px] ">
      <div className="overflow-x-auto">
        <div className="flex justify-between py-3 pl-2">
          <div className="relative max-w-xs">
            <label htmlFor="hs-table-search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              name="hs-table-search"
              id="hs-table-search"
              className="block w-full p-3 pl-10 text-sm border-gray-400 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-gray-700 dark:text-gray-400"
              placeholder="Search Customers..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>

          <Link to={"/create"} className="flex items-center space-x-2 ">
            <div className="relative ">
              <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600  border border-gray-300 bg-gray-200 rounded-md sm:py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path />
                    </svg>
                  </div>
                  <div className=" flex  justify-start ">
                    <HiPlus className="  mt-1" />
                    Add Customers
                  </div>
                </span>
              </button>
            </div>
          </Link>
        </div>

        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className=" px-72 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className=" px-32 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              {/* ///////////////////////////////////////////////// */}
              <tbody className="divide-y divide-gray-200">
                {data.map((single) => {
                  return (
                    <tr key={single.id}>
                      <td className=" px-2 md:px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {single.id}
                      </td>
                      <td className="   md:px-2 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                        {`${single.first_name} ${single.last_name}`}
                      </td>
                      <td className="px-6 py-4 text-sm text-center font-medium  whitespace-nowrap flex  justify-center">
                        <Link
                          to={"/Edit"}
                          className="text-gray-600 hover:text-green-700 px-2 text-lg "
                        >
                          <BiPencil />
                        </Link>

                        <button
                          className="text-gray-600 hover:text-red-700 "
                          onClick={() => handleClick(single.id)}
                        >
                          <BsFillTrashFill />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersList;
