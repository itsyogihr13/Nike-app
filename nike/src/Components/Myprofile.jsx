import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import registration from "../assets/registration.mp4";
import Nike from "../assets/Nike.jpg";
export const ProfilePage = () => {
  const navigate = useNavigate();
  const registerData = useSelector((store) => store.user);
  return (
    <>
      <div className="flex justify-center ">
        <img className="h-40 w-auto" src={Nike} alt="logo" />
      </div>
      <div className="flex justify-evenly w-full items-center">
        <div>
          <video
            src={registration}
            width="800"
            height="400"
            autoPlay
            muted
          ></video>
        </div>
        <div className="bg-white shadow-lg min-h-auto flex justify-center items-center">
          <div className="bg-white-200 border-t-[2px] border-grey dark:bg-gray-800 p-8 rounded-lg shadow-xl w-96 relative ">
            <CloseIcon
              className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => navigate("/")}
            />
            <h1 className="text-2xl font-bold">User Profile</h1>
            <label htmlFor="" className=" text-sm font-light ">
              Nike Member Since August 2023
            </label>
            {registerData.map((user) => (
              <>
                <div className="mb-4 justify-between w-full flex pt-10">
                  <div className="text-gray-600 dark:text-gray-300 font-semibold ">
                    Name:
                  </div>
                  {user.name}
                </div>
                <div className="mb-4 justify-between w-full flex">
                  <div className="text-gray-600 dark:text-gray-300 font-semibold ">
                    Email:
                  </div>
                  {user.email}
                </div>

                <div className="mb-4 justify-between w-full flex">
                  <div className="text-gray-600 dark:text-gray-300 font-semibold ">
                    Mobile Number:
                  </div>
                  {user.Mobile_number}
                </div>
                <div className="mb-4 justify-between w-full flex">
                  <div className="text-gray-600 dark:text-gray-300 font-semibold ">
                    Age{" "}
                  </div>
                  {user.age}
                </div>
              </>
            ))}
            <div className="flex justify-center space-x-4 mt-8">
              <Link
                to="/cart"
                className=" bg-black text-white w-full px-4 py-2 rounded-md hover:bg-stone-1000 transition duration-300 mt-6"
              >
                Go to Cart
              </Link>
              <Link
                to="/fav"
                className=" bg-black text-white w-full px-4 py-2 rounded-md hover:bg-stone-1000 transition duration-300 mt-6"
              >
                Go to Favorites
              </Link>
            </div>
            <button
              onClick={() => navigate("/")}
              style={{
                backgroundColor: "black",
              }}
              type="submit"
              className=" text-white w-full px-4 py-2 rounded-md hover:bg-stone-1000 transition duration-300 mt-6"
            >
              Back to shoping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
