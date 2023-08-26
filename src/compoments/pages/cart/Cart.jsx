import CardProductDetail from "../../common/cardProductDetail/CardProductDetail";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <section className={styles.headerItemDetail}>
        <img
          src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692358189/Mankra-Sitio-Web/Assets/LogoItemDetail_nircil.svg"
          alt="Logo Mankra"
          className={styles.logoMankra}
        />
        <Link to="/">INICIO</Link>
      </section>
      <CardProductDetail />
    </>
  );
};

export default Cart;
