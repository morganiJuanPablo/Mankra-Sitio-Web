import { Link } from "react-router-dom";
import GalleryItemDetailContainer from "../../common/galleryItemDetail/GalleryItemDetailContainer";
import styles from "./ItemDetail.module.css";
import CounterContainer from "../../common/counter/CounterContainer";
import SuscriptionContainer from "../../common/suscription/SuscriptionContainer";

const ItemDetail = () => {
  return (
    <div className={styles.container}>
      <section className={styles.headerItemDetail}>
        <img
          src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692358189/Mankra-Sitio-Web/Assets/LogoItemDetail_nircil.svg"
          alt="Logo Mankra"
        />
        <Link to="/">VOLVER</Link>
      </section>
      <GalleryItemDetailContainer />
      <section className={styles.productDetail}>
        <h1>Plumas (Pack de tres)</h1>
        <p className={styles.text}>
          Colgante de pared de macramé en forma de plumas, arte de pared
          minimalista, decoración de guardería Boho, regalo para el hogar.
        </p>
        <p className={styles.price}>190€</p>
      </section>
      <CounterContainer />
      <SuscriptionContainer />
      <p className={styles.legalText}>
        <b>Información sobre posibles costes adicionales.</b>
        En productos que se envíen desde fuera de la Unión Europea, puede que
        estés sujeto a cargos adicionales por IVA y, en su caso, aranceles
        aduaneros en tu país. Si AliExpress tiene la obligación legal de
        recaudar el IVA respecto de tu pedido, verás los precios con IVA
        incluido cuando vayas a confirmar tu pedido. Si necesitas más
        información sobre estos costes, por favor consulta con las autoridades
        fiscales y aduaneras de tu país.
      </p>
    </div>
  );
};

export default ItemDetail;
