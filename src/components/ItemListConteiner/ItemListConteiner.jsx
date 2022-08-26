import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinners from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList";
import axios from "axios";

const itemListConteiner = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const promiseAsync = async () => {
      try {
        const anime = await axios.get("https://api.jikan.moe/v4/top/anime");
        const dataAnime = await anime.data;
        setproducts(dataAnime.data);
      } catch (err) {
        console.log(err);
      }
    };
    promiseAsync();
  }, []);

  return (
    <div>
      {products.length <= 0 ? (
        <div style={{ width: "100em", height: "100em" }}>
          <Spinners />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default itemListConteiner;
