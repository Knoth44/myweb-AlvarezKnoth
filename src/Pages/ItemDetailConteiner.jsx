import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import NavBar from "../components/NavBar/Navbar";
import db from "../service";
import { collection, getDocs } from "firebase/firestore";
import Footer from "../components/Footer/Footer";
import { GlobalProvider } from "../context/GlobalProvider";

const ItemDetailConteiner = () => {

  const { idItem } = useParams();
  const [detail, setDetail] = useState([]);
  const { setCargar } = GlobalProvider()

  useEffect(() => {

    const data = collection(db, "products")

    getDocs(data).then(res => {
      setCargar(true)
      setTimeout(() => {
        let aux;
        if (idItem) {
          aux = res.docs.map(i => i = { id: i.id, ...i.data() })
          aux = aux.filter(j => j.id === idItem)
          setCargar(false)
        }
        setDetail(aux)
      }, 1000);
    })

  }, [idItem])

  return (
    <>
      {detail.length > 0 && (
        <div>
          <NavBar />
          <ItemDetail detail={detail} />
          <Footer />
        </div>
      )}
    </>
  )
};

export default ItemDetailConteiner;
