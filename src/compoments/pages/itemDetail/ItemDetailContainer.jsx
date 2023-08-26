import ItemDetail from "./ItemDetail";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    let totalRef = collection(db, "products");
    let productRef = doc(totalRef, id);
    getDoc(productRef).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
