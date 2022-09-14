import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import Spinners from "../components/Spinner/Spinner";
import db from "../service";
import { collection, getDocs } from "firebase/firestore";

const ItemDetailConteiner = () => {

  const { idItem } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {

    const data = collection(db, "products")

    getDocs(data).then(res => {
      setTimeout(() => {
        let aux;
        if (idItem) {
          aux = res.docs.map(i => i = { id: i.id, ...i.data() })
          aux = aux.filter(j => j.id === idItem)
        } 
        setDetail(aux)
      }, 1000);
    })

  }, [idItem])

  return (
    <>
      {detail.length <= 0 ? (
        <div style={{ width: "100em", height: "100em" }}>
          <Spinners />
        </div>
      ) : (<ItemDetail detail={detail} />
      )}
    </>
  )
};

export default ItemDetailConteiner;
