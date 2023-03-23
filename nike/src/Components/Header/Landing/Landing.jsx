import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Header } from "../Header";
import { VideoCard } from "../VideoCard";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
export const Landing = () => {
  const [data, setData] = useState();
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

  useEffect(() => {
    axios
      .get("http://localhost:8080/shoes?_limit=5")
      .then((res) => setData(res.data));
    console.log(data);
  }, []);
  console.log(data);
  const mapData = [
    {
      img: "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
      brand_name: "Nike Air Max 90 LTR",
      price: "6,456",
      priority: "Young Kids Shoes",
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
    {
      img: "https://image.goat.com/375/attachments/product_template_pictures/images/008/870/353/original/235806_00.png.png",
      brand_name: "Nike Air Flynit Racer",
      price: "16,480",
      priority: "Women Shoes",
    },

    {
      img: "https://image.goat.com/375/attachments/product_template_pictures/images/021/545/481/original/509480_00.png.png",
      brand_name: "Nike Air Max 97 SE",
      price: "16,900",
      priority: "Mens Shoes",
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
  return (
    <>
      <Header />
      <VideoCard />
      <div className="px-8 pt-12">
        <h1 className="text-[30px] font-bold text-left">Best of Air Max</h1>
        <Carousel responsive={responsive} transitionDuration={1000}>
          {mapData?.map((el) => {
            return (
              <div className="ExploreDiv">
                <img
                  className="ExploreDivImg bg-primarybg w-[95%]"
                  src={el.img}
                  alt=""
                />
                <div className="flex justify-between w-[90%] mt-2">
                  <h1 className="font-medium">{el.brand_name}</h1>
                  <h1 className="font-medium">{el.price}</h1>
                </div>
                <p className="text-left text-[14px]">{el.priority}</p>
              </div>
            );
          })}
        </Carousel>
        <h1 className="text-[30px] font-bold text-left mt-8 mb-6">Featured</h1>
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
          <button className="primaryblk-button mt-6 rounded-[10%]">
            Find your Shoe
          </button>
        </div>
        <h1 className="text-[30px] font-bold text-left mt-8 mb-6">
          Don't Miss
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
            <button className="primaryblk-button mt-6 rounded-[10%]">
              Shop
            </button>
          </div>
        </div>
        <h1 className="text-[30px] font-bold text-left mt-8 mb-6">
          The Essentials
        </h1>
        <div className="flex w-full justify-between">
          <img
            className="w-[32.8%]"
            src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/d94bfa7e-9357-406a-a124-1940712dfa0b/nike-just-do-it.png"
            alt=""
          />
          <img
            className="w-[32.8%]"
            src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/dc62b322-5c3f-4508-b21c-950683ed460f/nike-just-do-it.png"
            alt=""
          />
          <img
            className="w-[32.8%]"
            src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/58359474-a0de-4329-959c-55d1652d0912/nike-just-do-it.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
