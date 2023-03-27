import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { Header } from "../Header/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { mapData } from "./CarouselData";
import { useDispatch } from "react-redux";
import { AddProdToCart, AddToFav } from "../../redux/Action";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Footer } from "../Header/Footer";
export const SingleProd = () => {
  const [data, setData] = useState([]);
  const _id = useParams();
  const dispatch = useDispatch();
  let id = parseInt(_id.id);
  const [search, setSearch] = useState("");
  const [size, setSize] = useState("");
  const [open, setOpen] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  useEffect(() => {
    axios.get(`http://localhost:8080/shoes/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);
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
  const sizeBoxDiv = document.getElementById("sizeBox");
  console.log(isSizeSelected);
  return (
    <>
      <Header setSearch={setSearch} />
      <div className="px-6">
        <div className="flex justify-between w-full">
          <div className="w-[65%] grid grid-cols-2 gap-4  pl-[3rem]">
            <img
              className={`${
                search.length > 3 ? "" : "origin-top-left rotate-12"
              }`}
              src={data.original_picture_url}
              alt=""
            />
            <img
              src={data.original_picture_url}
              className={`${
                search.length > 3 ? "" : "origin-center rotate-45 mt-12"
              }`}
            />
            <img
              className="origin-bottom -rotate-12"
              src={data.original_picture_url}
              alt=""
            />
            <img
              className="origin-bottom -rotate-60"
              src={data.original_picture_url}
            />
          </div>
          <div className="w-[30%] pr-6 mt-[3rem] text-left">
            <h1 className="text-[25px] font-normal ">{data.name}</h1>
            <p className="text-[15px] font-medium ">Men's Shoes</p>
            <br />
            <p className="text-[18px] font-medium">
              {`MRP: ₹  ${data.price_main}`}
            </p>
            <p className="text-[#787d82] text-[16px]">
              incl of taxes <br /> (Also includes all applicable duties)
            </p>
            <div className="flex justify-between w-full my-4">
              <p className="text-[15px] font-medium">Select size</p>
              <p className="text-[15px] font-light">Select Guide</p>
            </div>
            <div id="sizeBox" className="grid grid-cols-4 gap-4">
              {Array.isArray(data.size_range) &&
                data.size_range?.slice(0, 10).map((el) => (
                  <div
                    onClick={() => {
                      setSize(el);
                      setIsSizeSelected(true);
                    }}
                    className={`cursor-pointer w-[100px] border text-center active:bg-primarybg p-2 hover:bg-primarybg focus:bg-primarybg`}
                  >
                    {el}
                  </div>
                ))}
            </div>
            <input
              type="button"
              disabled={size === "" || !isSizeSelected}
              onClick={() => {
                if (size) {
                  dispatch(AddProdToCart(data, size));
                  setOpen(true);
                }
              }}
              className="primaryblk-button mt-6 rounded-[10%] w-[90%] content-center"
              value="Add to Bag"
            />

            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={() => setOpen(false)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert onClose={() => setOpen(false)} severity="success">
                {isSizeSelected
                  ? "Item Added Successfully !"
                  : "Please select the size"}
              </Alert>
            </Snackbar>
            <button
              onClick={() => {
                setOpen(true);
                dispatch(AddToFav(data));
              }}
              className="bg-[#fff] text-[#000000] text-center min-h-[20px] cursor-pointer px-4 py-2 font-normal text-[16px] mt-6 rounded-[12px] w-[90%] content-center border border-black"
            >
              Favourate
            </button>
            <div className="bg-primarybg p-6 text-left mt-8">
              This Product is made with atleast 20% recycleed content by weight
            </div>
            <p className="mt-6">
              In love with the classic look of '80s basketball but have a thing
              for the fast-paced culture of today's game? Meet the Nike Court
              Vision Low. A classic remixed with at least 20% recycled materials
              by weight, its crisp upper and stitched overlays keep the soul of
              the original style. The plush, low-cut collar keeps it sleek and
              comfortable for your world.
            </p>
            <li className="mt-4 font-medium text-[16px]">
              Colour Shown: White/White/Black
            </li>
            <li className="mt-4 font-medium text-[16px]">Style: DH2987-101</li>
            <Accordion className="mt-8">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> Product Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Declaration of Importer: Direct import by the individual
                  customer
                  <p className="mt-4">
                    Marketed by: Nike Global Trading B.V. Singapore Branch, 30
                    Pasir Panjang Road, #10-31/32, Mapletree Business City,
                    Singapore 117 440
                  </p>
                  <p className="mt-4">Net Quantity: 1 Pair</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> Save & Fits</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <li>Fits large; we'd recommend ordering a half-size down</li>
                  <li>Size Guide</li>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div>
          <h1 className="text-center text-[20px] font-normal">
            Explore the Nike Court Vision Low Next Nature Men's Shoes
          </h1>
          <img
            className="mt-[3rem]"
            src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/ba743504-5a47-493e-a34b-e4a0b1981ec7/nike-just-do-it.jpg"
            alt=""
            srcset=""
          />
          <h1 className="text-center text-[20px] font-normal mt-8">
            Made from at least 20% recycled material by weight.
          </h1>
          <img
            className="mt-[3rem]"
            src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/e455e570-d3fc-46c3-aede-11b57ebc7cb7/image.jpg"
            alt=""
            srcset=""
          />
          <h1 className="text-center text-[20px] font-normal mt-[5rem]">
            Using synthetic materials, the design features materials that echo
            mid-1980s basketball shoes.{" "}
          </h1>
          <h1 className="text-[30px] font-bold text-left my-8">
            Best of Air Max
          </h1>
          <Carousel responsive={responsive} transitionDuration={10}>
            {mapData?.map((el) => {
              return (
                <Link to="/Men/shoe">
                  <div className="ExploreDiv">
                    <img
                      className="ExploreDivImg bg-primarybg w-[95%]"
                      src={el.img}
                    />
                    <div className="flex justify-between w-[90%] mt-2">
                      <h1 className="font-medium">{el.brand_name}</h1>
                      <h1 className="font-medium">{el.price}</h1>
                    </div>
                    <p className="text-left text-[14px]">{el.priority}</p>
                  </div>
                </Link>
              );
            })}
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};
