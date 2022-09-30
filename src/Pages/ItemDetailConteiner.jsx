import React from "react";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import NavBar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import FireBase from "../hooks/FireBase"

const ItemDetailConteiner = () => {
  const { dataFireBase, item } = FireBase()
  const { idItem } = useParams();

  useEffect(() => {

    dataFireBase(idItem)

  }, [idItem])

  return (
    <>
      {item.length > 0 && (
        <div>
          <NavBar />
          <ItemDetail detail={item} />
          <Footer />
        </div>
      )}
    </>
  )
};

export default ItemDetailConteiner;
