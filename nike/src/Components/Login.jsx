import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";
import nikevideo from "../assets/nikevideo.mp4";
import Nike from "../assets/Nike.jpg";
const LoginPage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const registerData = useSelector((store) => store.user);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevValue) => !prevValue);
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (!isChecked) {
      newErrors.isChecked = "Please check the checkbox";
    }
    const registeredUser = registerData.find(
      (user) => user.email !== formData.email
    );

    if (registeredUser) {
      newErrors.email = "Invalid Email";
    }

    if (registeredUser && registeredUser.password !== formData.password) {
      newErrors.password = "Invalid password";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handlePassword = () => {
    setShow((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const registeredUser = registerData.find(
        (user) => user.email === formData.email
      );

      if (registeredUser && registeredUser.password === formData.password) {
        alert("User login Successfully");
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    }
  };
  return (
    <>
      <div className="flex justify-center ">
        <img className="h-40 w-auto" src={Nike} alt="logo" />
      </div>
      <div className="flex justify-evenly w-full items-center">
        <div>
          <video
            src={nikevideo}
            width="800"
            height="400"
            autoPlay
            muted
          ></video>
        </div>

        <div className=" flex items-center justify-center">
          <div className="w-[90%] max-w-md p-6 bg-white rounded-md shadow-xl border-t border-grey relative">
            <CloseIcon
              className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => navigate("/")}
            />
            <h2 className="text-2xl font-semibold mb-4">Sign IN</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mt-4 text-left"
                >
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.name && (
                  <div className="text-red-500 text-left">{errors.name}</div>
                )}

                <label
                  htmlFor="password"
                  className="block text-sm font-medium mt-4 text-left"
                >
                  Password:
                </label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <span
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={handlePassword}
                  >
                    {!show ? (
                      <AiFillEyeInvisible size={24} color="black" />
                    ) : (
                      <AiFillEye size={24} color="black" />
                    )}
                  </span>
                </div>
                {errors.password && (
                  <div className="text-red-500 text-left">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-black"
                />
                <p className=" text-sm font-light text-left ">Keep Sign In</p>
              </div>
              {errors.isChecked && (
                <div className="text-red-500 text-left">{errors.isChecked}</div>
              )}
              <br />
              <p htmlFor="" className=" text-sm font-light ">
                By logging in, you agree to Nike's Privacy Policy and Terms of
                Use.
              </p>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-stone-1000 transition duration-300 w-full mt-4"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
