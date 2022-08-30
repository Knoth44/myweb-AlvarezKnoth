import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinners from "../components/Spinner/Spinner";
import ItemList from "../components/ItemList/ItemList";
import axios from "axios";
import { useParams } from "react-router-dom";

const Home = () => {

  const [products, setproducts] = useState([]);
  const { categoryid } = useParams()

  useEffect(() => {
    const promiseAsync = async () => {
      try {
        const anime = await axios.get("https://api.jikan.moe/v4/top/anime");
        const dataAnime = await anime.data;
        const categoryAnime = await dataAnime.data
        console.log(categoryAnime);
        let productsFilters = [];
        productsFilters = categoryid ? categoryAnime.filter(items => items.genres.some((i) => i.name === categoryid && items))
          : productsFilters = categoryAnime
        setproducts(productsFilters);
      } catch (err) {
        console.log(err);
      }
    };
    promiseAsync();

  }, [categoryid]);

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

export default Home;
