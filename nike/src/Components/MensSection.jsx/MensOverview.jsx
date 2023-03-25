import { useState } from "react";
import { Header } from "../Header/Header";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
export const MensOverview = () => {
  const [open, setOpen] = useState(false);

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
  const mapData = [
    {
      img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_476,c_limit/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png",
      brand_name: "Nike Air Force 1 07",
      price: "7,456",
      priority: "Men's Shoes",
    },
    {
      img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_476,c_limit/bc376c3e-fb23-4d59-a9ff-e2407eaf1c8d/nikecourt-legacy-suede-shoes-QcMfd3.png",
      brand_name: "Nike Air Max SYSTM",
      price: "6,480",
      priority: "Older Kids Shoes",
    },
    {
      img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_476,c_limit/5709aa61-4952-406f-9b9e-83aa19e05492/dri-fit-woven-training-jacket-j0PLdZ.png",
      brand_name: "Nike Dry FIT",
      price: "3,595",
      priority: "Mens Woment Training Jacket",
    },
    {
      img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_476,c_limit/2246d930-e04a-4ff7-84a1-2736b38daffe/max90-all-over-print-basketball-t-shirt-Bg6CnP.png",
      brand_name: "Nike Max90",
      price: "16,480",
      priority: "Men's All-over print Basketball T-Shirt",
    },

    {
      img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_476,c_limit/ed1fa4f9-93c1-4ebc-96b3-f0a757aced15/jordan-one-take-4-pf-shoes-cdsVn1.png",
      brand_name: "Jordon One Take 4 PF",
      price: "9,900",
      priority: "Men's Shoes",
    },
    {
      img: "https://image.goat.com/375/attachments/product_template_pictures/images/010/223/048/original/13607_00.png.png",
      brand_name: "Nike Air SC",
      price: "10,480",
      priority: "Women Shoes",
    },
    {
      img: "https://image.goat.com/375/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png",
      brand_name: "Nike Air Max SYSTM",
      price: "6,480",
      priority: "Older Kids Shoes",
    },
    {
      img: "https://image.goat.com/375/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png",
      brand_name: "Nike Air Max 90 SE",
      price: "12,789",
      priority: "Mens Shoes",
    },
  ];
  function scrollToTop(e) {
    window.scrollTo({ top: e, behavior: "smooth" }); // Scroll to the top with a smooth animation
  }
  return (
    <>
      <Header />
      <div className="px-6">
        <div className="sticky top-[0px] w-full bg-[#fff]">
          <div className="flex w-[60%] justify-between ">
            <h1
              onClick={() => scrollToTop(0)}
              className={`cursor-pointer text-[20px] font-bold text-left mt-5 mb-4 `}
            >
              The Essentials
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
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/b5a680e2-c60c-47be-8766-900cd11cc8f4/nike-just-do-it.jpg"
          alt=""
          srcset=""
        />
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
      </div>
    </>
  );
};
