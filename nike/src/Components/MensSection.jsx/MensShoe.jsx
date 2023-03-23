import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
export const MenShoe = () => {
  const [data, setData] = useState();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/shoes").then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div className="px-6">
      <Header />
      <div className="sticky top-[0px] w-full bg-[#fff] flex justify-between items-center">
        <h1 className="text-[30px] font-medium text-left mt-4 mb-3">
          Men Collection ({data?.length})
        </h1>
        <div className="flex text-right w-[15%] justify-evenly mt-4 mb-3 list-none">
          <li>{hide ? "Show" : "Hide"} Filter</li>
          <FilterAltIcon onClick={() => setHide(!hide)} />
          <li>Sort</li>
          <SortIcon />
        </div>
      </div>
      <div className="flex w-full">
        {!hide && <div className="filter-box w-[25%]"></div>}
        <div>
          <div
            className={`grid mt-4 ${
              !hide ? "grid-cols-3" : "grid-cols-4"
            }  gap-4`}
          >
            {data?.map((el) => (
              <div Link to={`Singleprod/${el.id}`}>
                <img className=" bg-primarybg" src={el.grid_picture_url} />
                <h2 className="text-left text-[18px] font-medium mt-2">
                  {el.name}
                </h2>
                <div className="flex justify-between w-[90%] font-light text-[16px] mb-9">
                  <h2>{`Available in ${el.size_range.length} Size`}</h2>
                  <h2>{`MRP: ₹  ${el.price_main}`}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
