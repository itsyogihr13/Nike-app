import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useEffect, useState } from "react";
export const Header = () => {
  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    searchVal.length > 2 ? setLoading(true) : <></>;
  }, [searchVal]);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return (
      <div className="loader">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXdyazUyMWRranp5aDBncG16YW5qZm94MmlqZzg3bHVuYmtjbWV6ciZjdD1z/LNkvjiNPL7XyoR2I4F/giphy.gif"
          alt=""
          srcset=""
        />
      </div>
    );
  }
  return (
    <>
      <div className="flex w-full items-center justify-between px-6  bg-primarybg">
        <div>
          <img
            className="w-[50px] h-[50px]"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fambaubeufwpravdy1xs/sb-zoom-blazer-mid-skate-shoes-ZLRvRZ.png"
            alt="logo"
          />
        </div>
        <div className="flex justify-around w-[16%]">
          <li className="list-none text-[12px]">Find Store </li>
          <li className="list-none text-[12px]">Join Us </li>
          <li className="list-none text-[12px]">Help </li>
          <li className="list-none text-[12px]">Sign In </li>
        </div>
      </div>
      <div className="visible flex w-full justify-between items-center px-6">
        <div className="w-[18%]">
          <img
            className="w-[50px] h-[50px]"
            src="https://masterbundles.com/wp-content/uploads/2022/03/1-nike-logo-design-%E2%80%93-history-meaning-and-evolution.png"
            alt="logo"
          />
        </div>
        <div
          className={
            searchVal.length > 1
              ? "header-component hidden w-[40%] flex justify-around items-center pt-2"
              : "header-component visible w-[40%] flex justify-around items-center pt-2"
          }
        >
          <li>New & Featured</li>
          <li> Men</li>
          <li> Women</li>
          <li> Kids</li>
          <li> Sale</li>
          <li> SNKRS</li>
        </div>
        <div
          className={
            searchVal.length > 1
              ? "items-center w-[65%] flex justify-between"
              : "items-center w-[20%] flex justify-between"
          }
        >
          <input
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            type="search"
            name="search"
            placeholder="Search..."
            className={
              searchVal.length > 1
                ? "border text-[14px] w-[500px] bg-primarybg rounded-[30px] px-4 py-2  mt-3 focus:outline-none focus:ring-2 focus:ring-primarybg focus:border-transparent"
                : "border text-[14px]  bg-primarybg rounded-[30px] px-4 py-2 w-[200px] mt-3 focus:outline-none focus:ring-2 focus:ring-primarybg focus:border-transparent"
            }
          />
          {!searchVal.length && (
            <>
              <FavoriteBorderIcon />
              <WorkOutlineIcon />
            </>
          )}
        </div>
      </div>
    </>
  );
};
