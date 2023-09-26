import { useState, React } from "react";
import { Header } from "../Header/Header";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { mapData } from "./CarouselData";
import menfasion from "./menfas.mp4";
import { Footer } from "../Header/Footer";
import { Loading } from "../Loading";

export const MensOverview = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
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
      {loading && <Loading />}
      <>
        {!loading && <Header setSearch={setSearch} />}
        <div className="px-6">
          <div
            className={`w-full bg-[#fff] ${
              search.length > 3 && loading ? "sticky top-[0px]" : ""
            }`}
          >
            <div className="flex w-[60%] justify-between ">
              <h1
                onClick={() => scrollToTop(0)}
                className={`cursor-pointer text-[20px] font-bold text-left mt-5 mb-4 `}
              >
                The Essentials
              </h1>
              <div className="flex  items-center justify-between w-[30%]">
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
            src={menfasion}
            width="1800"
            height="500"
            autoPlay
            muted
            onLoadedData={() => setLoading(false)}
          ></video>
          <div className="text-center w-[80%]  m-auto pt-[2rem]">
            <p className="font-black text-[65px] tracking-[1px] mt-3 ">
              STEP INTO WHAT FEELS GOOD
            </p>
            <h1 className="font-medium mt-2">
              Couse everyone know the feeling of running in that perfect pair
            </h1>
            <Link to="/Men/shoe">
              <button className="primaryblk-button mt-6 rounded-[10%]">
                Find your Shoe
              </button>
            </Link>
          </div>
          <h1 className="text-[30px] font-bold text-left">Best of Air Max</h1>
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
            Jordon Apprel
          </h1>
          <div className="w-full">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/f26acfc4-0505-4c2d-ae46-f5696f4c7674/nike-just-do-it.jpg"
              alt=""
              srcset=""
            />
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
                src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_473,c_limit/add981fc-05de-4468-9196-cd9a238a6dde/men-s-shoes-clothing-accessories.png"
                alt=""
              />
              <img
                className="w-[32.8%]"
                src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_473,c_limit/44811b80-9be8-41a8-b57b-6a1a5a6f1987/men-s-shoes-clothing-accessories.png"
                alt=""
              />
              <img
                className="w-[32.8%]"
                src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_473,c_limit/076e7230-4dff-474c-a933-4fcdc920271d/men-s-shoes-clothing-accessories.png"
                alt=""
              />
            </div>
          </Link>
          <img
            className="w-full mt-16"
            src="https://images.unsplash.com/photo-1637666725970-53822683726a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
      </>
      <Footer />
    </>
  );
};
