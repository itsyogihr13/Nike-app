import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/Action";
import { useNavigate, Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";
import registration from "../assets/registration.mp4";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    Mobile_number: "",
    age: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateMobileNumber = (mobileNumber) => {
    const mobilePattern = /^[0-9]{10}$/;
    return mobilePattern.test(mobileNumber);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!validateMobileNumber(formData.Mobile_number)) {
      newErrors.Mobile_number = "Invalid mobile number format";
    }

    if (!formData.age) {
      newErrors.age = "Invalid age format";
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
      alert("User Registred successfully");
      navigate("/login");
      dispatch(loginUser(formData));
    }
  };
  return (
    <>
      <div style={{ position: "absolute", zIndex: 0 }}>
        <video
          src={registration}
          width="1800"
          height="200"
          autoPlay
          muted
        ></video>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
        className="min-h-screen flex justify-center items-center"
      >
        <div className="bg-white p-8 pt-2 rounded-md shadow-md w-[90%] md:w-1/2 lg:w-1/3">
          <Link to="/">
            <div className="flex justify-between items-center mb-4">
              <img
                className="w-[50px] h-[50px]"
                src="https://freelogocreator.com/img/landingpage/one-4.png"
                alt="logo"
              />
              <CloseIcon />
            </div>
          </Link>

          <h2 className="text-2xl font-bold mb-3">
            Your Account for
            <br />
            Everthing Nike.
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-left text-sm font-medium"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <div className="text-red-500 text-left">{errors.name}</div>
              )}
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
              {errors.email && (
                <div className="text-red-500 text-left">{errors.email}</div>
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
                  className="w-full mt-1 px-3 py-2 border rounded-md  focus:outline-none focus:border-blue-500"
                />
                <span
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={handlePassword}
                >
                  {show ? (
                    <AiFillEyeInvisible size={24} color="black" />
                  ) : (
                    <AiFillEye size={24} color="black" />
                  )}
                </span>
              </div>

              {errors.password && (
                <div className="text-red-500 text-left">{errors.password}</div>
              )}

              <label
                htmlFor="Mobile_number"
                className="block text-sm font-medium mt-4 text-left"
              >
                Mobile number:
              </label>
              <input
                type="number"
                min="10"
                id="Mobile_number"
                name="Mobile_number"
                value={formData.Mobile_number}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.Mobile_number && (
                <div className="text-red-500 text-left">
                  {errors.Mobile_number}
                </div>
              )}
              <label
                htmlFor="age"
                className="block text-sm font-medium mt-4 text-left"
              >
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.age && (
                <div className="text-red-500 text-left">{errors.age}</div>
              )}
            </div>
            <p className="text-center font-grey text-sm">
              By creating an account, you agree to Nike's Privacy Policy and
              Terms of Use.
            </p>
            <button
              style={{
                backgroundColor: "black",
              }}
              type="submit"
              className=" text-white w-full px-4 py-2 rounded-md hover:bg-stone-1000 transition duration-300 mt-6"
            >
              Join Us
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
