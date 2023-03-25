import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { mapData } from "../MensSection.jsx/CarouselData";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export const Header = () => {
  const [open, setOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
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
    searchVal.length == 4 && setLoading(true);
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
      <>
        <div className="loader">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXdyazUyMWRranp5aDBncG16YW5qZm94MmlqZzg3bHVuYmtjbWV6ciZjdD1z/LNkvjiNPL7XyoR2I4F/giphy.gif"
            alt=""
          />
        </div>
      </>
    );
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="flex w-full items-center justify-between px-6  bg-primarybg">
        <Link to="/">
          <div>
            <img
              className="w-[50px] h-[50px]"
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fambaubeufwpravdy1xs/sb-zoom-blazer-mid-skate-shoes-ZLRvRZ.png"
              alt="logo"
            />
          </div>
        </Link>
        <div className="flex justify-around w-[16%]">
          <li className="list-none text-[12px]">Find Store </li>
          <li className="list-none text-[12px]">Join Us </li>
          <li className="list-none text-[12px]">Help </li>
          <li className="list-none text-[12px]">Sign In </li>
        </div>
      </div>
      <div className="visible ease-in duration-300 relative flex w-full justify-between items-center px-6">
        <Link to="/">
          <div className="w-[15%]">
            <img
              className="w-[250px] h-[50px]"
              src="https://freelogocreator.com/img/landingpage/one-4.png"
              alt="logo"
            />
          </div>
        </Link>
        <div
          className={` ${
            searchVal.length > 1 ? "hidden" : "visible"
          } header-component w-[40%] flex justify-around items-center pt-2`}
        >
          <Link to="/Men">
            <li className="list-none text-[18px] hover:underline hover:underline-offset-8 cursor-pointer">
              New & Featured
            </li>
          </Link>
          <Link to="/Men">
            <li
              onClick={() => setLoading(true)}
              className="list-none text-[18px] hover:underline hover:underline-offset-8 cursor-pointer"
            >
              Men
            </li>
          </Link>
          <Link to="/Men">
            <li className="list-none text-[18px] hover:underline hover:underline-offset-8 cursor-pointer">
              Women
            </li>
          </Link>
          <Link to="/Men">
            <li className="list-none text-[18px] hover:underline hover:underline-offset-8 cursor-pointer">
              Kids
            </li>
          </Link>
          <li
            onClick={() => setOpen(true)}
            className="list-none text-[18px] hover:underline hover:underline-offset-8 cursor-pointer"
          >
            Sale
          </li>
          <li
            onClick={() => setOpen(true)}
            className="list-none text-[18px] hover:underline hover:underline-offset-8 cursor-pointer"
          >
            SNKRS
          </li>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert onClose={() => setOpen(false)} severity="info">
              Module will update Shortly
            </Alert>
          </Snackbar>
        </div>
        <div
          className={
            searchVal.length > 1
              ? "items-center w-[65%] flex justify-between transition delay-300 duration-300 ease-in-out"
              : "items-center w-[20%] flex justify-between"
          }
        >
          <input
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            type="search"
            name="search"
            placeholder="Search Nike. . ."
            className={
              searchVal.length > 1
                ? "border text-[14px] w-[500px] bg-primarybg rounded-[30px] px-4 py-2  mt-3 focus:outline-none focus:ring-2 focus:ring-primarybg focus:border-transparent"
                : "border text-[14px]  bg-primarybg rounded-[30px] px-4 py-2 w-[200px] mt-3 focus:outline-none focus:ring-2 focus:ring-primarybg focus:border-transparent"
            }
          />
          {!searchVal.length ? (
            <>
              <Link to="/fav">
                <FavoriteBorderIcon />
              </Link>
              <Link to="/cart">
                <WorkOutlineIcon />
              </Link>
            </>
          ) : (
            <>
              <button
                className="ease-in duration-300"
                onClick={() => setSearchVal("")}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
      {searchVal.length > 3 && (
        <div className="bg-[#fff] w-full py-[1.5rem] absolute top-180 left-0 right-0 transition delay-300 duration-700 ease-in-out">
          <Carousel responsive={responsive} transitionDuration={100}>
            {mapData
              ?.filter((el) =>
                el.brand_name.toLowerCase().includes(searchVal.toLowerCase())
              )
              .map((el) => {
                return (
                  <Link to="/Men/shoe">
                    <div className="ExploreDiv px-6">
                      <img
                        className="ExploreDivImg bg-primarybg w-[95%]"
                        src={el.img}
                      />
                      <div className="flex justify-between w-[90%] mt-2">
                        <h1 className="font-medium">{el.brand_name}</h1>
                        <h1 className="font-medium">{el.price}</h1>
                      </div>
                      <p className="text-left text-[10px]">{el.priority}</p>
                    </div>
                  </Link>
                );
              })}
            {mapData?.filter((el) =>
              el.brand_name.toLowerCase().includes(searchVal.toLowerCase())
            ).length === 0 && <p className="text-center">No results found.</p>}
          </Carousel>
        </div>
      )}
      <div className="w-full bg-primarybg h-[50px] mt-3">
        <h1>{data[currentIndex].field}</h1>
        <u>
          <p className="text-[12px]">{data[currentIndex].desc}</p>
        </u>
      </div>
    </>
  );
};
