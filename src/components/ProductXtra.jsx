import React, { useEffect, useState } from "react";
import T from "./ProductXtraList";

const ProductXtra = () => {
  const [data, setData] = useState([]);
  const [two, setTwo] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getTwo = async () => {
      setLoading(true);
      const response = await fetch(
        "https://6278f089d00bded55ae17142.mockapi.io/sendo/product"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setTwo(await response.json());
        setLoading(false);
      }
    };
    getTwo();
  }, []);
  const ShowTwo = () => {
    return (
      <ul className="flex items-center lg:w-[1200px] flex-wrap ml-[10px] mt-[5px] w-[370px]">
        {two.slice(2, 17).map((t) => (
          <li
            key={t.id}
            className="lg:ml-10 lg:mb-4 lg:w-[200px] w-[160px] ml-3 mb-2"
          >
            <T t={t} />
          </li>
        ))}
      </ul>
    );
  };
  const Loading = () => {
    return <></>;
  };
  return <>{loading ? <Loading /> : <ShowTwo />}</>;
};

export default ProductXtra;
