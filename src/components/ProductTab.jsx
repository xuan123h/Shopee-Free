import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import ProductXtra from "./ProductXtra";
import ProductDay from "./ProductDay";

const ProductTab = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const [data, setData] = useState([]);
  const [one, setOne] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getOne = async () => {
      setLoading(true);
      const response = await fetch(
        "https://6278f089d00bded55ae17142.mockapi.io/sendo/product"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setOne(await response.json());
        setLoading(false);
      }
    };
    getOne();
  }, []);
  const Loading = () => {
    return <></>;
  };
  const ShowOne = () => {
    const [loadMore, setLoadMore] = useState(false);
    const handleLoadMore = () => {
      setLoadMore(!loadMore);
    };
    return (
      <ul className="flex items-center lg:w-[1200px] flex-wrap ml-[10px] mt-[5px] w-[370px]">
        {one.slice(0, 15).map((o) => (
          <li
            key={o.id}
            className="lg:ml-10 lg:mb-4 lg:w-[200px] w-[160px] ml-3 mb-2"
          >
            <ProductDay o={o} />
          </li>
        ))}
        <button
          className={
            "w-40 h-12 bg-violet-500 text-white rounded-lg mx-auto mt-[1200px] absolute left-[540px] lg:opacity-100 lg:visible opacity-0 invisible"
          }
          onClick={handleLoadMore}
        >
          {loadMore === true ? "Xem thêm" : "Thu gọn"}
        </button>
        {!loadMore && (
          <ul className="flex items-center w-full bg-white lg:opacity-100 lg:visible opacity-0 invisible">
            {one.slice(0, 6).map((o) => (
              <li key={o.id} className="ml-3 mb-4 py-6">
                <ProductDay o={o} />
              </li>
            ))}
          </ul>
        )}
      </ul>
    );
  };
  return (
    <div className="bg-white lg:w-[1230px] mx-auto lg:mt-[40px] lg:h-[920px] w-[370px] lg:-translate-y-0 -translate-y-52 h-[1400px]">
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab label="Gợi ý hôm nay" />
        <Tab label="Hoàn xu xtra" />
      </Tabs>
      {selectedTab === 0 && <div>{loading ? <Loading /> : <ShowOne />}</div>}
      {selectedTab === 1 && (
        <div>
          {" "}
          <ProductXtra />{" "}
        </div>
      )}
    </div>
  );
};

export default ProductTab;
