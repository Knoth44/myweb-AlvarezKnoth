import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import db from "../service";
import { collection, getDocs } from "firebase/firestore";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/Navbar";

const Home = () => {

  const [products, setproducts] = useState([]);
  const { categoryid } = useParams()  

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
      {products.length && (
        <>
          <NavBar />
          <ItemList products={products} />
          <Footer/>
        </>
      )}
    </div>
  );
};

export default Home;
