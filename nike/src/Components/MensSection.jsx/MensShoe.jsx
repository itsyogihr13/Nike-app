import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Footer } from "../Header/Footer";
import { Loading } from "../Loading";
export const MenShoe = () => {
  const [data, setData] = useState();
  const [hide, setHide] = useState(false);
  const [sort, setSort] = useState("New");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [categoryVal, setCategoryVal] = useState("Men");
  const handleChange = (e) => {
    if (e.target.value === "Low") {
      data.sort((a, b) => {
        if (a.price_main > b.price_main) return 1;
        else return -1;
      });
      setData([...data]);
    } else if (e.target.value === "High") {
      data.sort((a, b) => {
        if (a.price_main > b.price_main) return -1;
        else return 1;
      });
      setData([...data]);
    }
    setSort(e.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSortbyCategory = (e) => {
    setCategoryVal(e.target.value);
    axios
      .get(
        `https://easy-rose-python-vest.cyclic.app/api/shoes?category=${e.target.value}`
      )
      .then((res) => setData(res.data));
  };
  const handleSortbygender = (e) => {
    setCategoryVal(e.target.value);
    axios
      .get(
        `https://easy-rose-python-vest.cyclic.app/api/shoes?gender=${e.target.value}`
      )
      .then((res) => setData(res.data));
  };

  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (checkboxValue, a, b) => {
    setSelectedCheckbox(
      checkboxValue === selectedCheckbox ? null : checkboxValue
    );
    axios
      .get(
        `https://easy-rose-python-vest.cyclic.app/api/shoes?_sort=price_main_gte=${a}&price_main_lte=${b}`
      )
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    axios
      .get("https://easy-rose-python-vest.cyclic.app/api/shoes")
      .then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);
  return (
    <>
      {loading && <Loading />}
      {!loading && <Header setSearch={setSearch} />}
      <div className="px-6">
        <div
          className={`w-full bg-[#fff] flex justify-between items-center ${
            search.length > 3 && loading ? "sticky top-[0px]" : ""
          }`}
        >
          <h1 className="text-[30px] font-medium text-left mt-4 mb-3">
            {categoryVal.charAt(0).toUpperCase() + categoryVal.slice(1)}{" "}
            Collection ({data?.length})
          </h1>
          <div className="flex text-right w-[20%] justify-evenly mt-4 mb-3 list-none items-center cursor-pointer">
            <li onClick={() => setHide(!hide)}>
              {hide ? "Show" : "Hide"} Filter
            </li>
            <FilterAltIcon onClick={() => setHide(!hide)} />
            <li onClick={() => setOpen(true)}>Sort</li>
            <SortIcon onClick={() => setOpen(true)} />
            {search.length > 3 ? (
              <></>
            ) : (
              <>
                <FormControl sx={{ width: 100 }}>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={sort}
                    onChange={handleChange}
                  >
                    <MenuItem value={"New"}>Newest</MenuItem>
                    <MenuItem value={"Low"}>Low to High</MenuItem>
                    <MenuItem value={"High"}>High to Low</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}
          </div>
        </div>
        <div className="flex w-full">
          {!hide && (
            <div className="filter-box w-[25%] text-left mb-4 pr-6 pl-3">
              <button className="mb-4" onClick={handleSortbygender} value="men">
                Men
              </button>
              <br />
              <button
                className="mb-4"
                onClick={handleSortbygender}
                value="women"
              >
                Women
              </button>
              <br />
              <button
                className="mb-4"
                onClick={handleSortbygender}
                value="youth"
              >
                Youth
              </button>
              <button
                className="mb-4"
                onClick={handleSortbyCategory}
                value="lifestyle"
              >
                Lifestyle
              </button>
              <br />
              <button
                className="mb-4"
                onClick={handleSortbyCategory}
                value="basketball"
              >
                Basketball
              </button>{" "}
              <br />
              <button
                className="mb-4"
                onClick={handleSortbyCategory}
                value="other"
              >
                Others
              </button>
              <br />
              <br />
              <hr />
              <h1 className="text-[20px] font-medium text-left mt-6 mb-4">
                Sort by Price
              </h1>
              <FormControlLabel
                label="₹10000.00 - ₹13000.00"
                control={
                  <Checkbox
                    checked={selectedCheckbox === "checkbox1"}
                    onChange={() =>
                      handleCheckboxChange("checkbox1", 10000, 13000)
                    }
                  />
                }
              />
              <FormControlLabel
                label="₹13000.00 - ₹15000.00"
                control={
                  <Checkbox
                    checked={selectedCheckbox === "checkbox2"}
                    onChange={() =>
                      handleCheckboxChange("checkbox2", 13000, 15000)
                    }
                  />
                }
              />
              <FormControlLabel
                label="₹15000.00 - ₹20000.00"
                control={
                  <Checkbox
                    checked={selectedCheckbox === "checkbox3"}
                    onChange={() =>
                      handleCheckboxChange("checkbox3", 15000, 20000)
                    }
                  />
                }
              />
              <FormControlLabel
                label="Above ₹20000.00"
                control={
                  <Checkbox
                    checked={selectedCheckbox === "checkbox4"}
                    onChange={() =>
                      handleCheckboxChange("checkbox4", 20000, 50000)
                    }
                  />
                }
              />
            </div>
          )}
          <div>
            <div
              className={`grid mt-4 ${
                !hide ? "grid-cols-3" : "grid-cols-4"
              }  gap-4`}
            >
              {data?.map((el) => (
                <Link to={`/Singleprod/${el.id}`}>
                  <div>
                    <img
                      className=" bg-primarybg  flip-image"
                      src={el.grid_picture_url}
                    />
                    <h2 className="text-left text-[18px] font-medium mt-2">
                      {el.name}
                    </h2>
                    <div className="flex justify-between w-[90%] font-light text-[16px] mb-9">
                      <h2>{`Available in ${el.size_range.length} Size`}</h2>
                      <h2>{`MRP: ₹  ${el.price_main}`}</h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
