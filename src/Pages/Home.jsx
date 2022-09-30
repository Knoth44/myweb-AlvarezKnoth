import React from "react";
import { useEffect } from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/Navbar";
import FireBase from "../hooks/FireBase";

const Home = () => {

  const { categoryDataFireBase, item } = FireBase()

  const { categoryid } = useParams()

  useEffect(() => {

    categoryDataFireBase(categoryid);
  
  }, [categoryid])

  return (
    <>
      {item.length > 0 && (
        <div>
          <NavBar />
          <ItemList products={item}/>
          <Footer />
        </div>
      ) 
      }
    </>
  );
};

export default Home;
