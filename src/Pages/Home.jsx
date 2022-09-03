import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinners from "../components/Spinner/Spinner";
import ItemList from "../components/ItemList/ItemList";
import axios from "axios";
import { useParams } from "react-router-dom";
import db from "../service";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {

  const [products, setproducts] = useState([]);
  const { categoryid } = useParams()

  useEffect(() => {
    const promiseAsync = async () => {
      try {
        const anime = await axios.get("https://api.jikan.moe/v4/top/anime");
        const dataAnime = await anime.data;
        const categoryAnime = await dataAnime.data
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

  useEffect(() => {

    const getColData = async () => {

      try {
        
        const data = collection(db, "items")
        const col = await getDocs(data)
        const responsive = col.docs.map(i=> i = {id:i.id, ...i.data()})
        console.log(responsive);

      } catch (error) {

        console.log(error)
      }
  
    }

    getColData()
  }, [])


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
