import Home from "./Home";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const HomeContainer = () => {
  const [items, setItems] = useState([]);



  useEffect(() => {
    let totalProducts = collection(db, "products");
    getDocs(totalProducts).then((resp) => {
      let nuevoArreglo = resp.docs.map((products) => {
        return { ...products.data(), id: products.id };
      });
      setItems(nuevoArreglo);
      console.log(nuevoArreglo);
    });
  }, []);

  return <Home items={items} />;
};

export default HomeContainer;
