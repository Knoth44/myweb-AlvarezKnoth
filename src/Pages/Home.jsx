import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinners from "../components/Spinner/Spinner";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import db from "../service";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {

  const [products, setproducts] = useState([]);
  const { categoryid } = useParams()

  // useEffect(() => {
  //   const promiseAsync = async () => {
  //     try {
  //       const anime = await axios.get("https://api.jikan.moe/v4/top/anime");
  //       const dataAnime = await anime.data;
  //       const categoryAnime = await dataAnime.data
  //       let productsFilters = [];
  //       productsFilters = categoryid ? categoryAnime.filter(items => items.genres.some((i) => i.name === categoryid && items))
  //         : productsFilters = categoryAnime
  //       setproducts(productsFilters)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   promiseAsync(); 

  // }, [categoryid]);


  useEffect(() => {

    const data = collection(db, "products")

    getDocs(data).then((resolve) => {
      setTimeout(() => {
        let aux;
        if (categoryid) {
          aux = resolve.docs.map(i => i = { id: i.id, ...i.data() })
          aux = aux.filter(j => j.genres.some(l => l === categoryid && j))
        } else {
          aux = resolve.docs.map(i => i = { id: i.id, ...i.data() })
        }
        setproducts(aux)
      }, 1000);

    }).catch((err) => {
      console.log(err)
    })
  }, [categoryid])

  return (
    <div>
      {products.length <= 0 ? (
        <div>
          <Spinners />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default Home;
