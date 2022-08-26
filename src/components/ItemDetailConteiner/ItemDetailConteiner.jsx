import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinners from "../Spinner/Spinner";
import axios from "axios";

const ItemDetailConteiner = () => {

  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  let url = `https://api.jikan.moe/v4/anime/${id}`;


  useEffect(() => {
    const promiseId = async () => {
      try {
        const animeID = await axios.get(url );
        const response = await animeID.data
        setDetail(response.data)
      } catch (err) {
        console.log(err);
      }
    };
    promiseId()
  }, [id]);

  return (
    <>
     {detail.length <= 0 ? (
        <div style={{ width: "100em", height: "100em" }}>
          <Spinners />
        </div>
      ) : (<ItemDetail detail={detail}/>
      )}
    </>
  )
};

export default ItemDetailConteiner;
