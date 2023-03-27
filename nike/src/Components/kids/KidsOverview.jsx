import { useState } from "react";
import { Header } from "../Header/Header";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { mapData } from "../MensSection.jsx/CarouselData";
import kidfasion from "./menfasion.mp4";
import { Footer } from "../Header/Footer";
export const KidsOverview = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  function scrollToTop(e) {
    window.scrollTo({ top: e, behavior: "smooth" }); // Scroll to the top with a smooth animation
  }
  return (
    <>
      <Header setSearch={setSearch} />
      <div className="px-6">
        <div
          className={` ${
            search.length > 3 ? "" : "sticky top-[0px]"
          }  w-full bg-[#fff]`}
        >
          <div className="flex w-[60%] justify-between ">
            <h1
              onClick={() => scrollToTop(0)}
              className={`cursor-pointer text-[20px] font-bold text-left mt-5 mb-4 `}
            >
              Kids
            </h1>
            <div className="flex  items-center justify-center justify-between w-[30%]">
              <Link to="/Men/shoe">
                <li className="list-none text-[16px] hover:text-[#c9c9c9c] cursor-pointer">
                  Shoes
                </li>
              </Link>
              <li
                onClick={() => setOpen(true)}
                className="list-none text-[16px] hover:text-[#c9c9c9c] cursor-pointer"
              >
                Clothing
              </li>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <Alert onClose={() => setOpen(false)} severity="info">
                  Module will be updated soon
                </Alert>
              </Snackbar>
              <li
                onClick={() => setOpen(true)}
                className="list-none text-[16px] hover:text-[#c9c9c9c] cursor-pointer"
              >
                Gear
              </li>
            </div>
          </div>
        </div>
        <video src={kidfasion} width="1800" height="500" autoPlay muted></video>
        <div className="text-center w-[80%]  m-auto pt-[2rem]">
          <p className="font-black text-[65px] tracking-[1px] mt-3 leading-[4.5rem] ">
            INTRODUCING <br /> AIR MAX 270 GO
          </p>
          <h1 className="font-medium mt-4">
            Couse everyone know the feeling of running in that perfect pair
          </h1>
          <Link to="/Men/shoe">
            <button className="primaryblk-button mt-6 rounded-[10%]">
              Shop Kids Air
            </button>
          </Link>
        </div>
        <h1 className="text-[30px] font-medium mt-12 mb-6 text-left">
          See for All
        </h1>
        <Carousel responsive={responsive} transitionDuration={1000}>
          {mapData?.map((el) => {
            return (
              <Link to="/Men/shoe">
                <div className="ExploreDiv">
                  <img
                    className="ExploreDivImg bg-primarybg w-[95%]"
                    src={el.img}
                    alt=""
                  />
                  <div className="flex justify-between w-[90%] mt-4">
                    <h1 className="font-medium">{el.brand_name}</h1>
                    <h1 className="font-medium">{`MRP: ₹ ${el.price}`}</h1>
                  </div>
                  <p className="text-left text-[14px]">{el.priority}</p>
                </div>
              </Link>
            );
          })}
        </Carousel>
        <h1 className="text-[30px] font-bold text-left mt-8 mb-6">
          Jordon Apprel
        </h1>
        <div className="w-full">
          <div className="flex w-full justify-between">
            <img
              className="w-[49.5%]"
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6e0ebbf7-c636-43d8-8662-8a9a6a9b93f8/icon-fleece-older-oversized-pullover-basketball-hoodie-2TQPfF.png"
              alt=""
              srcset=""
            />
            <img
              className="w-[49.5%]"
              src="https://c8.alamy.com/comp/EH9523/child-model-walks-the-runway-at-the-nike-levis-kids-fashion-show-during-EH9523.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div className="text-center w-[80%]  m-auto pt-[2rem]">
            <p className="font-black text-[65px] tracking-[1px] mt-3 ">
              FLIGHT ESSENTIALS
            </p>
            <h1 className="font-medium mt-2">
              Your build-to-last, all week wears--but with style only Jordon
              Brand can deliver
            </h1>
            <button
              onClick={() => scrollToTop(1100)}
              className="primaryblk-button mt-6 rounded-[10%]"
            >
              Shop
            </button>
          </div>
        </div>
        <h1 className="text-[30px] font-bold text-left mt-8 mb-6">
          The Essentials
        </h1>
        <Link to="/Men/shoe">
          <div className="flex w-full justify-between">
            <img
              className="w-[32.8%]"
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/9d4f361b-1bb9-4694-a98a-cef0002a82f5/sportswear-club-fleece-older-hoodie-djwZZv.png"
              alt=""
            />
            <img
              className="w-[32.8%]"
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/6c44660b-2a6c-4770-9215-82f03eb53e71/sportswear-trend-older-high-waisted-woven-shorts-SFpjwL.png"
              alt=""
            />
            <img
              className="w-[32.8%]"
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/d91c18a4-624f-4c8a-96f1-51ccb24b7bd2/outdoor-play-older-short-sleeve-top-Vh4zzH.png"
              alt=""
            />
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};
