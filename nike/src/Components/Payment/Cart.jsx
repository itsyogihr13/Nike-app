import { useSelector } from "react-redux";
import { Header } from "../Header/Header";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useState } from "react";
import { AddToFav, RemoveProdToCart } from "../../redux/Action";
export const CartPage = () => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const handleDecrement = (e) => {
    const newQuantity = quantity - e;
    if (newQuantity < 1) {
      setQuantity(0);
    } else {
      setQuantity(newQuantity);
    }
  };
  const handleIncrement = (e) => {
    setQuantity(quantity + e);
  };
  let diliveryCharges = 700;
  // let totalPrice = quantity
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  let arr = [];
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  arr.push(cart);
  console.log(arr[0].length);
  return (
    <div>
      <Header />
      <div className="py-6">
        <div className="flex justify-between m-auto w-[75%] mt-8">
          <div className="w-[60%]">
            <h3 className=" text-[25px] text-left font-medium mb-6 tracking-[2px]">
              Bag ({arr[0].length})
            </h3>
            {arr[0]?.map((el) => (
              <div className="flex w-full mb-10">
                <Link to={`/Singleprod/${el.id.id}`}>
                  <div className="img-div bg-primarybg p-4 ">
                    <img
                      className="h-[100px] w-[150px]"
                      src={el?.id.grid_picture_url}
                      alt="img"
                    />
                  </div>
                </Link>
                <div className="flex w-full pl-6 justify-between">
                  <div className="text-left">
                    <h1 className="font-medium text-[18px]">{el?.id.name}</h1>
                    <p className="text-[16px] text-[#787d82] mt-3 font-normal ">
                      Men's Shoes
                    </p>
                    <p className="text-[16px] text-[#787d82]  font-normal ">
                      Black/White/Laser Blue
                    </p>
                    <div className="flex justify-between w-[50%]">
                      <p className="text-[16px] text-[#787d82]  font-normal ">
                        Size 11
                      </p>
                      <p className="text-[16px] text-[#787d82]  font-normal ">
                        Quantity
                      </p>
                    </div>
                    <div className="flex justify-between w-[25%] mt-4">
                      <FavoriteBorderIcon
                        onClick={() => {
                          setOpen(true);
                          // console.log(el.id);
                          // dispatch(AddToFav(el.id.id));
                        }}
                      />
                      <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={() => setOpen(false)}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                      >
                        <Alert
                          onClose={() => setOpen(false)}
                          severity="success"
                        >
                          Item Added Successfully !
                        </Alert>
                      </Snackbar>
                      <DeleteOutlineIcon
                        onClick={() => {
                          console.log(el.id.id);
                          dispatch(RemoveProdToCart(el?.id.id));
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-right">
                    <p id="price" className="text-[16px] font-normal">
                      {`MRP: ₹  ${el.id.price_main}.00`}
                    </p>
                    <button onClick={() => handleDecrement(1)}>-</button>
                    <button>{quantity}</button>
                    <button onClick={() => handleIncrement(1)}>+</button>
                  </div>
                </div>
              </div>
            ))}
            {!arr[0].length && (
              <div>
                <h3 className=" text-[25px] text-left font-medium my-6 mt-[2rem] tracking-[2px]">
                  No items will be Added in Beg Yet
                </h3>
              </div>
            )}
          </div>
          {arr[0].length && (
            <div className="w-[33%] pl-4">
              <h3 className=" text-[25px] text-left font-medium mb-6 tracking-[2px]">
                Summary
              </h3>
              <div className="flex justify-between mt-6 w-full">
                <p className="text-[16px]   font-normal ">Subtotal</p>
                {arr[0]?.map((el) => (
                  <p className="text-[16px] font-normal ">
                    {`MRP: ₹  ${el.id.price_main}.00`}
                  </p>
                ))}
              </div>
              <div className="flex justify-between w-full mt-4">
                <p className="text-[16px] text-left  font-normal ">
                  Estimated Dilivery & Handling
                </p>
                <p className="text-[16px]   font-normal ">MRP: ₹ 700</p>
              </div>
              <br />
              <hr />
              <div className="flex justify-between w-full mt-6">
                <p className="text-[16px]   font-normal ">Total</p>
                <p className="text-[16px]   font-medium ">MRP: ₹ 70090</p>
              </div>
              <br />
              <hr />
              <button className="primaryblk-button mt-6 rounded-[10%] w-[90%] content-center">
                Procced to Checkout
              </button>
              <Link to="/Men">
                <button className="bg-[#fff] text-[#000000] text-center min-h-[20px] cursor-pointer px-4 py-2 font-normal text-[16px] mt-6 rounded-[12px] w-[90%] content-center border border-black">
                  {!arr[0].length ? "Go to Shoping" : " Back to Shoping"}
                </button>
              </Link>
            </div>
          )}
        </div>
        <Link to="/Men">
          <button className="bg-[#fff] text-[#000000] text-center mt-[4rem] min-h-[20px] cursor-pointer px-4 py-2 font-normal text-[16px] mt-6 rounded-[12px] w-[15%] hover:text-[#fff] hover:bg-[#000000] content-center border border-black">
            {!arr[0].length ? "Go to Shoping" : " Back to Shoping"}
          </button>
        </Link>
      </div>
    </div>
  );
};
