import { useState } from "react";
import { Header } from "../Header/Header";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { mapData } from "../MensSection.jsx/CarouselData";
import FasionVideo from "./nikeFasion.mp4";
import { Footer } from "../Header/Footer";
export const WomentOverview = () => {
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
              Women
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
        <video
          src={FasionVideo}
          width="1800"
          height="500"
          autoPlay
          muted
        ></video>

        <div className="text-center w-[80%]  m-auto pt-[2rem]">
          <p className="font-black text-[65px] tracking-[-1px] mt-3 ">
            FOR ALL THAT MOVES YOU
          </p>
          <h1 className="font-medium mt-2">
            Find fitness gear for all the ways you move
          </h1>
          <Link to="/Men/shoe">
            <button className="primaryblk-button mt-6 rounded-[10%]">
              Explore Fitness
            </button>
          </Link>
        </div>
        <h1 className="text-[30px] font-medium text-left mt-8">
          Running Shoe Finder
        </h1>
        <img
          className="mt-[2rem] w-full"
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/79b1ad80-0e05-4685-ac34-a80f9bd76bd7/women-s-shoes-clothing-accessories.jpg"
          alt=""
          srcset=""
        />
        <h1 className="text-[30px] font-medium text-left mt-[4rem] mb-6">
          Popular Right Now
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
                    <h1 className="font-medium">{el.price}</h1>
                  </div>
                  <p className="text-left text-[14px]">{el.priority}</p>
                </div>
              </Link>
            );
          })}
        </Carousel>
        <h1 className="text-[30px] font-bold text-left mt-8 mb-6">
          Move With US{" "}
        </h1>
        <div className="w-full">
          <div className="flex w-full justify-between">
            <img
              className="w-[49.5%]"
              src="https://wallpaper.dog/large/9774.jpg"
              alt=""
              srcset=""
            />
            <img
              className="w-[49.5%]"
              src="https://c4.wallpaperflare.com/wallpaper/145/197/232/glass-nike-sportswear-sports-wallpaper-preview.jpg"
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
          STEP INTO WHAT FEELS GOD
        </h1>
        <Link to="/Men/shoe">
          <div className="flex w-full justify-between h-[500px]">
            <img
              className="w-[32.8%]"
              src="https://c4.wallpaperflare.com/wallpaper/527/763/696/women-maksim-romanov-portrait-belly-wallpaper-preview.jpg"
              alt=""
            />
            <img
              className="w-[32.8%]"
              src="https://cdn.shopify.com/s/files/1/0603/3031/1875/products/3_0e311f09-3599-490a-a0b6-223fbdb8fb42_540x.jpg?v=1656974788"
              alt=""
            />
            <img
              className="w-[32.8%]"
              src="https://i.pinimg.com/736x/6e/b1/43/6eb14325ab51fb404dd55912354b5693.jpg"
              alt=""
            />
          </div>
        </Link>
        <img
          className="w-full mt-16"
          src="https://thumbs.dreamstime.com/b/nike-running-store-stanford-shopping-center-27212819.jpg"
          alt=""
          srcset=""
        />
      </div>
      <Footer />
    </>
  );
};
