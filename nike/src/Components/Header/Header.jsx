import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const data = [
    {
      field: `Save Up to 40% Shop`,
      desc: ` All Our New Markdowns`,
    },
    {
      field: `Hello Nike App`,
      desc: `Download the app to access everything Nike. Get Your Great`,
    },
    {
      field: `Free Delivery`,
      desc: `Applies to orders of ₹ 14 000.00 or more. View details`,
    },
  ];

  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    searchVal.length > 2 ? setLoading(true) : <></>;
  }, [searchVal]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return (
      <div className="loader">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXdyazUyMWRranp5aDBncG16YW5qZm94MmlqZzg3bHVuYmtjbWV6ciZjdD1z/LNkvjiNPL7XyoR2I4F/giphy.gif"
          alt=""
        />
      </div>
    );
  }
  return (
    <>
      <div className="flex w-full items-center justify-between px-6  bg-primarybg">
        <div>
          <img
            className="w-[50px] h-[50px]"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fambaubeufwpravdy1xs/sb-zoom-blazer-mid-skate-shoes-ZLRvRZ.png"
            alt="logo"
          />
        </div>
        <div className="flex justify-around w-[16%]">
          <li className="list-none text-[12px]">Find Store </li>
          <li className="list-none text-[12px]">Join Us </li>
          <li className="list-none text-[12px]">Help </li>
          <li className="list-none text-[12px]">Sign In </li>
        </div>
      </div>
      <div className="visible flex w-full justify-between items-center px-6">
        <div className="w-[18%]">
          <img
            className="w-[50px] h-[50px]"
            src="https://masterbundles.com/wp-content/uploads/2022/03/1-nike-logo-design-%E2%80%93-history-meaning-and-evolution.png"
            alt="logo"
          />
        </div>
        <div
          className={
            searchVal.length > 1
              ? "header-component hidden w-[40%] flex justify-around items-center pt-2"
              : "header-component visible w-[40%] flex justify-around items-center pt-2"
          }
        >
          <li className="list-none text-[18px] hover:underline hover:underline-offset-8 cursor-pointer">
            New & Featured
          </li>
          <Link to="/Men">
            <li
              onClick={() => setLoading(true)}
              className="list-none text-[18px] hover:underline hover:underline-offset-8 cursor-pointer"
            >
              Men
            </li>
          </Link>
          <Link to="/Men">
            <li
              onClick={() => setLoading(true)}
              className="list-none text-[18px] hover:underline hover:underline-offset-8 cursor-pointer"
            >
              Women
            </li>
          </Link>
          <li className="list-none text-[18px] hover:underline hover:underline-offset-8 cursor-pointer">
            Kids
          </li>
          <li className="list-none text-[18px] hover:underline hover:underline-offset-8 cursor-pointer">
            Sale
          </li>
          <li className="list-none text-[18px] hover:underline hover:underline-offset-8 cursor-pointer">
            SNKRS
          </li>
        </div>
        <div
          className={
            searchVal.length > 1
              ? "items-center w-[65%] flex justify-between"
              : "items-center w-[20%] flex justify-between"
          }
        >
          <input
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            type="search"
            name="search"
            placeholder="Search..."
            className={
              searchVal.length > 1
                ? "border text-[14px] w-[500px] bg-primarybg rounded-[30px] px-4 py-2  mt-3 focus:outline-none focus:ring-2 focus:ring-primarybg focus:border-transparent"
                : "border text-[14px]  bg-primarybg rounded-[30px] px-4 py-2 w-[200px] mt-3 focus:outline-none focus:ring-2 focus:ring-primarybg focus:border-transparent"
            }
          />
          {!searchVal.length && (
            <>
              <FavoriteBorderIcon />
              <WorkOutlineIcon />
            </>
          )}
        </div>
      </div>
      <div className="w-full bg-primarybg h-[50px] mt-3">
        <h1>{data[currentIndex].field}</h1>
        <u>
          <p className="text-[12px]">{data[currentIndex].desc}</p>
        </u>
      </div>
    </>
  );
};
