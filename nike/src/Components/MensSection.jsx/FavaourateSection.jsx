import { Header } from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { RemoveProdFromFav } from "../../redux/Action";
export const FavouratePage = () => {
  let arr = [];
  const favorate = useSelector((store) => store.fav);
  arr.push(favorate);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <div className="py-6">
        <div className="w-[80%] m-auto">
          <h3 className=" text-[25px] text-left font-medium mb-10 tracking-[2px]">
            Favourate Items ({arr[0].length})
          </h3>
          {!arr[0].length && (
            <div>
              <h3 className=" text-[25px] font-medium my-6 pt-[5rem] tracking-[2px]">
                No items will be Added in Favourate List
              </h3>
            </div>
          )}
          {arr[0]?.map((el) => (
            <div className="flex w-full mb-10">
              <Link to={`/Singleprod/${el.id.id}`}>
                <div className="img-div bg-primarybg p-4 ">
                  <img
                    className="h-[100px] w-[150px]"
                    src={el.id.grid_picture_url}
                    alt="img"
                  />
                </div>
              </Link>
              <div className="flex w-full pl-6 justify-between">
                <div className="text-left">
                  <h1 className="font-medium text-[18px]">{el.id.name}</h1>
                  <p className="text-[16px] text-[#787d82] mt-3 font-normal ">
                    Men's Shoes
                  </p>
                  <p className="text-[16px] text-[#787d82]  font-normal ">
                    Black/White/Laser Blue
                  </p>
                  <div className="flex justify-between w-[80%] items-center mt-4">
                    <p className="text-[16px] text-[#787d82]  font-normal ">
                      Size 11
                    </p>
                    <DeleteOutlineIcon
                      onClick={() => {
                        dispatch(RemoveProdFromFav(el?.id.id));
                      }}
                    />
                    <p className="text-[16px] text-[#787d82]  font-normal ">
                      Quantity
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[16px] font-normal">
                    {`MRP: ₹  ${el.id.price_main}.00`}
                  </p>{" "}
                  <Link to={`/Singleprod/${el.id.id}`}>
                    <button className="primaryblk-button mt-6 rounded-[10%] w-[90%] ">
                      Product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/Men">
          <button className="bg-[#fff] text-[#000000] text-center min-h-[20px] cursor-pointer px-4 py-2 font-normal text-[16px] mt-6 rounded-[12px] w-[15%] hover:text-[#fff] hover:bg-[#000000] content-center border border-black">
            {!arr[0].length ? "Go to Shoping" : " Back to Shoping"}
          </button>
        </Link>
      </div>
    </div>
  );
};
